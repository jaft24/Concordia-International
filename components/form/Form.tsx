// src/components/SignUp.tsx
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import axios from "axios";

interface SignUpProps {
  onSubmit?: (data: { firstName: string; lastName: string; email: string }) => void;
}

const theme = createTheme();

export default function SignUp({ onSubmit }: SignUpProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [buttonText, setButtonText] = useState("Sign Up");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { firstName, lastName, email } = formData;

    try {
      const response = await axios.post("/api/subscribe", {
        firstName,
        lastName,
        email,
      });

      if (response.data.success) {
        setButtonText("Thank You!");
      } else {
        setButtonText("Oh No! Failed to Subscribe Now :-( Try Again Later");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setButtonText("Error, Try Again");
    }

    // Clear form fields after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container id="sign-up-form" component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "gold" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography sx={{ color: 'maroon', fontFamily: 'monospace' }} component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                color: 'maroon',
                fontWeight: 'bold',
                fontFamily: 'monospace',
                border: '0.1px solid maroon',
                backgroundColor: 'white',
                '&:hover': {
                  backgroundColor: 'gold',
                  color: 'white',
                  border: '0.1px solid gold',
                },
              }}
            >
              {buttonText}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
