import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

const PrivateRouteExpert = ({ element: Component, ...rest }) => {
    const { user, loading } = useContext(UserContext);

    if (loading) {
        return <div>Loading...</div>;
    }

    return user && user.role === 'doctor' ? <Component {...rest} /> : <Navigate to="/blog" />;
};

const PrivateRoute = ({ element: Component, ...rest }) => {
    const { user, loading } = useContext(UserContext);

    if (loading) {
        return <div>Loading...</div>;
    }

    return user ? <Component {...rest} /> : <Navigate to="/login" />;
};

export { PrivateRoute, PrivateRouteExpert };