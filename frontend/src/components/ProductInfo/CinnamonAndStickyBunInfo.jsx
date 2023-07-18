import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import StarsIcon from "@mui/icons-material/Stars";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const CinnamonAndStickyBunInfo = () => {
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
            <img
              src="../images/productcinnamonstickybun.jpeg"
              alt="Cookie Dough Image"
              style={{
                width: "100%",
                height: "250px", // Adjust the height as needed
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#fff",
                fontSize: "32px",
                fontWeight: "bold",
              }}
            >
              Cinnamon & Sticky Buns Fundraiser
            </div>
          </div>

          <Stack spacing={2}>
            <Item>
              <StarsIcon /> Make up to 30% Profit per pack
            </Item>
            <Item>
              <StarsIcon /> 8 buns/pack - sold in case lots of 4
            </Item>
            <Item>
              <StarsIcon /> Already baked ~ thaw and serve. Reheat in a
              microwave or oven for a warm treat
            </Item>
            <Item>
              <StarsIcon /> Cinnamon Buns are made with a delicious cream cheese
              frosting
            </Item>
            <Item>
              <StarsIcon /> Sticky Buns are covered in a sweet gooey coating ~
              get out your napkin!
            </Item>
            <Item>
              <StarsIcon /> Can be thawed and refrozen
            </Item>
          </Stack>
        </Box>
      </div>
    </>
  );
};

export default CinnamonAndStickyBunInfo;
