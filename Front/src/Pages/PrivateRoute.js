import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({component:Component, ...rest}) => {
    let auth
    auth =window.localStorage.token
    //auth = null
    return (
        <Route {...rest}>{auth ? <Component/> : <Redirect to="/Login"/>}</Route>
    );
};

export default PrivateRoute;