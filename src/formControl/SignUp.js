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
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonAddIcon from "@mui/icons-material/PersonAdd";



const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export default function SignUp() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [gender, setGender] = useState("");


  // Inputs
  const [usernameInput, setUsernameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");


  // Input Errors
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [genderError, setGenderError] = useState(false);


  // Form Validity
  const [formValid, setFormValid] = useState();
  const [success, setSuccess] = useState();


  // validation for onBlur Username
  const handleUsername = () => {
    if (
      !usernameInput ||
      usernameInput.length < 5 ||
      usernameInput.length > 20
    ) {
      setUsernameError(true);
      return;
    }
    setUsernameError(false);
  };


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


  // validation for Gender
  const handleGender = () => {
    if (!gender) {
      setGenderError(true);
      return;
    }
    setGenderError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(null);

    if (usernameError || !usernameInput) {
      setFormValid(
        "Username is Between 5 - 15 characters long. Please Re-Enter"
      );
      return;
    }

    if (emailError || !emailInput) {
      setFormValid("Email is inValid. Please Re-Enter");
      return;
    }

    if (passwordError || !passwordInput) {
      setFormValid("Password is set to 5 - 15 characters. Please Re-Enter");
      return;
    }

    if (genderError || !gender) {
      setFormValid("Please select a gender");
      return;
    }

    setFormValid(null);
    setSuccess("Registration Successfully");

    e.preventDefault();
    console.log("Name : " + usernameInput);
    console.log("Email : " + emailInput);
    console.log("Password : " + passwordInput);
    console.log("Gender : " + gender);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div style={{ margin: "16px" }}>
      <p>
        <TextField
          id="standard-basic"
          label="Username"
          error={usernameError}
          value={usernameInput}
          onChange={(event) => setUsernameInput(event.target.value)}
          onBlur={handleUsername}
          variant="standard"
          fullWidth
          size="small"
        />
      </p>

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
        <FormControl>
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            sx={{ textAlign: "left" }}
          >
            Gender
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
            onBlur={handleGender}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </p>

      <p>
        <Button
          onClick={handleSubmit}
          fullWidth
          variant="contained"
          startIcon={<PersonAddIcon />}
        >
          SIGN UP
        </Button>
      </p>

      <p>{formValid && <Alert severity="error">{formValid}</Alert>}</p>

      <p>{success && <Alert severity="success">{success}</Alert>}</p>
    </div>
  );
}
