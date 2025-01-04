import { Route, Routes } from 'react-router-dom';
import HistoryRouter from '@/components/history-route/history-route';
import browserHistory from '@/browser-history';
import {HelmetProvider} from 'react-helmet-async';
import { AppRoute, AuthStatus } from '@/const';
import PrivateRoute from '@/components/private-route/private-route';
import LoginScreen from '@/pages/login-screen/login-screen';
import MainScreen from '@/pages/main-screen/main-screen';
import OfferScreen from '@/pages/offer-screen/offer-screen';
import FavoritesScreen from '@/pages/favourite-screen/favourite-screen';
import NotFoundScreen from '@/pages/404/404';
import { useAppSelector } from '@/hooks/index';
import LoadingScreen from '@/pages/loading-screen/loading-screen';

export default function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);

  if (authorizationStatus === AuthStatus.Unknown || isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainScreen/>}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginScreen/>}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <FavoritesScreen/>
              </PrivateRoute>
            }
          />
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={<OfferScreen/>}
          />
          <Route
            path='*'
            element={<NotFoundScreen />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}