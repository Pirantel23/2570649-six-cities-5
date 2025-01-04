import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import { AppRoute, AuthStatus } from '@/const';
import PrivateRoute from '@/components/private-route/private-route';
import LoginScreen from '@/pages/login-screen/login-screen';
import MainScreen from '@/pages/main-screen/main-screen';
import OfferScreen from '@/pages/offer-screen/offer-screen';
import FavoritesScreen from '@/pages/favourite-screen/favourite-screen';
import NotFoundScreen from '@/pages/404/404';
import { useAppDispatch, useAppSelector } from '@/hooks/index';
import { setOffersList } from '@/store/action';

export default function App(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);

  const dispatch = useAppDispatch();
  dispatch(setOffersList(offers));

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainScreen />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginScreen />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthStatus.Authenticated}
              >
                <FavoritesScreen />
              </PrivateRoute>
            }
          />
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={<OfferScreen />}
          />
          <Route
            path='*'
            element={<NotFoundScreen />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}