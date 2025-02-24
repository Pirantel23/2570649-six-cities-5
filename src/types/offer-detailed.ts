import { User } from './user';
import { City } from './city';
import { Location } from './location';

export type OfferDetailed = {
    id: string;
    title: string;
    type: string;
    price: number;
    city: City;
    location: Location;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    description: string;
    bedrooms: number;
    goods: string[];
    host: User;
    images: string[];
    maxAdults: number;
}

export type OffersDetailed = OfferDetailed[];
