import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const auth = getAuth();
  //   create a user with email and password
  const createUser = (email, password, name) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        saveUserToDB(email, name);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {
            setError(error.message);
          });
        setUser(user);
        navigate("/");
        window.location.reload();
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //   sign in with email and password
  const signInUser = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  //  sign out a user
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  // observer the user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, [auth]);
  const saveUserToDB = (email, displayName) => {
    const user = { email, displayName };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return { user, error, isLoading, createUser, signInUser, signOutUser };
};
export default useFirebase;
