import React, { useState } from "react";
import "./product.css"; 

const Product = ({ id, image, description, sold, price, additionalDescription }) => {
  const [showAdditionalDescription, setShowAdditionalDescription] = useState(false);

  const toggleAdditionalDescription = () => {
    setShowAdditionalDescription(!showAdditionalDescription);
  };

  return (
    <div className="product" onMouseEnter={toggleAdditionalDescription} onMouseLeave={toggleAdditionalDescription}>
      <div className="product-image-container">
        <img src={image} alt="" className="product_image" />
      </div>

      <h2 className="product_descr">{description}</h2>
      {sold && <p className="product_sold">Закінчується</p>}
      <p className="product_price">{price}$</p>

      {showAdditionalDescription && (
        <p className="product_additional_descr">{additionalDescription}</p>
      )}
    </div>
  );
};

export default Product;
