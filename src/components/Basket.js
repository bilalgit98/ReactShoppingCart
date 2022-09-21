import { useContext } from 'react';
import { ShoppingCartContext } from '../context/ShoppingCartProvider';

const Basket = () => {
  const shoppingCartContext = useContext(ShoppingCartContext);
  const { items, addItem, removeItem } = shoppingCartContext;

  const itemsPrice = items.reduce((a, c) => a + c.quantity * c.price, 0);
  const shippingPrice = itemsPrice > 100 ? 0 : 20;
  const totalPrice = itemsPrice + shippingPrice;
  return (
    <aside className='block col-1'>
      <h2>Cart Items</h2>
      <div>
        {items.length === 0 && <div> Cart is empty </div>}
        {items.map(item => (
          <div key={item.id} className='row'>
            <div className='col-1'>{item.name}</div>
            <div className='col-1'>
              <button onClick={() => removeItem(item)} className='remove'>
                -
              </button>
              <button onClick={() => addItem(item)} className='add'>
                +
              </button>
            </div>
            <div className='col-1 text-right'>
              {item.quantity} x £{item.price}
            </div>
          </div>
        ))}
        {items.length !== 0 && (
          <>
            <hr />
            <div className='row'>
              <div className='col-2'>items Price</div>
              <div className='col-1 text-right'>£{itemsPrice.toFixed(2)}</div>
            </div>
            <hr />
            <div className='row'>
              <div className='col-2'>Shipping Price</div>
              <div className='col-1 text-right'>£{shippingPrice.toFixed(2)}</div>
            </div>
            <hr />
            <div className='row'>
              <div className='col-2'>Total Price</div>
              <div className='col-1 text-right'>£{totalPrice.toFixed(2)}</div>
            </div>
            <hr />
            <div className='row'>
              <button onClick={() => alert('No Checkout Implemented')}>Checkout</button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
};

export default Basket;
