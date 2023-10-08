import React, { children, createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
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
    const authInfo = {
        user,
        createUser,
        signIn
    }
    // const user = {displayName: 'Esha Nabila'}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;