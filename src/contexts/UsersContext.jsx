/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { createContext, useState, useContext, useEffect } from "react";

const UsersContext = createContext();

export const UseUsers = () => {
  try {
    const context = useContext(UsersContext);
    if (!context) throw new Error("UseUsers must be used withing an UsersProvider instance.");
    return context;
  } catch (error) {
    console.error(error);
  }
};

export default function UsersProvider({ children }) {
  const [Users, setUsers] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [UsersErrors, setUsersErrors] = useState([]);

  const signUp = async (Users) => {};

  const signIn = async (Users) => {};

  const logOut = async () => {};

  useEffect(() => {}, []);

  useEffect(() => {}, []);

  return (
    <UsersContext.Provider value={{ signUp, signIn, logOut, Users, isAuthenticated, UsersErrors }}>
      <>{children}</>
    </UsersContext.Provider>
  );
}
