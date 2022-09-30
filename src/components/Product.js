import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartProvider";
import { cartProviderContext } from "../context/cartProvide";

const Product = (itemInCart) => {
  const shoppingCartContext = useContext(ShoppingCartContext);
  const { addItem, removeItem } = shoppingCartContext;
  const {
    item,
    item: { image, title, price },
  } = cartProviderContext;

  return (
    <div className="card">
      <img className="small" src={image} alt={title} />
      <h3>{title}</h3>
      <div>£{price}</div>
      <div>
        {itemInCart ? (
          <div>
            <button onClick={() => removeItem(item)} className="remove">
              -
            </button>
            <span className="p-1">{item.qty}</span>
            <button onClick={() => addItem(item)} className="add">
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
