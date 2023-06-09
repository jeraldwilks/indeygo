import React, { useEffect, useState } from "react";

const AdminProduct = () => {
  const [productType, setProductType] = useState();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [quantityDesc, setQuantityDesc] = useState();
  const [sellPrice, setSellPrice] = useState();
  const [wholesalePrices, setWholesalePrices] = useState([]);
  const [availableProductTypes, setAvailableProductTypes] = useState([]);

  useEffect(() => {
    const getProductTypes = async () => {
      const response = await fetch("api/productType");
      setAvailableProductTypes(await response.json());
    };
    getProductTypes();
  }, []);

  return (
    <div>
      {availableProductTypes.map((availableProductType) => (
        <h1>{availableProductType.name}</h1>
      ))}
    </div>
  );
};

export default AdminProduct;
