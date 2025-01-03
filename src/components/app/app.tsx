import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PrivateRoute from '../private-route/private-route';
import FavoritesScreen from '../../pages/favourite-screen/favourite-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import PageNotFound from '../../pages/404/404';
import { Offers } from '@/types/offer';


type AppProps = {
  placeAmount: number;
  offers: Offers;
}

export default function App({placeAmount, offers}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainScreen placeAmount={placeAmount} offers={offers}/>}/>
        <Route path={AppRoute.Login} element={<LoginScreen/>}/>
        <Route path={AppRoute.Favorites} element={PrivateRoute(AuthStatus.NotAuthenticated, <FavoritesScreen offers={offers}/>)}/>
        <Route path={AppRoute.Offer} element={<OfferScreen offers={offers}/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}