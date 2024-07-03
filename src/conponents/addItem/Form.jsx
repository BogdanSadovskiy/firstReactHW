import React, { useState } from "react";
import "./Form.css";
const Form = ({ onClose }) => {
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onClose();
  };

  console.log(productName);
  console.log(productQuantity);
  console.log(productImage);

  const handlePriceChange = (event) => {
    const value = event.target.value;
    console.log(productPrice);
    if (/^\d*\.?\d*$/.test(value)) {
      setProductPrice(value);
      return;
    }
    setProductPrice("");
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

  const handleClose = ()=>{
    onClose();
  }

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
        <div class="buttonGiv">
          <button type="submit" className="form-submit-button">
            Submit
          </button>
        </div>
      </form>
      
    </div>
  );
};

export default Form;
