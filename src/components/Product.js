import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

const Product = ({ item, item: { title, price, image }, itemInCart }) => {
  const { addItem, removeItem } = useContext(ShoppingCartContext);

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
            <span className="p-1">{itemInCart.quantity}</span>
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
