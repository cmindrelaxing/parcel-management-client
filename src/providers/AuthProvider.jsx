import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import app from "../firebase/firebase.config";


const auth = getAuth(app);

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();


    // google login
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    };

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = async (email, password) => {
        setLoading(true);
    
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredential);

            const user = userCredential.user;
            console.log(user);

            setLoading(false);
            return user;
        } catch (error) {
            
            setLoading(false);
            throw error; 
        }
    };

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
        });
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('user in the auth state', currentUser);
            setUser(currentUser);
            if(currentUser){
                // get token and store client
                const userInfo = {email: currentUser?.email};
                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token);
                        setLoading(false); 
                    }
                })
            }else{
                // do something with client
                // remove token (if token stored in the client side: LocalStorage, caching, in memory)
                localStorage.removeItem('access-token');
                setLoading(false);                
            }
        })
        return () => {
            unSubscribe();
        }
    }, [axiosPublic])

    const authInfo = {
        user,
        loading,
        googleLogin,
        logOut,
        githubLogin,
        createUser,
        signIn, 
        updateUserProfile,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.any.isRequired,
};

export default AuthProvider;