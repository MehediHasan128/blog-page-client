import { onAuthStateChanged } from 'firebase/auth';
import { PropTypes } from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);





    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })

        return() =>{
            unSubscribe()
        }
    },[])

    const AuthInfo = {
        user,
        loading
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