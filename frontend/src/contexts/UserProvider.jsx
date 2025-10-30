import { UserContext } from "./UserContext";
// import { useState } from "react";

function UserContextProvider({ children }) {
  return <UserContext.Provider>{children}</UserContext.Provider>;
}

export default UserContextProvider;
