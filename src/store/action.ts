import { createAction } from '@reduxjs/toolkit';
import { Offers } from '@/types/offer';
import { City } from '@/types/city';
import { Reviews, Review } from '@/types/review';
import { OfferDetailed } from '@/types/offer-detailed';
import { AuthStatus, SortType } from '@/const';

export const loadOffers = createAction<Offers>('offers/loadOffers');
export const loadOfferInDetails = createAction<{ offerInfo: OfferDetailed; nearestOffers: Offers; reviews: Reviews }>('offers/loadOfferInDetails');
export const sendReview = createAction<Review>('review/send');
export const changeCity = createAction<City>('city/changeCity');
export const setSortType = createAction<SortType>('setSortType');


export const setUserEmail = createAction<string>('setUserEmail');
export const requireAuthorization = createAction<AuthStatus>('requireAuthorization');
export const setError = createAction<string | null>('data/setError');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const setOfferInDetailsDataLoadingStatus = createAction<boolean>('data/setOfferInDetailsDataLoadingStatus');
