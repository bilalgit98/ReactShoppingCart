import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";
import data from "./data";
function App() {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (products) => {
    const exist = cartItems.find((x) => x.id === products.id);
    if (exist) {
      const newCartItems = cartItems.map((x) =>
        x.id === products.id ? { ...exist, qty: exist.qty + 1 } : x
      );
      setCartItems(newCartItems);
    } else {
      const newCartItems = [...cartItems, { ...products, qty: 1 }];
      setCartItems(newCartItems);
    }
  };
  const onRemove = (products) => {
    const exist = cartItems.find((x) => x.id === products.id);
    if (exist.qty === 1) {
      const newCartItems = cartItems.filter((x) => x.id !== products.id);
      setCartItems(newCartItems);
    } else {
      const newCartItems = cartItems.map((x) =>
        x.id === products.id ? { ...exist, qty: exist.qty - 1 } : x
      );
      setCartItems(newCartItems);
    }
  };
  const { products } = data;
  return (
    <div>
      <Header countCartItems={cartItems.length} />
      <div className="row">
        <Main
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          products={products}
        />
        <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
      </div>
    </div>
  );
}

export default App;
