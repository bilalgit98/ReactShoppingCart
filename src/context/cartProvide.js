import { useEffect, useState, useReducer, createContext } from "react";
// import products from '../data/products';

export const cartProviderContext = createContext();

const cartProvider = () => {
  //will be replaced by use reducer
  // const [items, setItems] = useState([]);

  const reducer = (state, action) => {
    if (action.type === "Add Item") {
      const inCart = items.some((x) => x.id === item.id);
      if (inCart) {
        const updated = items.map((x) =>
          x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x
        );
        setItems(updated);
      } else {
        setItems([...items, { ...item, quantity: 1 }]);
      }
    }
    if (action.type === "Remove Item") {
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
    }
    return state;
  };

  const intialState = {
    item: { item },
  };

  const CartReducer = () => {
    const [state, dispatch] = useReducer(reducer, intialState);
  };

  //   const addItem = (item) => {
  //     const inCart = items.some((x) => x.id === item.id);
  //     if (inCart) {
  //       const updated = items.map((x) =>
  //         x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x
  //       );
  //       setItems(updated);
  //     } else {
  //       setItems([...items, { ...item, quantity: 1 }]);
  //     }
  //   };

  //   const removeItem = (item) => {
  //     const inCartItem = items.find((x) => x.id === item.id);
  //     if (inCartItem.quantity === 1) {
  //       const updated = items.filter((x) => x.id !== item.id);
  //       setItems(updated);
  //     } else {
  //       const updated = items.map((x) =>
  //         x.id === item.id ? { ...x, quantity: x.quantity - 1 } : x
  //       );
  //       setItems(updated);
  //     }
  //   };

  return (
    <cartProviderContext.Provider value={{ item }}>
      {props.children}
    </cartProviderContext.Provider>
  );
};

export default cartProviderContext;
