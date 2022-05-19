import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../../store/hooks';

interface IProps {
  children: JSX.Element;
}

function PrivateRoute(props: IProps) {
  const { children } = props;
  const { isAuth } = useAppSelector((state) => state.isAuth);

  return isAuth ? children : <Navigate to="/" />;
}

export default PrivateRoute;
