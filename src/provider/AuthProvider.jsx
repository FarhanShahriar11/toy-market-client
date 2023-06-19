import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext=createContext()
const auth=getAuth(app)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

       // creating a new user
       const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Log in user
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // LogOut User
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // google login
    const googleSign = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // github login
    const githubSign = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    useEffect( () => {

        const unsubscribe =  onAuthStateChanged(auth, currentUser => {
            console.log('Auth ', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSign,
        githubSign,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;