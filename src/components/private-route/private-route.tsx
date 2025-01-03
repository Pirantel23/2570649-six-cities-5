import {Navigate} from 'react-router-dom';
import { AuthStatus, AppRoute } from '@/const';


export default function PrivateRoute(authorizationStatus: AuthStatus, element: JSX.Element) {
  return (
    authorizationStatus === AuthStatus.Authenticated ? element : <Navigate to={AppRoute.Login} />
  );
}