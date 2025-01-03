export const Config = {
    placeAmount: 12,
};

export enum AppRoute {
    Root = '/',
    Login = '/login',
    Favorites = '/favorites',
    Offer = '/offer/:id',
}

export enum AuthStatus {
    Unknown,
    NotAuthenticated,
    Authenticated,
}