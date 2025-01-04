import { createAction } from '@reduxjs/toolkit';
import { Offers } from '@/types/offer';
import { City } from '@/types/city';
import { Reviews } from '@/types/review';
import { OffersDetailed } from '@/types/offer-detailed';
import { AuthStatus, SortType } from '@/const';

export const loadOffers = createAction<Offers>('offers/loadOffers');
export const loadOffersInDetails = createAction<OffersDetailed>('offers/loadOffersInDetails');
export const loadReviews = createAction<Reviews>('reviews/loadReviews');
export const changeCity = createAction<City>('city/changeCity');
export const setSortType = createAction<SortType>('setSortType');

export const requireAuthorization = createAction<AuthStatus>('requireAuthorization');
export const setError = createAction<string | null>('setError');
export const setOffersDataLoadingStatus = createAction<boolean>('setOffersDataLoadingStatus');