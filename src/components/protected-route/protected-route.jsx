import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {useSelector} from 'react-redux';

export const ProtectedRoute = ({children, ...rest}) => {
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