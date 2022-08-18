import React, {FC} from 'react';
import {Redirect, Route, RouteProps} from 'react-router-dom';
import {useSelector} from "../../utils/types";

export const ProtectedRoute: FC<RouteProps> = ({children, ...rest}) => {
  const {authorized} = useSelector(store => store.user);

  return (
    <Route
      {...rest}
      render={({location}) => authorized
        ? (children)
        : (<Redirect
            to={{
              pathname: '/login',
              state: {from: location},
            }}/>
        )
      }/>
  );
};