import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import StarsIcon from '@mui/icons-material/Stars';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const CookieDoughInfo = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
       
       
        <Box sx={{ width: "850px", position: "relative" }}>
        <div style={{ position: "relative" }}>
        <img src= "../images/productcookiedough.jpeg" alt="Cookie Dough Image" style={{   width: "100%",
                height: "250px", // Adjust the height as needed
                objectFit: "cover", }}  />
                <div  style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#fff",
                fontSize: "32px",
                fontWeight: "bold",
              }}>
          Cookie Dough Fundraiser
          </div>
        </div>
        
          <Stack spacing={2}>
            <Item><StarsIcon/>   Typically make between 30% to 40% Profit</Item>
            <Item><StarsIcon/>   10 Awesome Classic Flavours. Click HERE for flavours</Item>
            <Item>
            <StarsIcon/>    Choose either a 2.7 lb tub or a box of 48 pre-portioned cookies
            </Item>
            <Item>
            <StarsIcon/>    Macaroon Cookie Dough Available-have a treat without the wheat! *
              not certified gluten free- made without wheat
            </Item>
            <Item>
            <StarsIcon/>    Also available-our famous Doggie Dough! A healthy, nutritious and
              tail wagging temptation for our loyal companions
            </Item>
            <Item>
            <StarsIcon/>    Over 70% of the ingredients are sourced from Canadian farmers!
            </Item>
            <Item>
            <StarsIcon/>    Dough stays fresh for months in the freezer can be thawed and
              refrozen
            </Item>
            <Item>
            <StarsIcon/>    View our Ingredients List HERE *Indeygo reserves the right to
              offer substitutions based on availability
            </Item>
          </Stack>
        </Box>
      </div>
    </>
  );
};

export default CookieDoughInfo;
