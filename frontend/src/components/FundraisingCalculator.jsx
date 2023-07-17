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
import DropdownForProduct from "./DropdownForProduct";
import FundRaisingComp from "./FundraisingComp";

const theme = createTheme();

const FundraisingCalculator = () => {
  const [goal, setGoal] = useState(0);
  const [people, setPeople] = useState(0);
  const [salesGoal, setSalesGoal] = useState(0);
  const [error, setError] = useState("");
  const [celebrate, setCelebrate] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [pricingDialogOpen, setPricingDialogOpen] = useState(false);
  const [chartData, setChartData] = useState({});
  const [profitData, setProfitData] = useState({
    percentage: "",
    totalSales: "",
    salesPerPerson: "",
  });
  const [selectedProducts, setSelectedProducts] = useState([
    { product: "", volume: "" },
  ]);
  useEffect(() => {
    if (celebrate) {
      const timer = setTimeout(() => {
        setCelebrate(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [celebrate]);

  const calculateGoal = () => {
    setProfitData({
      percentage: "",
      totalSales: "",
      salesPerPerson: "",
    });
    if (!goal) {
      setError("Enter fundraising value please");
      return;
    }
    if (!people) {
      setError("Enter the number of people in your group please");
      return;
    }
    if (parseFloat(goal) < parseFloat(people)) {
      setError("Fundraising value must be greater than people in your group");
      return;
    }

    if (selectedProducts?.length > 1) {
      const hasIncompleteProducts = selectedProducts.some(
        (item) => !item.product || !item.volume
      );
      if (hasIncompleteProducts) {
        setError(
          "Please complete the info about all products or remove extra."
        );
        return;
      }
    } else if (selectedProducts?.length === 1) {
      const { product, volume } = selectedProducts[0];
      if (!product || !volume) {
        setError("Please complete the info about the product.");
        return;
      }
    }
    setError("");
    const totalPrice = selectedProducts.reduce(
      (total, product) => total + product.price,
      0
    );
    const totalSellPrice = selectedProducts.reduce(
      (total, product) => total + product.sellPrice,
      0
    );
    const profitPercentage =
      ((totalSellPrice - totalPrice) / totalSellPrice) * 100;
    const numberOfSales = Math.ceil(
      goal / ((totalSellPrice - totalPrice) / totalSellPrice)
    );
    let profit = totalSellPrice - totalPrice;

    setProfitData({
      percentage: profitPercentage,
      totalSales: numberOfSales,
      salesPerPerson: numberOfSales / people,
    });
    // setSalesGoal(salesGoal);
    // setSalesPerPerson(salesPerPerson);
    // setShowBanner(true);
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
      <div style={{ background: "#f2f2f2", padding: 20 }}>
        <Container component="main" maxWidth="lg">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 6,
              background: "#fff",
              boxShadow: 0,
              border: 1,
              borderColor: "#189395",
            }}
          >
            {celebrate && (
              <Confetti width={window.innerWidth} height={window.innerHeight} />
            )}
            <CalculateIcon sx={{ m: 1, fontSize: 40, color: "primary.main" }} />
            <Typography component="h1" variant="h5" style={{ fontSize: 50 }}>
              Fundraising Goal Calculator
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Calculate the number of items to sell to meet your fundraising
              target
            </Typography>
            <TextField
              type="number"
              variant="outlined"
              label="Enter your fundraising target ($)"
              name="goal"
              value={goal}
              style={{ background: "#f7f7f7" }}
              required
              onChange={(e) => {
                const input = e.target.value;
                if (input === "" || Number(input) >= 0) {
                  setGoal(input);
                }
              }}
              fullWidth
              margin="normal"
            />

            <TextField
              type="number"
              variant="outlined"
              label="Enter the number of people in your group"
              name="people"
              style={{ background: "#f7f7f7" }}
              required
              onChange={(e) => {
                const input = e.target.value;
                if (input === "" || Number(input) >= 0) {
                  setPeople(input);
                }
              }}
              fullWidth
              margin="normal"
            />
            <FundRaisingComp
              selectedProducts={selectedProducts}
              setSelectedProducts={setSelectedProducts}
              setChartData={setChartData}
            />

            <Typography variant="subtitle1" color={"red"} gutterBottom>
              {error}
            </Typography>
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
            <Typography variant="caption" color="textSecondary" gutterBottom>
              Please note that these calculations are approximate and rounded
              for simplicity. The actual values may vary slightly due to
              rounding or other factors.
            </Typography>
            {profitData?.percentage ? (
              <Typography
                variant="caption"
                color="textSecondary"
                style={{
                  textAlign: "start",
                  alignSelf: "flex-start",
                  fontSize: 18,
                  fontWeight: 600,
                  marginBlock: 30,
                }}
              >
                You'll earn about{" "}
                {parseFloat(profitData?.percentage)?.toFixed(2)}% profits on all
                sales. Your sales goal is around $
                {parseInt(profitData?.totalSales)} to meet your target goal!
                <br />
                {">>>"} Each seller would need about: $
                {parseInt(profitData?.salesPerPerson)} in orders to reach that.
              </Typography>
            ) : null}

            <Button
              onClick={handlePricingDialogOpen}
              variant="text"
              color="primary"
            >
              View Pricing Structure
            </Button>
          </Box>
        </Container>
      </div>
      <Dialog open={pricingDialogOpen} onClose={handlePricingDialogClose}>
        <DialogTitle>Pricing Structure</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {chartData
              ? Object.entries(chartData).map(([product, data]) => (
                  <div key={product}>
                    <Typography
                      variant="subtitle1"
                      style={{ color: "#1976d2", marginBottom: "10px" }}
                    >
                      {product}
                    </Typography>
                    <table
                      style={{
                        width: "100%",
                        marginBottom: "20px",
                        borderCollapse: "collapse",
                      }}
                    >
                      <thead>
                        <tr
                          style={{
                            backgroundColor: "#1976d2",
                            color: "#FFFFFF",
                          }}
                        >
                          <th
                            style={{
                              padding: "10px",
                              border: "1px solid #FFFFFF",
                            }}
                          >
                            Volume
                          </th>
                          <th
                            style={{
                              padding: "10px",
                              border: "1px solid #FFFFFF",
                            }}
                          >
                            Fundraiser's Cost (per unit)
                          </th>
                          <th
                            style={{
                              padding: "10px",
                              border: "1px solid #FFFFFF",
                            }}
                          >
                            Customer's Price (per unit)
                          </th>
                          <th
                            style={{
                              padding: "10px",
                              border: "1px solid #FFFFFF",
                            }}
                          >
                            Fundraiser's Profit (per unit)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item, index) => (
                          <tr
                            key={item.range}
                            style={{
                              backgroundColor:
                                index % 2 === 0 ? "#f5f5f5" : "#FFFFFF",
                            }}
                          >
                            <td
                              style={{
                                padding: "10px",
                                border: "1px solid #1976d2",
                              }}
                            >
                              {item.range}
                            </td>
                            <td
                              style={{
                                padding: "10px",
                                border: "1px solid #1976d2",
                              }}
                            >
                              ${item.cost}
                            </td>
                            <td
                              style={{
                                padding: "10px",
                                border: "1px solid #1976d2",
                              }}
                            >
                              ${item.price}
                            </td>
                            <td
                              style={{
                                padding: "10px",
                                border: "1px solid #1976d2",
                              }}
                            >
                              ${item.profit}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))
              : null}
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
