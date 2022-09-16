import React from "react";

const Main = (props) => {
  const { products } = props;
  return (
    <div className="block col-2">
      <h2> Products</h2>
      <div className="row">
        {products.map((products) => (
          <div key={products.id}>{products.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Main;
