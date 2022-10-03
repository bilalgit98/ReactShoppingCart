import { createContext, useReducer, useEffect } from "react";
import { reducer } from "../reducer/ShoppingCartReducer";

export const ShoppingCartContext = createContext();

const initialState = {
  products: [],
  items: [],
  itemsTotal: 0,
  shipping: 0,
  total: 0,
};

const ShoppingCartProvider = ({ children }) => {
  const [state, despatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products?limit=5");
      const json = await res.json();
      despatch({ type: "SET_PRODUCTS", payload: json });
    };
    fetchProducts();
  }, []);

  const addItem = (item) => {
    return despatch({ type: "ADD_ITEM", payload: { item } });
  };

  const removeItem = (item) => {
    return despatch({ type: "REMOVE_ITEM", payload: { item } });
  };

  const emptyBasket = () => {
    return despatch({ type: "EMPTY_BASKET" });
  };

  return (
    <ShoppingCartContext.Provider
      value={{ ...state, addItem, removeItem, emptyBasket }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
