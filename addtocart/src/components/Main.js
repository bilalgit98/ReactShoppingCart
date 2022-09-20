import React, { useContext } from 'react';
import Product from './Product';

import { ProductsContext } from '../App';

const Main = ({ items, addItem, removeItem }) => {
  const products = useContext(ProductsContext);

  return (
    <div className='block col-2'>
      <h2>Products</h2>
      <div className='row'>
        {products.map(item => {
          const itemInCart = items.some(x => x.id === item.id);
          return <Product key={item.id} item={item} itemInCart={itemInCart} addItem={addItem} removeItem={removeItem} />;
        })}
      </div>
    </div>
  );
};

export default Main;
