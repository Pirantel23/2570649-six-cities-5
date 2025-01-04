import { createReducer } from '@reduxjs/toolkit';
import { loadOffers, changeCity, loadOffersInDetails , loadReviews, setSortType, requireAuthorization, setError, setOffersDataLoadingStatus } from './action';
import { AuthStatus, CITIES, SortType } from '@/const';
import { Offers } from '@/types/offer';
import { Reviews } from '@/types/review';
import { City } from '@/types/city';
import { OffersDetailed } from '@/types/offer-detailed';

type StateType = {
  city: City;
  offers: Offers;
  offersInDetails: OffersDetailed;
  reviews: Reviews;
  sortType: SortType;
  authorizationStatus: AuthStatus;
  error: string | null;
  isOffersDataLoading: boolean;
};

const initialState: StateType = {
  city: CITIES[0],
  offers: [],
  offersInDetails: [],
  reviews: [],
  sortType: SortType.Popular,
  authorizationStatus: AuthStatus.Unknown,
  error: null,
  isOffersDataLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, { payload }) => {
      state.city = { ...payload };
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOffersInDetails, (state, action) => {
      state.offersInDetails = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setSortType, (state, { payload }) => {
      state.sortType = payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    });
});