import React, { useEffect, useState } from "react";
import { useAuth } from "../providers/AuthProvider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";

const theme = createTheme();

const EditProfilePage = () => {
  const { user } = useAuth();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  useEffect(() => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEmail(user.email);
    setPhoneNumber(user.phoneNumber);
  }, []);

  const submitForm = async () => {
    try {
      const response = await fetch("/api/user", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          phoneNumber,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Successfully Updated!");
      } else {
        throw new Error("Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const updatePassword = async () => {
    if (password1 != password2) {
      alert("Passwords do not match!");
    } else {
      const data = await fetch("/api/user/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: password1,
        }),
      });
      let response = await data.json();
      alert(response.message);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Edit Profile
          </Typography>
          <FormControl fullWidth>
            <TextField
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              required
              fullWidth
              id="email"
              label="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              required
              fullWidth
              id="phoneNumber"
              label="Phone Number"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Button
              onClick={submitForm}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update Profile
            </Button>
          </FormControl>
          <FormControl fullWidth>
            <Typography component="h1" variant="h5">
              Change Password
            </Typography>
            <TextField
              required
              fullWidth
              id="password1"
              label="Enter Password"
              name="password1"
              type="password"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
            />
            <TextField
              required
              fullWidth
              id="password2"
              label="Re-enter Password"
              name="password2"
              type="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
            <Button
              onClick={updatePassword}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update Profile
            </Button>
          </FormControl>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default EditProfilePage;
