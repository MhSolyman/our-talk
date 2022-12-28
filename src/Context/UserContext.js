
import React, { createContext, useEffect, useState } from 'react';
import { updateProfile,GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../Firebase/firebase.init';

export const AuthContext =createContext();

const auth = getAuth(app)

const UserContext = ({ children }) => {

    const [user, setUser] = useState({})
    const[loading,setLoading]=useState(true)


    const googleProvider = new GoogleAuthProvider()
    const createUser = (email, password) => {
      setLoading(true)  
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        localStorage.removeItem('token-set')
        return signOut(auth);
    }
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const updateUserProfile =(profile)=>{
        return updateProfile(auth.currentUser,profile)

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, correntUser => {
            setUser(correntUser);
            setLoading(false)

            return () => {
                unsubscribe()
            }
        })
    }, [])



    const authInfo = {updateUserProfile, loading,signInWithGoogle, logOut, user, createUser, signIn, }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default UserContext;