import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

const Header = () => {
  const { items } = useContext(ShoppingCartContext);

  return (
    <div className=" row center block">
      <div>
        <a href="#/">
          <h2>Simple Shopping Cart</h2>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Items in cart:{" "}
          {items ? <button className="badge">{items.length}</button> : ""}
        </a>
      </div>
    </div>
  );
};
export default Header;
