import React, {FC, ReactNode} from 'react';
import {Redirect, Route} from 'react-router-dom';
import {useSelector} from "../../utils/types";

interface IProtectedRoute {
  children: ReactNode;
  exact?: boolean;
  path: string;
}

export const ProtectedRoute: FC<IProtectedRoute> = ({children, ...rest}) => {
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