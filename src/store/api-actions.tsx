import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { AppDispatch, State } from '@/types/state';
import { Offers } from '@/types/offer';
import { loadOffers, requireAuthorization, setOffersDataLoadingStatus } from '@/store/action';
import {saveToken, dropToken} from '@/services/token';
import {APIRoute, AuthStatus } from '@/const';
import {Credentials} from '@/types/credentials';
import { User } from '@/types/user';
export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);
export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthStatus.Authenticated));
    } catch {
      dispatch(requireAuthorization(AuthStatus.NotAuthenticated));
    }
  },
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