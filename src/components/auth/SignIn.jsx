import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { Typography, TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { signIn } from "../../store/actions/authActions";

const useStyles = makeStyles({
  formStyle: {
    margin: "0px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
  },
  spacing: {
    marginTop: "20px",
  },
});

export default function SignIn() {
  const classes = useStyles();
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(creds));
    setCreds({
      email: "",
      password: "",
    });
  };

  if (auth._id) return <Navigate to="/" />;

  return (
    <div>
      <form
        noValidate
        autoComplete="off"
        className={classes.formStyle}
        onSubmit={handleSubmit}
      >
        <Typography variant="h5">Login</Typography>
        <div className={classes.spacing}>
          <TextField
            id="enter-email"
            label="Email"
            variant="outlined"
            fullWidth
            value={creds.email}
            onChange={(e) => setCreds({ ...creds, email: e.target.value })}
          />
        </div>
        <div className={classes.spacing}>
          <TextField
            id="enter-password"
            type="password"
            label="Password"
            variant="outlined"
            fullWidth
            value={creds.password}
            onChange={(e) => setCreds({ ...creds, password: e.target.value })}
          />
        </div>
        <div className={classes.spacing}>
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
