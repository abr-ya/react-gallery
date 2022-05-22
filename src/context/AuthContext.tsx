import { ReactElement } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../services/fire";
import { clearConfigCache } from "prettier";

interface IAuthContextProvider {
  children: ReactElement;
}

interface IСreateUser {
  email: string;
  pass: string;
}

const UserContext = createContext({});

export const AuthContextProvider = ({ children }: IAuthContextProvider) => {
  const [user, setUser] = useState<Object>({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log(currentUser);
        setUser(currentUser);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const createUser = ({ email, pass }: IСreateUser) => {
    console.log("createUser", email, pass);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const login = ({ email, pass }: IСreateUser) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const logout = () => {
    return signOut(auth);
  };

  return (
    <UserContext.Provider value={{ createUser, user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
