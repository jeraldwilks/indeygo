import React from "react";
import { createContext, useState } from "react";

export const UserContext = createContext("default context");

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState("JeraldTest");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
