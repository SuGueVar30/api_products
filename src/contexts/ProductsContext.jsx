/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { createContext, useContext, useEffect, useState } from "react";

const ProductsContext = createContext();

export const UseProducts = () => {
  try {
    const context = useContext(ProductsContext);
    if (!context) throw new Error("The UseProducts must be used withing an ProductsProvider instance.");
    return context;
  } catch (error) {
    console.error("Error Context: ", error);
  }
};

export default function ProductsProvider({ children }) {
  const [Products, setProducts] = useState([]);
  const [ProductCreated, setProductCreated] = useState(false);
  const [ProductUpdated, setProductUpdated] = useState(false);
  const [ProductsErrors, setProductsErrors] = useState([]);

  const getAllProducts = async () => {};

  const getProducts = async (id) => {};

  const createProducts = async (product) => {};

  const deleteProducts = async (id) => {};

  const updateProducts = async (id, product) => {};

  useEffect(() => {}, []);

  return (
    <ProductsContext.Provider value={{ Products, ProductsErrors, ProductCreated, ProductUpdated, createProducts, deleteProducts, getAllProducts, getProducts, updateProducts }}>
      <> {children} </>
    </ProductsContext.Provider>
  );
}
