import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const theme = createTheme();

const EditSalePage = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [products, setProducts] = useState([]);
  const [availableProducts, setAvailableProducts] = useState([]);

  useEffect(() => {
    const initialLoad = async () => {
      const saleResponse = await fetch("/api/sales?_id=" + id);
      const saleData = await saleResponse.json();
      setName(saleData[0].name);
      setPhoneNumber(saleData[0].phoneNumber);
      setProducts(saleData[0].products);
      const productURL =
        "/api/product/findByFundraiser?fundraiser=" + saleData[0].fundraiser;
      const productResponse = await fetch(productURL);
      const productData = await productResponse.json();

      for (const each of saleData[0].products) {
        const idToFind = each.product;
        const qty = each.quantity;
        const index = productData.map((prod) => prod._id).indexOf(idToFind);
        productData[index].qty = qty;
      }
      setAvailableProducts(productData);
    };
    initialLoad();
  }, []);

  const submitForm = async () => {
    const response = await fetch("/api/sales/", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
        name,
        phoneNumber,
        products,
      }),
    });
    alert(await response.text());
  };
  const changeQuantity = (id, qty, price) => {
    const index = products.map((x) => x.product).indexOf(id);
    if (index === -1) {
      setProducts((prevArray) => [
        ...prevArray,
        { product: id, quantity: qty, price: price },
      ]);
    } else {
      let newArray = products;
      newArray[index].quantity = qty;
      setProducts(newArray);
    }
  };

  return (
    availableProducts && (
      <FormControl>
        <Typography>Edit Sale</Typography>
        <br />
        <TextField
          type="text"
          variant="outlined"
          label="Seller's Name"
          name="name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <TextField
          type="text"
          variant="outlined"
          label="Seller's Phone Number"
          name="phoneNumber"
          value={phoneNumber}
          required
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <br />
        <ul>
          {availableProducts.map((product) => (
            <li key={product._id}>
              {product.productType.name} - {product.name} -{" "}
              <TextField
                type="number"
                variant="outlined"
                label="Quantity:"
                name="quantity"
                defaultValue={product.qty}
                onChange={(e) =>
                  changeQuantity(product._id, e.target.value, product.sellPrice)
                }
              />
            </li>
          ))}
        </ul>
        <br />
        <Button onClick={submitForm}>Update Sale</Button>
      </FormControl>
    )
  );
};

export default EditSalePage;
