import React, { children, createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null);

// module 60-5
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // for sign In method
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

// logout 
   const logOut = () =>{
    return signOut(auth);
   }


// module 60-6 useEffect : Observe Auth State Change
    useEffect( () => {
      const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
            console.log('auth state change', currentUser);
            setUser(currentUser);
        });

        return() =>{
            unsubscribe();
        }
    }, [])




    const authInfo = {
        user,
        createUser,
        signIn,
        logOut
    }
    // const user = {displayName: 'Esha Nabila'}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;