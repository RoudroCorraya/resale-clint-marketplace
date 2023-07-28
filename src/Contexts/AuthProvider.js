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
    const getToken = (email) =>{
        const cuurrentUser = {
            email: email
        }
        fetch(`http://localhost:5000/jwt`, {
            method: 'POST',
            headers: {
                
                'content-type' : 'application/json'
            },
            body: JSON.stringify(cuurrentUser)
        })

        .then(res => res.json())
        .then(data => {
            console.log('lastone',data);
            localStorage.setItem('accessToken', data.token);
        })
    }
    useEffect(()=>{
       const unsubsribe = onAuthStateChanged(auth, createUser =>{
            console.log('user observing');
           if(createUser?.email){
            getToken(createUser?.email);
           }
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