import { useState, createContext } from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import products from './data/products';

// better thank making multiple API calls
// consumed in Main.js, line:7
export const ProductsContext = createContext();

function App() {
  const [items, setItems] = useState([]);

  const addItem = item => {
    const inCart = items.some(x => x.id === item.id);
    if (inCart) {
      const updated = items.map(x => (x.id === item.id ? { ...x, quantity: x.quantity + 1 } : x));
      setItems(updated);
    } else {
      setItems([...items, { ...item, quantity: 1 }]);
    }
  };

  const removeItem = item => {
    const inCartItem = items.find(x => x.id === item.id);
    if (inCartItem.quantity === 1) {
      const updated = items.filter(x => x.id !== item.id);
      setItems(updated);
    } else {
      const updated = items.map(x => (x.id === item.id ? { ...x, quantity: x.quantity - 1 } : x));
      setItems(updated);
    }
  };

  return (
    <ProductsContext.Provider value={products}>
      <div className='App'>
        <Header countCartItems={items.length}></Header>
        <div className='row'>
          <Main items={items} addItem={addItem} removeItem={removeItem}></Main>
          <Basket items={items} addItem={addItem} removeItem={removeItem}></Basket>
        </div>
      </div>
    </ProductsContext.Provider>
  );
}

export default App;
