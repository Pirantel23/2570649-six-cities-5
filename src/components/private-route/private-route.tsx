import {Navigate} from 'react-router-dom';
import { AuthStatus, APIRoute } from '@/const';

type PrivateRouteProps = {
  authorizationStatus: AuthStatus;
  children: JSX.Element;
}

export default function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthStatus.Authenticated
      ? children
      : <Navigate to={APIRoute.Login} />
  );
}
