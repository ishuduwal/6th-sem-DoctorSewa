import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAllowed, isAdminRoute = false, redirectPath = '/', children }) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const isAdmin = userInfo?.isAdmin;

    // Check if route is for admin only and user is admin
    if (isAdminRoute && !isAdmin) {
        return <Navigate to={redirectPath} replace />;
    }

    if (!isAllowed) {
        return <Navigate to={redirectPath} replace />;
    }

    return children;
};

export default ProtectedRoute;
