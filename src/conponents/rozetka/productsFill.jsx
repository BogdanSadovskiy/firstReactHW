import React, { Component } from "react";
import Product from "./product";
import './productList.css';

class ProductsFill extends Component {
  render() {
    const products = [
      {
        image:
          "https://content.rozetka.com.ua/goods/images/preview/438832176.jpg",
        description: "Набір з мінізасобами Vichy",
        price: "399",
        sold: false,
      },
      {
        image:
          "https://content2.rozetka.com.ua/goods/images/preview/430212393.png",
        description: "Вологий туалетний папір-серветки Kokett",
        price: "59",
        sold: false,
      },
      {
        image:
          "https://content1.rozetka.com.ua/goods/images/preview/162139599.jpg",
        description: "Кава розчинна Jacobs Brazil 100% Арабіка 150",
        price: "99",
        sold: true,
      },
      {
        image:
          "https://content2.rozetka.com.ua/goods/images/preview/444602856.jpg",
        description: "УМБ XO Power Bank 20000mAh PR183 Light",
        price: "525",
        sold: false,
      },
    ];
    return (
      <div className = "product-list">
        {products.map((product, index) => (
          <Product
            key={index}
            image={product.image}
            description={product.description}
            sold={product.sold}
            price={product.price}
          />
        ))}
      </div>
    );
  }
}

export default ProductsFill;
