import React from "react";

const FormButton = ({ onClick }) => {
  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    textTransform: "uppercase",
    transition: "background-color 0.3s ease",
    outline: "none", 
  };
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  };
  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={onClick}>
        addProduct
      </button>
    </div>
  );
};

export default FormButton;
