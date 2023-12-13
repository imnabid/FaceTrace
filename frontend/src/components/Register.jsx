import React, { useState } from "react";
import {
  Grid,
  Typography,
  Paper,
  Box,
  Button,
  IconButton,
  Container,
} from "@mui/material";


import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { Link, useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import PoliceLogo from "./Images/nppolicelogo.png";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useSnackbar } from "notistack";
const Register = () => {
  const { enqueueSnackbar } = useSnackbar();
  const handleClickVariant = (variant) => async () => {
    const { name, email, password, repassword, branch } = user;
    
    if (name && email && password && branch && password === repassword) {
      try {
        const response = await fetch("http://localhost:8000/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
  
        const data = await response.json();
  
        enqueueSnackbar(data.message, { variant });
        navigate("/login");
      } catch (error) {
        console.error("Error:", error);
      }
    }
    else if(password!=repassword) {
      enqueueSnackbar("your password didn't match", { variant:"error" });
    }
    
    else {
      enqueueSnackbar("Please fill the form correctly", { variant: "error" });
    }
  };
  
  const navigate=useNavigate()
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [user, setUser] = useState({
    name:"",
    email: "",
    password: "",
    repassword: "",
    branch: "",
  });
  const handeleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <React.Fragment>
      <Container>
        <Box boxShadow={24} mt={5}mb={5}>
          {" "}
          <Grid container spacing={2} sx={{ marginTop: "auto" }}>
            <Grid item xs={12} lg={6} md={6}>
           <Box sx={{ bgcolor:"#004163",paddingTop: { xs: "10%", md: "35%" },
          paddingBottom: { xs: "10%", md: "40%" },mt:-2}}> <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              
                
              }}
              
            >
              <img
             
                src={PoliceLogo}
                alt="PoliceLogo"
                style={{ height: "120px", width: "120px" }}
              />
           
            </Box>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: 18,
                fontWeight: "700",
                color: "white",
                
              }}
              
            >
              Crime Investment Department
            </Typography>
            <Typography sx={{
                textAlign: "center",
                fontSize: 15,
                fontWeight: "700",
                color: "white",
                mb:2,mt:1
              }}>"Registration System"</Typography></Box>
            </Grid>
            <Grid item lg={6} md={6} xs={12}>
             <Box sx={{padding:5}}> 
           
             <Typography
                sx={{ fontWeight: "bold" }}
                textAlign={"center"}
                fontSize={"1.5rem"}
              >
                REGISTRATION
              </Typography>

              <Typography sx={{ display: "flex" }}>
                {" "}
                
                <TextField
                  name="name"
                  value={user.name}
                  sx={{
                    mt: 4,
                    
                    mb: 2,
                    
                  }}
                 
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  onChange={handeleChange}
                  fullWidth
                />
              </Typography>
              <TextField
                name="email"
                value={user.email}
                sx={{
                  mt: 2,
                  
                  mb: 2,
                  
                }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                onChange={handeleChange}
                fullWidth
              />
              <Typography sx={{ display: "flex" }}>
                {" "}
                <FormControl
                  sx={{
                    mr: 2,
                    mt: 2,
                   
                  }}
                  variant="outlined"
                  fullWidth
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
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
                    value={user.password}
                    name="password"
                    onChange={handeleChange}
                    label="Password"
                  />{" "}
                </FormControl>
                <FormControl
                  sx={{
                   
                    mt: 2,
                   
                  }}
                  variant="outlined"
                  fullWidth
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Re-Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
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
                    value={user.repassword}
                    name="repassword"
                    onChange={handeleChange}
                    label="Password"
                  />{" "}
                </FormControl>
              </Typography>

            
              <TextField
                name="branch"
                value={user.branch}
                sx={{
                  mt: 2,
                 
                  mb: 2,
                 
                }}
                id="outlined-basic"
                label="Branch"
                variant="outlined"
                onChange={handeleChange}
                fullWidth
              />

<Button
  onClick={handleClickVariant("success")}
  sx={{
    backgroundColor: "#004163",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mt: 1,
    fontSize: "1.2rem",
    textTransform: "none",
    padding: "10px", 
    width: "150px",
    margin: "auto", 
    ":hover": { bgcolor: "#004163", transform: "scale(1.1)" },
  }}
>
  Register
</Button>

              <Link to="/login">
                <Typography sx={{ textAlign: "center", mt: 2, mb: 3 }}>
                  Already have an account? SIGN IN
                </Typography>
              </Link></Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Register;
