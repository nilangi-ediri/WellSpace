import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

const PrivateRoute = ({ element: Component, ...rest }) => {
    const { user, loading } = useContext(UserContext);

    if (loading) {
        return <div>Loading...</div>;
    }

    return user ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;