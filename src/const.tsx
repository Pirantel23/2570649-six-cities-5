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

export const URL_PIN =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
export const URL_PIN_ACTIVE =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';