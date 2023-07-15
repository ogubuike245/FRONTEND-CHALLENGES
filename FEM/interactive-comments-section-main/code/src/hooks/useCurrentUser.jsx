import React, { createContext, useContext } from "react";

const CurrentUserContext = createContext();

const CurrentUserProvider = ({ children, currentUser }) => {
  return (
    <CurrentUserContext.Provider value={currentUser}>
      {children}
    </CurrentUserContext.Provider>
  );
};

const useCurrentUser = () => {
  const currentUser = useContext(CurrentUserContext);
  if (!currentUser) {
    throw new Error("useCurrentUser must be used within a CurrentUserProvider");
  }
  return currentUser;
};

export { CurrentUserProvider, useCurrentUser };
