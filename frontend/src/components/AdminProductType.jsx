import { Button, FormControl, FormLabel, TextField } from "@mui/material";
import React, { useState } from "react";

const AdminProductType = () => {
  const [name, setName] = useState("");
  const [quantityDesc, setQuantityDesc] = useState("");
  const [caseSize, setCaseSize] = useState();
  const [priceTierMin, setPriceTierMin] = useState([1]);

  const addTier = () => {
    setPriceTierMin((prev) => [
      ...prev,
      priceTierMin[priceTierMin.length - 1] + 1,
    ]);
  };

  const removeTier = (index) => {
    setPriceTierMin((current) => current.filter((value, i) => index != i));
  };

  const updateFieldChanged = (index, value) => {
    let newArr = [...priceTierMin];
    newArr[index] = value;
    setPriceTierMin(newArr);
  };

  const submitForm = async () => {
    const response = await fetch("/api/productType/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        quantityDesc,
        caseSize,
        priceTierMin,
      }),
    });
    alert(await response.text());
  };

  return (
    <div>
      <FormControl>
        <FormLabel>Add a New Product Type</FormLabel>
        <TextField
          type="text"
          variant="outlined"
          label="Product Type Name"
          name="name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          type="text"
          variant="outlined"
          label="Description of Sell Quantity"
          name="quantityDesc"
          required
          onChange={(e) => setQuantityDesc(e.target.value)}
        />
        <TextField
          type="number"
          variant="outlined"
          label="Wholesale Case Size"
          name="caseSize"
          required
          onChange={(e) => setCaseSize(e.target.value)}
        />
        <FormLabel>Minimum Values for Pricing Tiers:</FormLabel>
        {priceTierMin.map((tier, index) => (
          <React.Fragment key={(index, tier)}>
            {index === 0 ? (
              <TextField
                disabled
                type="number"
                variant="outlined"
                label="Tier 1"
                name="priceTierMin"
                defaultValue={priceTierMin[index]}
                onChange={(e) => updateFieldChanged(index, e.target.value)}
                required
              />
            ) : (
              <TextField
                type="number"
                variant="outlined"
                label={"Tier " + (index + 1)}
                name="priceTierMin"
                defaultValue={priceTierMin[index]}
                onChange={(e) => updateFieldChanged(index, e.target.value)}
                required
                helperText="Specify the minimum number of items sold to get this pricing tier"
              />
            )}
            {priceTierMin.length > 1 && index != 0 && (
              <Button onClick={() => removeTier(index)}>Remove Tier</Button>
            )}
          </React.Fragment>
        ))}
        <Button onClick={addTier}>Add Tier</Button>

        <Button onClick={submitForm}>Add Product Type</Button>
      </FormControl>
    </div>
  );
};

export default AdminProductType;
