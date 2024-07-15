/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export function UseCart() {
  try {
    const context = useContext(CartContext);
    if (!context) throw new Error("The UseCart must be used withing an CartProvider instance.");
    return context;
  } catch (error) {
    console.error(error);
  }
}

export default function CartProvider({ children }) {
  const [Cart, setCart] = useState([]);

  useEffect(() => {}, []);

  return (
    <CartContext.Provider value={{ Cart }}>
      <>{children}</>
    </CartContext.Provider>
  );
}
