import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { PropTypes } from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const provider = new GoogleAuthProvider();


    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userName = (user, name) =>{
        updateProfile(user, {
            displayName: name
        })
    }

    const userLogout = () =>{
        setLoading(true);
        return signOut(auth)
    }


    const userWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }



    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);
        })

        return() =>{
            unSubscribe()
        }
    },[])

    const AuthInfo = {
        user,
        loading,
        createUser,
        loginUser,
        userLogout,
        userWithGoogle,
        userName
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;