import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid, TextField, Button, Toolbar } from "@material-ui/core";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProjects } from "./actions/projects";
import Projects from "./components/Projects/Projects";
import Form from "./components/Form/Form";
import kadal from "./images/kadal.svg";
import useStyles from "./styles";
import axios from "axios";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProjects());
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, [dispatch]);

  const handleLogin = async () => {
    try {
      const { data } = await axios.post("http://localhost:5000/user/signin", { username, password });
      localStorage.setItem("token", data.token);
      setIsLoggedIn(true);
      navigate("/"); // Redirect to the projects page after login
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/signin");
  };

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Toolbar className={classes.toolbar}>
          <img className={classes.logo} src={kadal} alt="kadal" height="60" onClick={() => navigate("/")} style={{ cursor: 'pointer' }} />
          <Typography className={classes.heading} variant="h2" align="center">
            Projects
          </Typography>
          {isLoggedIn ? (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button color="inherit" onClick={() => navigate("/signin")}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={
          <Grow in>
            <Container>
              <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                  <Projects isLoggedIn={isLoggedIn} />
                </Grid>
                {isLoggedIn && (
                  <Grid item xs={12} sm={4}>
                    <Form />
                  </Grid>
                )}
              </Grid>
            </Container>
          </Grow>
        } />
        <Route path="/signin" element={
          <div>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <TextField
                  label="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item>
                <Button onClick={handleLogin} variant="contained" color="primary" fullWidth>
                  Login
                </Button>
              </Grid>
            </Grid>
          </div>
        } />
      </Routes>
    </Container>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;