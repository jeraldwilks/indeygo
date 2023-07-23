import React from "react";
import ProductDisplay from "../components/ProductDisplay";

const ProductsPage = () => {
  return (
  <>
  <div style={{ marginTop: "150px", fontFamily: "'Open Sans', sans-serif" }}>
  <h3>Our Products</h3>
  <br/>
  <h4 style={{
          fontFamily: "'Open Sans', sans-serif",
          color: "#0b4d83",
          fontSize: "16px", // Set the desired font size here (example: 16px)
          textTransform: "none", // Optionally, set text transform to none for normal case
        }}>Check out our wide selection of products to choose from! </h4>
  <br/>
  <br/>
  <ProductDisplay></ProductDisplay>
  </div>
  </>
  );
};

export default ProductsPage;
