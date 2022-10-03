import { useContext } from "react";
import Product from "./Product";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

const Main = () => {
  const { products, items } = useContext(ShoppingCartContext);

  return (
    <div className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((item) => {
          const itemInCart = items.some((x) => x.id === item.id);
          return <Product key={item.id} item={item} itemInCart={itemInCart} />;
        })}
      </div>
    </div>
  );
};
export default Main;
