import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Typography,
  Snackbar,
  SnackbarContent,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CalculateIcon from "@mui/icons-material/Calculate";
import Confetti from "react-confetti";

const theme = createTheme();

const productDatabase = {
  cookieDoughTubs: [
    { range: "0-396", cost: 15.0, price: 22.0, profit: 7.0 },
    { range: "402-792", cost: 14.75, price: 22.0, profit: 7.25 },
    { range: "798-1188", cost: 14.5, price: 22.0, profit: 7.5 },
    { range: "1194+", cost: 14.25, price: 22.0, profit: 7.75 },
  ],
  prePortionedPucks: [
    { range: "0-396", cost: 17.0, price: 22.0, profit: 5.0 },
    { range: "402-792", cost: 16.75, price: 22.0, profit: 5.25 },
    { range: "798-1188", cost: 16.5, price: 22.0, profit: 5.5 },
    { range: "1194+", cost: 16.25, price: 22.0, profit: 5.75 },
  ],
  cinnamonStickyBuns: [
    { range: "0-400", cost: 14.0, price: 18.0, profit: 4.0 },
    { range: "404-708", cost: 13.75, price: 18.0, profit: 4.25 },
    { range: "712-1116", cost: 13.5, price: 18.0, profit: 4.5 },
    { range: "1120+", cost: 13.25, price: 18.0, profit: 4.75 },
  ],
  chocolateMacaroons: [
    { range: "0-396", cost: 19.0, price: 24.0, profit: 5.0 },
    { range: "402-792", cost: 18.75, price: 24.0, profit: 5.25 },
    { range: "798-1188", cost: 18.5, price: 24.0, profit: 5.5 },
    { range: "1194+", cost: 18.25, price: 24.0, profit: 5.75 },
  ],
};

const FundraisingCalculator = () => {
  const [goal, setGoal] = useState(0);
  const [people, setPeople] = useState(0);
  const [product, setProduct] = useState("");
  const [volume, setVolume] = useState("");
  const [salesGoal, setSalesGoal] = useState(0);
  const [salesPerPerson, setSalesPerPerson] = useState(0);
  const [celebrate, setCelebrate] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [pricingDialogOpen, setPricingDialogOpen] = useState(false);

  useEffect(() => {
    if (celebrate) {
      const timer = setTimeout(() => {
        setCelebrate(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [celebrate]);

  const calculateGoal = () => {
    if (!product || !volume) {
      console.log("Please select a product and volume");
      return;
    }

    const productData = productDatabase[product];

    if (!productData) {
      console.log("Invalid product");
      return;
    }

    const selectedVolume = productData.find((item) => item.range === volume);

    if (!selectedVolume) {
      console.log("Invalid volume");
      return;
    }

    const { profit } = selectedVolume;

    const salesGoal = Math.ceil(goal / profit);
    const salesPerPerson = Math.ceil(salesGoal / people);

    setSalesGoal(salesGoal);
    setSalesPerPerson(salesPerPerson);
    setShowBanner(true);
    setCelebrate(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowBanner(false);
  };

  const handlePricingDialogOpen = () => {
    setPricingDialogOpen(true);
  };

  const handlePricingDialogClose = () => {
    setPricingDialogOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {showBanner && (
        <Snackbar
          open={showBanner}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <SnackbarContent
            message={`Congratulations! You have the potential to sell ${salesGoal} items!`}
            style={{ backgroundColor: "#1976d2" }}
          />
        </Snackbar>
      )}
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
            padding: 3,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          {celebrate && (
            <Confetti width={window.innerWidth} height={window.innerHeight} />
          )}
          <CalculateIcon sx={{ m: 1, fontSize: 40, color: "primary.main" }} />
          <Typography component="h1" variant="h5">
            Fundraising Goal Calculator
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Calculate the number of items to sell to meet your fundraising target
          </Typography>
          <TextField
            type="number"
            variant="outlined"
            label="Enter your fundraising target ($)"
            name="goal"
            required
            onChange={(e) => setGoal(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            type="number"
            variant="outlined"
            label="Enter the number of people in your group"
            name="people"
            required
            onChange={(e) => setPeople(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            select
            variant="outlined"
            label="Select a product"
            name="product"
            required
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            fullWidth
            margin="normal"
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="cookieDoughTubs">Cookie & Muffin Dough Tubs</MenuItem>
            <MenuItem value="prePortionedPucks">Pre-Portioned Pucks</MenuItem>
            <MenuItem value="cinnamonStickyBuns">Cinnamon & Sticky Buns</MenuItem>
            <MenuItem value="chocolateMacaroons">Chocolate Macaroons</MenuItem>
          </TextField>
          {product && (
            <TextField
              select
              variant="outlined"
              label="Select a volume"
              name="volume"
              required
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              fullWidth
              margin="normal"
            >
              <MenuItem value="">Select</MenuItem>
              {productDatabase[product].map((item) => (
                <MenuItem key={item.range} value={item.range}>
                  {item.range}
                </MenuItem>
              ))}
            </TextField>
          )}
          <Button
            onClick={calculateGoal}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2, mb: 1 }}
          >
            Calculate
          </Button>
          <Typography variant="subtitle1" gutterBottom>
            {salesGoal === 0
              ? "Please enter the fundraising target and number of people in your group."
              : `Your sales goal is approximately ${salesGoal} items to meet your target.`}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {salesPerPerson === 0
              ? "Please enter the fundraising target and number of people in your group."
              : `Each seller needs to sell about ${salesPerPerson} items.`}
          </Typography>
          <Typography variant="caption" color="textSecondary" gutterBottom>
            Please note that these calculations are approximate and rounded for simplicity. The actual values may vary slightly due to rounding or other factors.
          </Typography>
          <Button
            onClick={handlePricingDialogOpen}
            variant="text"
            color="primary"
          >
            View Pricing Structure
          </Button>
        </Box>
      </Container>
      <Dialog open={pricingDialogOpen} onClose={handlePricingDialogClose}>
        <DialogTitle>Pricing Structure</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {Object.entries(productDatabase).map(([product, data]) => (
              <div key={product}>
                <Typography variant="subtitle1" style={{ color: '#1976d2', marginBottom: '10px' }}>{product}</Typography>
                <table style={{ width: '100%', marginBottom: '20px', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#1976d2', color: '#FFFFFF' }}>
                      <th style={{ padding: '10px', border: '1px solid #FFFFFF' }}>Volume</th>
                      <th style={{ padding: '10px', border: '1px solid #FFFFFF' }}>Fundraiser's Cost (per unit)</th>
                      <th style={{ padding: '10px', border: '1px solid #FFFFFF' }}>Customer's Price (per unit)</th>
                      <th style={{ padding: '10px', border: '1px solid #FFFFFF' }}>Fundraiser's Profit (per unit)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr key={item.range} style={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : '#FFFFFF' }}>
                        <td style={{ padding: '10px', border: '1px solid #1976d2' }}>{item.range}</td>
                        <td style={{ padding: '10px', border: '1px solid #1976d2' }}>${item.cost}</td>
                        <td style={{ padding: '10px', border: '1px solid #1976d2' }}>${item.price}</td>
                        <td style={{ padding: '10px', border: '1px solid #1976d2' }}>${item.profit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePricingDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default FundraisingCalculator;
