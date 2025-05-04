import React, { useContext } from 'react';
import { authContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
const {user} = useContext (authContext)
// console.log(user);

const location = useLocation();
// console.log(location)

if(user && user?.email){
    return children;
}
return <Navigate state={location.pathname} to='/auth/login'></Navigate>
};

export default PrivateRoute;