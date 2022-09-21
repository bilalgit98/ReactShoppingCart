import { useContext } from 'react';
import { ShoppingCartContext } from '../context/ShoppingCartProvider';

const Product = ({ item, item: { image, name, price }, itemInCart }) => {
  const shoppingCartContext = useContext(ShoppingCartContext);
  const { addItem, removeItem } = shoppingCartContext;

  return (
    <div className='card'>
      <img className='small' src={image} alt={name} />
      <h3>{name}</h3>
      <div>£{price}</div>
      <div>
        {itemInCart ? (
          <div>
            <button onClick={() => removeItem(item)} className='remove'>
              -
            </button>
            <span className='p-1'>{item.qty}</span>
            <button onClick={() => addItem(item)} className='add'>
              +
            </button>
          </div>
        ) : (
          <button onClick={() => addItem(item)}>Add To Cart!</button>
        )}
      </div>
    </div>
  );
};

export default Product;
