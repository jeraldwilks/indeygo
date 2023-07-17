import React, { useState } from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CalculateIcon from "@mui/icons-material/Calculate";
import Confetti from "react-confetti";
import DropdownForProduct from "../components/DropdownForProduct";
import FundRaisingComp from "../components/FundraisingComp";
import FundraisingCalculator from '../components/FundraisingCalculator';

const HomePage = () => {
  return (
    <div>
      {/* Your other components or JSX here */}
      <FundraisingCalculator />
    </div>
  );
};

export default HomePage;
