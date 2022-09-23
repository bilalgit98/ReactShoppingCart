import { useEffect, useState, createContext } from "react";
// import products from '../data/products';

export const ShoppingCartContext = createContext();

const ShoppingCartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((response) => response.json())
      .then((result) => {
        setProducts(result);
        console.log(result);
      });
  }, []);

  const addItem = (item) => {
    const inCart = items.some((x) => x.id === item.id);
    if (inCart) {
      const updated = items.map((x) =>
        x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x
      );
      setItems(updated);
    } else {
      setItems([...items, { ...item, quantity: 1 }]);
    }
  };

  const removeItem = (item) => {
    const inCartItem = items.find((x) => x.id === item.id);
    if (inCartItem.quantity === 1) {
      const updated = items.filter((x) => x.id !== item.id);
      setItems(updated);
    } else {
      const updated = items.map((x) =>
        x.id === item.id ? { ...x, quantity: x.quantity - 1 } : x
      );
      setItems(updated);
    }
  };

  return (
    <ShoppingCartContext.Provider
      value={{ products, items, addItem, removeItem }}
    >
      {props.children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
