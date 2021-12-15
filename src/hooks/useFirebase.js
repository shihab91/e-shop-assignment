import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");
  const auth = getAuth();

  //   create a user with email and password
  const createUser = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {
            setError(error.message);
          });
        setUser(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //   sign in with email and password
  const signIn = (email, password) => {
    signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const signOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };
  return { user, error, createUser, signIn, signOut };
};
export default useFirebase;
