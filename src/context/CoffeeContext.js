import { createContext, useEffect, useState } from 'react';

const CoffeeContext = createContext();
export const CoffeeProvider = ({ children }) => {
  const [coffeeX, setCoffeeX] = useState('');
  useEffect(() => {
    async function getCoffeeX() {
      const response = await fetch('https://coffee.alexflipnote.dev/random');
      const data = await response.json();
      setCoffeeX(data);
    }
    getCoffeeX();
  }, []);
  return (
    <CoffeeContext.Provider value={{ coffeeX }}>
      {children}
    </CoffeeContext.Provider>
  );
};

export default CoffeeContext;
