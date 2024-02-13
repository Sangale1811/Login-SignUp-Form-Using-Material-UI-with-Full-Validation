import React, { useState } from "react";
import {
  Alert,
  TextField,
  FormControl,
  InputLabel,
  IconButton,
  Input,
  InputAdornment,
  Button,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";


const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  // Inputs
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");


  // Input Errors
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);


  // Form Validity
  const [formValid, setFormValid] = useState();
  const [success, setSuccess] = useState();


  // validation for onBlur Email
  const handleEmail = () => {
    if (!isEmail(emailInput)) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
  };


  // validation for onBlur Password
  const handlePassword = () => {
    if (
      !passwordInput ||
      passwordInput.length < 5 ||
      passwordInput.length > 20
    ) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(null);

    if (emailError || !emailInput) {
      setFormValid("Email is inValid. Please Re-Enter");
      return;
    }

    if (passwordError || !passwordInput) {
      setFormValid("Password is set to 5 - 15 characters. Please Re-Enter");
      return;
    }

    setFormValid(null);
    setSuccess("Login Successfully");

    e.preventDefault();
    console.log("Email" + emailInput);
    console.log("Password" + passwordInput);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div style={{ margin: "0 16px" }}>
      <p>
        <TextField
          id="standard-basic"
          label="Email"
          error={emailError}
          value={emailInput}
          onChange={(event) => setEmailInput(event.target.value)}
          onBlur={handleEmail}
          variant="standard"
          fullWidth
          size="small"
        />
      </p>

      <p>
        <FormControl sx={{ width: "100%" }} variant="standard">
          <InputLabel
            error={passwordError}
            htmlFor="outlined-adornment-password"
          >
            Password
          </InputLabel>
          <Input
            fullWidth
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            error={passwordError}
            value={passwordInput}
            onBlur={handlePassword}
            onChange={(event) => setPasswordInput(event.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </p>

      <p>
        <Button
          sx={{ marginTop: "10px" }}
          onClick={handleSubmit}
          fullWidth
          variant="contained"
          startIcon={<LoginIcon />}
        >
          Login
        </Button>
      </p>

      <p>{formValid && <Alert severity="error">{formValid}</Alert>}</p>

      <p>{success && <Alert severity="success">{success}</Alert>}</p>
    </div>
  );
}
