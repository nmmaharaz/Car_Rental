import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../components/firebase_init";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log("ami user", user);
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const provider = new GoogleAuthProvider();
  const googleSignUp = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const userUpdateProfile = (name, photo_url) => {
    setLoading(true)
    return (
      updateProfile(auth.currentUser),
      {
        displayName: name,
        photoURL: photo_url,
      }
    );
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(false);
      if (currentUser?.email) {
        setUser(currentUser);
        try {
          const { data } = await axios.post(
            `https://car-rental-theta-lac.vercel.app/jwt`,
            { email: currentUser?.email },
            { withCredentials: true }
          );
          console.log(data);
        } catch (error) {
          console.error("Error fetching JWT:", error);
        }
      } else {
        setUser(null);
        try {
          await axios.get(`https://car-rental-theta-lac.vercel.app/logout`, {
            withCredentials: true,
          });
        } catch (error) {
          console.error("Error logging out:", error);
        }
      }
    ;
      
    });
    return () => {
      return unsubscribe();
    };
  }, [setUser]);

  const authInfo = {
    login,
    createUser,
    googleSignUp,
    logout,
    userUpdateProfile,
    user,
    setUser,
    loading,
    setLoading,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
