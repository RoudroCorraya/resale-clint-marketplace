import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../Hook/UseAdmin';

const DashAdminRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isLoading] = useAdmin(user?.email);
    if(loading || isLoading){
        return <div>Loding...</div>
    }
    if(user && isAdmin){
        return children;
    }
   return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default DashAdminRoute;