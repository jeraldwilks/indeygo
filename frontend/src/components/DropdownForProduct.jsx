import React from "react";
import { TextField, MenuItem, InputLabel } from "@mui/material";

const DropdownForProduct = ({
  product,
  setProduct,
  volume,
  setVolume,
  dropDown,
  productDatabase,
}) => {
  const handleProductChange = (event) => {
    setProduct(event.target.value);
    setVolume("");
  };

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };
  return (
    <>
      <TextField
        select
        variant="outlined"
        labelId="product-label"
        label="Select a product"
        name="product"
        required
        value={product}
        style={{ textAlign: "left", background: "#f7f7f7" }}
        onChange={handleProductChange}
        fullWidth
        margin="normal"
      >
        <MenuItem value="">Select</MenuItem>
        {dropDown?.map((pro) => (
          <MenuItem
            key={pro?.name}
            value={pro?.name}
            selected={pro?.name === product}
          >
            {pro?.name}
          </MenuItem>
        ))}
      </TextField>

      {product && (
        <>
          <TextField
            select
            variant="outlined"
            labelId="volume-label"
            label="Select a volume"
            name="volume"
            style={{ textAlign: "left", background: "#f7f7f7" }}
            required
            value={volume}
            onChange={handleVolumeChange}
            fullWidth
            margin="normal"
          >
            <MenuItem value="">Select</MenuItem>
            {productDatabase[product]?.map((item) => (
              <MenuItem
                key={item.range}
                value={item.range}
                selected={item.range === volume}
              >
                {item.range}
              </MenuItem>
            ))}
          </TextField>
        </>
      )}
    </>
  );
};

export default DropdownForProduct;
