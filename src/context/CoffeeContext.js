import { useContext, useState } from 'react';

const CoffeeContext = createContext();
export const CoffeeProvider = ({ children }) => {
  return <CoffeeContext.Provider value={{}}>{children}</CoffeeContext.Provider>;
};

export default CoffeeContext;
