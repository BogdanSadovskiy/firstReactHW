import React, { useState } from "react";
import Product from "./rozetka/product";
import FormButton from "./addItem/FormButton";
import Form from "./addItem/Form";
import initialProducts from "./rozetka/productsInitialData";
import "./General.css";

const General = () => {
  const [products, setProducts] = useState(initialProducts);
  const [showForm, setShowForm] = useState(false);
  const [sortType, setSortType] = useState("name");
  const [tileSize, setTileSize] = useState("large");

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSortChange = (event) => {
    setSortType(event.target.value);
  };

  const sortedProducts = () => {
    let sorted = [...products];
    switch (sortType) {
      case "ascPrice":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "descPrice":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "name":
        sorted.sort((a, b) => a.description.localeCompare(b.description));
        break;
      default:
        break;
    }
    return sorted;
  };

  const sortedProductsList = sortedProducts();

  const handleAddProduct = (newProduct) => {
    newProduct.id = Date.now();
    setProducts([...products, newProduct]);
  };

  const setLargeTileSize = () => {
    setTileSize("large");
  };

  const setSmallTileSize = () => {
    setTileSize("small");
  };

  return (
    <>
      {!showForm && <FormButton onClick={toggleForm} />}
      {showForm && (
        <Form onClose={toggleForm} onAddProduct={handleAddProduct} />
      )}

      <div className="products-tools">
        <div className="filters">
          <label htmlFor="sortSelect"></label>
          <select id="sortSelect" value={sortType} onChange={handleSortChange}>
            <option value="name">По Назві</option>
            <option value="ascPrice">Від Низької до Високої</option>
            <option value="descPrice">Від Високої до Низької</option>
          </select>
          <div className="tile-size-buttons">
            <button
              className={tileSize === "large" ? "active" : ""}
              onClick={setLargeTileSize}
            >
              Large Tiles
            </button>
            <button
              className={tileSize === "small" ? "active" : ""}
              onClick={setSmallTileSize}
            >
              Small Tiles
            </button>
          </div>
        </div>

        <div className="products-grid">
          <div className={`products ${tileSize}`}>
            {sortedProductsList.map((product) => (
              <Product
                key={product.id}
                image={product.image}
                description={product.description}
                sold={product.sold}
                price={product.price}
                additionalDescription={product.additionalDescription}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default General;
