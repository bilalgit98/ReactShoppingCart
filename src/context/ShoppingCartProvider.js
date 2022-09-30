import { useEffect, useState, createContext } from "react";
// import products from '../data/products';

export const ShoppingCartContext = createContext();

const ShoppingCartProvider = (props) => {
  //will be replaced by use reducer
  // const [items, setItems] = useState([]);

  //state used to fetch products
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((response) => response.json())
      .then((result) => {
        setProducts(result);
        console.log(result);
      });
  }, []);

  return (
    <ShoppingCartContext.Provider value={{ products }}>
      {props.children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
