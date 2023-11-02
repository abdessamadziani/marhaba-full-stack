
import {Outlet, Navigate } from 'react-router-dom';
import { isAuthenticated } from './helpers';

export const PrivateRoutes = () => {
  //  let auth={'token':true}
  let auth=isAuthenticated()
     return (

        auth ? <Outlet/> : <Navigate to="/signin" />
          )

}

