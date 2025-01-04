import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { AppDispatch, State } from '@/types/state';
import { Offers } from '@/types/offer';
import {saveToken, dropToken} from '@/services/token';
import {APIRoute, AuthStatus } from '@/const';
import {Credentials} from '@/types/credentials';
import { loadOfferInDetails, loadOffers, requireAuthorization, sendReview, setOfferInDetailsDataLoadingStatus, setOffersDataLoadingStatus, setUserEmail } from '@/store/action';
import { User } from '@/types/user';
import { OfferDetailed } from '@/types/offer-detailed';
import { Review, Reviews } from '@/types/review';
import { ReviewData } from '@/types/review-data';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    try {
      const { data: response } = await api.get<Offers>(APIRoute.Offers);
      dispatch(loadOffers(response));
    } finally {
      dispatch(setOffersDataLoadingStatus(false));
    }
  },
);


export const fetchOfferInDetailsAction = createAsyncThunk<void,
  {
    id: string;
  },
  { dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'data/fetchOfferInDetails',
    async ({ id }, { dispatch, extra: api }) => {
      dispatch(setOfferInDetailsDataLoadingStatus(true));

      try {
        const { data: offerInfo } = await api.get<OfferDetailed>(`${APIRoute.Offers}/${id}`);
        const { data: nearestOffers } = await api.get<Offers>(`${APIRoute.Offers}/${id}/nearby`);
        const { data: reviews } = await api.get<Reviews>(`${APIRoute.Comments}/${id}`);

        dispatch(loadOfferInDetails({ offerInfo, nearestOffers, reviews }));
      } finally {
        dispatch(setOfferInDetailsDataLoadingStatus(false));
      }
    }
  );

export const sendReviewAction = createAsyncThunk<void,
  {
    review: ReviewData;
    id: string;
  },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'user/sendReview',
    async ({ review, id }, { dispatch, extra: api }) => {
      const { data: responseReview } = await api.post<Review>(`${APIRoute.Comments}/${id}`,
        {
          comment: review.review,
          rating: review.rating,
        });
      dispatch(sendReview(responseReview));
    });

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const response = await api.get(APIRoute.Login);
      const data = response.data as { email: string };
      dispatch(requireAuthorization(AuthStatus.Authenticated));
      dispatch(setUserEmail(data.email));
    } catch {
      dispatch(requireAuthorization(AuthStatus.NotAuthenticated));
    }
  }
);

export const loginAction = createAsyncThunk<void, Credentials, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<User>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthStatus.Authenticated));
    dispatch(setUserEmail(email));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthStatus.NotAuthenticated));
  },
);
