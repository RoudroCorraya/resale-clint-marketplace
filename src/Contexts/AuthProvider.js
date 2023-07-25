import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [ loading, setLoading] = useState(true);
   const [show, setShow] = useState(false);
   const [advertise, setAdvertise] = useState([]);
    
    // const showSection = (show) => {
    //     if(show === true){
    //         setShow(false);
    //     }
    //     else{
    //         setShow(true);
    //     }
    // }

  

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const SignOut = () =>{
        return signOut(auth);
    }
    const updateUser = (userinfo) =>{
        return updateProfile(auth.currentUser, userinfo);
    }
    useEffect(()=>{
       const unsubsribe = onAuthStateChanged(auth, createUser =>{
            console.log('user observing');
            setUser(createUser);
            setLoading(false);
        });

        return ()=> unsubsribe();
    },[])

    const authInfo = {
        createUser,
        signIn,
        user,
        SignOut,
        updateUser,
        loading,
        show,
        setShow,
        advertise,
        setAdvertise

        
       
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;