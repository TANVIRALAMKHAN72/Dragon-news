import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";


const auth = getAuth(app);
export const authContext = createContext();
const AuthProvider = ( {children} ) => {
    const [user, setUser] = useState(null);
// console.log(user)

const createUser = (email, password) => {
    return createUserWithEmailAndPassword (auth, email, password)
}

const signIn = (email, password) => {
    return signInWithEmailAndPassword (auth, email, password)
}


const updateUser = (updatedData) => {
    return updateProfile (auth.currentUser, updatedData)

}

const logOut = () => {
    return signOut (auth);
}

useEffect (() => {
    const unsubscribe = onAuthStateChanged (auth, (currentUser) => {
        setUser(currentUser)
    });
    return () => {
unsubscribe();
    }
},[])

    const authData = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        updateUser,
    }
    return <authContext.Provider value={authData}>
{children}
    </authContext.Provider>;
};

export default AuthProvider;