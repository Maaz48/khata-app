import { useState, createContext } from "react";

const Context = createContext();

const ContextProvider = ({ Children }) => {
  let values = {
    isLogedIn: false,
  };

  const [contextValue, setcontextValue] = useState(values);
  const [screens, setscreens] = useState(null);
  return (
    <Context.Provider
      value={{
        contextValue,
        setcontextValue,
        screens,
        setscreens,
      }}
    >
      {Children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
