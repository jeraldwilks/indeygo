import React, { useEffect, useState } from "react";
import DropdownForProduct from "./DropdownForProduct";
import { Button } from "@mui/material";

const FundRaisingComp = ({
  selectedProducts,
  setSelectedProducts,
  setChartData,
}) => {
  const [allProducts, setAllProducts] = useState([]);
  const [productDatabase, setProductDatabase] = useState({});
  useEffect(() => {
    const getProductTypes = async () => {
      const response = await fetch("/api/productType?isActive=true");
      const data = await response.json();
      setAllProducts(
        data.map((item) => {
          return { name: item.name };
        })
      );
      data.forEach((item) => {
        const ranges = item.wholesalePrices.map((price, index) => {
          let range;
          if (index === 0) {
            range = "1-" + (item.wholesalePrices[index + 1]?.tierMin - 1);
          } else if (index === item.wholesalePrices.length - 1) {
            range = price.tierMin + "+";
          } else {
            range =
              price.tierMin +
              "-" +
              (item.wholesalePrices[index + 1].tierMin - 1);
          }
          return { ...price, range: range, sellPrice: item?.sellPrice };
        });
        setProductDatabase((prevVolumeData) => ({
          ...prevVolumeData,
          [item.name]: ranges,
        }));
      });

      setChartData(formatData(data));
    };
    getProductTypes();
  }, []);
  const formatData = (data) => {
    const formattedData = {};

    data.forEach((item) => {
      const { name, sellPrice, wholesalePrices } = item;
      const formattedPrices = wholesalePrices.map((priceItem, index) => {
        const { tierMin, price } = priceItem;
        const profit = sellPrice - price;
        let range;
        if (index === 0) {
          range = "1-" + (wholesalePrices[index + 1]?.tierMin - 1);
        } else if (index === wholesalePrices.length - 1) {
          range = tierMin + "+";
        } else {
          range = tierMin + "-" + (wholesalePrices[index + 1].tierMin - 1);
        }
        return {
          range,
          cost: price,
          price: sellPrice,
          profit,
        };
      });

      formattedData[name] = formattedPrices;
    });

    return formattedData;
  };

  const handleProductChange = (index, product) => {
    const updatedSelectedProducts = [...selectedProducts];
    updatedSelectedProducts[index].product = product;
    updatedSelectedProducts[index].volume = "";
    setSelectedProducts(updatedSelectedProducts);
  };
  const handleVolumeChange = (index, volume) => {
    const updatedSelectedProducts = [...selectedProducts];

    let tempPrices = productDatabase[
      updatedSelectedProducts[index].product
    ]?.find((temp) => temp.range === volume);
    updatedSelectedProducts[index].volume = volume;
    updatedSelectedProducts[index].price = tempPrices?.price;
    updatedSelectedProducts[index].sellPrice = tempPrices?.sellPrice;

    setSelectedProducts(updatedSelectedProducts);
  };

  const handleAddMore = () => {
    setSelectedProducts([...selectedProducts, { product: "", volume: "" }]);
  };

  const handleRemove = (index) => {
    const updatedSelectedProducts = [...selectedProducts];
    updatedSelectedProducts.splice(index, 1);
    setSelectedProducts(updatedSelectedProducts);
  };

  const getAvailableProducts = (index) => {
    const selectedProductNames = selectedProducts.map(
      (selectedProduct) => selectedProduct.product
    );
    return allProducts.filter(
      (product) => !selectedProductNames.includes(product.name)
    );
  };

  return (
    <>
      {selectedProducts.map((selectedProduct, index) => (
        <>
          <DropdownForProduct
            key={index}
            dropDown={[
              ...getAvailableProducts(index),
              { name: selectedProduct.product },
            ]}
            productDatabase={productDatabase}
            product={selectedProduct.product}
            setProduct={(product) => handleProductChange(index, product)}
            volume={selectedProduct.volume}
            setVolume={(volume, price, sellPrice) =>
              handleVolumeChange(index, volume, price, sellPrice)
            }
          />
          {selectedProducts.length > 1 && (
            <Button
              onClick={() => handleRemove(index)}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ width: 100, alignSelf: "flex-end" }}
              sx={{ mt: 2, mb: 1 }}
            >
              Remove
            </Button>
          )}
        </>
      ))}
      <Button
        onClick={handleAddMore}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        style={{ width: 150 }}
        sx={{ mt: 2, mb: 1 }}
      >
        Add More Item
      </Button>
    </>
  );
};

export default FundRaisingComp;
