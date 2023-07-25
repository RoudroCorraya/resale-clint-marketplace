import React, { useContext } from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';


const DisplayError = () => {
    const error = useRouteError();
    const { SignOut } = useContext(AuthContext);
    const handleSignOut = () => {
        SignOut()
            .then(() => { })
            .catch(err => console.error(err));
    }
    return (
        <div>
            <p className='text-red-500'> something went wrong</p>
            <p className='text-red-500'>{error.statusText || error.message}</p>
            <h3>Please logout<button onClick={handleSignOut}></button></h3>
        </div>
    );
};

export default DisplayError;