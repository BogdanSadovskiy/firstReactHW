import React, { Component } from "react";
import "./product.css";
class Product extends Component {
  render() {
    const { image, description, sold, price } = this.props;
    return (
      <div>
        <div className="product">
          <div className="product-image-container">
            <img src={image} alt="" className="product_image" />
          </div>

          <h2 className="product_descr">{description}</h2>
          {sold && <p className="product_sold">Закінчується</p>}
          <p className="product_price">{price}$</p>
        </div>
      </div>
    );
  }
}

export default Product;
