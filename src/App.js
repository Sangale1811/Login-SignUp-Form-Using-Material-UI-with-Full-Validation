import React, { useState } from "react";
import { Paper, Chip } from "@material-ui/core";
import LockIcon from "@mui/icons-material/Lock";
import Switch from "@mui/material/Switch";
import SignUp from "./formControl/SignUp";
import Login from "./formControl/Login";
import "./App.css";

function App() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="login" style={{ padding: "20px" }}>
      <Paper elevation={3} style={{ padding: "10px", paddingBottom: "25px" }}>
        {checked ? (
          <Chip
            icon={<LockIcon />}
            label="Log in"
            color="primary"
            variant="outlined"
          />
        ) : (
          <Chip
            icon={<LockIcon />}
            label="Sign Up"
            color="primary"
            variant="outlined"
          />
        )}

        <br />
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />

        <br />

        {checked ? <Login /> : <SignUp />}
      </Paper>
    </div>
  );
}

export default App;
