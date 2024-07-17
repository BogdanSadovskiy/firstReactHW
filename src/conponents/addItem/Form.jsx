import React, { useState } from "react";
import "./Form.css";

const Form = ({ onClose, onAddProduct }) => {
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

 
    const newProduct = {
      id: Date.now(), 
      image: productImage,
      description: productName,
      price: parseFloat(productPrice), 
      sold: false, 
      additionalDescription: "", 
    };

    onAddProduct(newProduct);

    setProductName("");
    setProductQuantity("");
    setProductPrice("");
    setProductImage("");

    onClose();
  };

  const handlePriceChange = (event) => {
    const value = event.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setProductPrice(value);
    }
  };

  const handleImageChange = (event) => {
    const value = event.target.value;
    console.log(value);
    try {
      new URL(value);
    } catch {
      return;
    }
    setProductImage(value);
  };

  const handleQuantityChange = (event) => {
    const num = parseInt(event.target.value);
    if (num < 0 || event.target.value[0] === "0") {
      setProductQuantity("0");
    } else setProductQuantity(event.target.value);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="formContainer">
      <button className="close-button" onClick={handleClose}>
        Close
      </button>
      <form onSubmit={handleSubmit} className="form-container">
        <label className="form-label">
          Product Name:
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="form-input"
            required
          />
        </label>
        <br />
        <label className="form-label">
          Product Quantity:
          <input
            type="number"
            value={productQuantity}
            onChange={handleQuantityChange}
            className="form-input"
            required
          />
        </label>
        <br />
        <label className="form-label">
          Product Price:
          <input
            type="text"
            value={productPrice}
            onChange={handlePriceChange}
            className="form-input"
            required
          />
        </label>
        <br />
        <label className="form-label">
          Product Image:
          <input
            type="text"
            value={productImage}
            onChange={handleImageChange}
            accept="image/*"
            className="form-input"
            required
          />
        </label>
        <br />
        {productImage && (
          <img
            src={productImage}
            alt="Product Preview"
            className="form-image-preview"
          />
        )}
        <br />
        <div className="buttonGiv">
          <button type="submit" className="form-submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
