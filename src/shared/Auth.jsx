import React from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const withAuth = (Component, isAdminRequired) => {
    const AuthenticatedComponent = (props) => {
        const IsUser = localStorage.getItem('token') || localStorage.getItem('IsAdmin')
        const isAdmin = localStorage.getItem('IsAdmin') !== null;
        if (IsUser) {
            if (isAdminRequired && !isAdmin) {
                toast.error('You do not have permission to access this page');
                return <Navigate to={'/'} />;
            }
            return <Component {...props} />;
        } else {
            toast.error('You do not have permission to access this page');
            return <Navigate to={'/'} />;
        }
    };

    return AuthenticatedComponent;
};

export default withAuth;
