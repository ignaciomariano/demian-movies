import React, { useState } from 'react';

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {

  const [page, setPage] = useState(1);

  const appState = {
    page,
    setPage
  };

  return (
    <Context.Provider value={appState}>
        { children }
    </Context.Provider>
  )
}
export const ContextConsumer = Context.Consumer;
