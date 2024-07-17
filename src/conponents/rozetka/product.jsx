import React, { useState } from "react";
import "./product.css";

const Product = ({
  id,
  image,
  description,
  sold,
  price,
  additionalDescription,
  size,
}) => {
  const [showAdditionalDescription, setShowAdditionalDescription] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseEnterAdditionalDescription = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setShowAdditionalDescription(true);
  };

  const mouseLeaveAdditionalDescription = () => {
    setShowAdditionalDescription(false);
  };

  return (
    <div
      className={`product ${size}`}
      onMouseEnter={mouseEnterAdditionalDescription}
      onMouseLeave={mouseLeaveAdditionalDescription}
    >
      <div className="product-image-container">
        <img src={image} alt="" className="product_image" />
      </div>

      <h2 className="product_descr">{description}</h2>
      {sold && <p className="product_sold">Закінчується</p>}
      <p className="product_price">{price}$</p>

      {showAdditionalDescription && (
        <div
          className="product_additional_info"
          style={{ left: position.x, top: position.y + 20 }}
        >
          <p className="product_additional_descr">{additionalDescription}</p>
        </div>
      )}
    </div>
  );
};

export default Product;
