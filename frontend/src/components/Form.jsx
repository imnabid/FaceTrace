import React from "react";
import { useState } from "react";
import { Container, Box, Grid, Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Input, InputLabel, InputAdornment, IconButton } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

import PoliceLogo from "./Images/nppolicelogo.png";
import { useSnackbar } from "notistack";
const Form = () => {
  const { enqueueSnackbar } = useSnackbar();
  const resetForm = () => {
    setUser({
      firstnameuser: "",
      lastnameuser: "",
      addressuser: "",
      numberuser: "",
      firstname: "",
      lastname: "",
      citizenshipnumber: "",
      moredetails: "",
      number: "",
      age: "",address:"",
      
      date:"",
     municipality:"",lastlocation:"",gender:"",wardno:"",
      relation:""
    });
    setSelectedImagecitizen(null);
    setSelectedImage(null);
  };
  const handleSubmit = async () => {
    const {
      firstnameuser,
      lastnameuser,
      addressuser,
      numberuser,
      firstname,
      lastname,
      citizenshipnumber,
      address,
      date,
      moredetails,
      number,
      gender,
      age,
      relation,
      municipality,
      wardno,
      lastlocation,
    } = user;
    if(firstnameuser&&
      lastnameuser&&
      addressuser&&
      numberuser&&
      firstname&&
      lastname&&
      citizenshipnumber&&
      address&&
      date&&
      moredetails&&
      number&&
      gender&&
      age&&
      relation&&
      municipality&&
      wardno&&
      lastlocation){
        try {
          const response = await fetch("http://localhost:8000/submit-form", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user_details: {
                firstnameuser: user.firstnameuser,
                lastnameuser: user.lastnameuser,
                addressuser: user.addressuser,
                numberuser: user.numberuser,
                relation: user.relation,
              },
              person_details: {
                firstname: user.firstname,
                lastname: user.lastname,
                age: user.age,
                height: user.height,
                address: user.address,
                date: user.date,
                citizenshipnumber: user.citizenshipnumber,
                number: user.number,
                moredetails: user.moredetails,
                gender: user.gender,
                municipality: user.municipality,
                wardno: user.wardno,
                lastlocation: user.lastlocation,
              },
            }),
          });
    
          if (response.ok) {
            resetForm();
            enqueueSnackbar("Form submitted successfully!", { variant: "success" });
          } else {
            console.error("Form submission failed:", response.statusText);
          }
        } catch (error) {
          console.error("Error:", error);
        }
    } else {
      enqueueSnackbar("Your form is not completed", { variant: "error" });
  }
   
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };
  const [selectedImagecitizen, setSelectedImagecitizen] = useState(null);

  const handleImageChangecitizen = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImagecitizen(file);
    }
  };
  const [user, setUser] = useState({
    firstnameuser: "",
    lastnameuser: "",
    addressuser: "",
    numberuser: "",
    firstname: "",
    lastname: "",
    citizenshipnumber: "",
    address: "",
    date: "",
    moredetails: "",
    number: "",
    gender: "",
    age: "",

    relation: "",
    municipality: "",
    wardno: "",
    lastlocation: "",
  });
  const handeleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  return (
    < >
    <style>{`
        body {
          background-color:#dedede;
          margin: 0; 
          padding: 0; 
        }
      `}</style>
      <React.Fragment>
        <Container  >
          <Box 
            sx={{
              justifyContent: "center",
              mt: 5,
              border: "2px solid #3f51b5",
              borderRadius: "15px",
              maxWidth: 700,
              padding: 5,
              boxShadow: 24,
              mx: "auto",
              bgcolor:"white"
              
              
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 1,
                mt: -2,
              }}
            >
              <img
                src={PoliceLogo}
                alt="PoliceLogo"
                style={{ height: "70px", width: "75px" }}
              />
            </Box>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: 18,
                fontWeight: "700",
                color: "#004163",
              }}
            >
              Crime Investment Department
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: 15,
                fontWeight: "700",
                color: "#004163",
                mb: 2,
              }}
            >
              "वस्तुनिष्ठ अपराध अनुसन्धान, मानव अधिकारको सम्मान"
            </Typography>
            <Typography
              sx={{ textAlign: "center", fontSize: 18, fontWeight: "700" ,color:"#004163"}}
            >
              Details of User
            </Typography>
            <Grid spacing={2} container>
              <Grid item lg={6} md={6} xs={12}>
                <TextField
                  onChange={handeleChange}
                  value={user.firstnameuser}
                  name="firstnameuser"
                  sx={{
                    mt: 2,

                    mb: 2,
                  }}
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item lg={6} md={6} xs={12}>
                <TextField
                  onChange={handeleChange}
                  value={user.lastnameuser}
                  name="lastnameuser"
                  sx={{
                    mt: 2,

                    mb: 2,
                  }}
                  id="outlined-basic"
                  label="Last name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid spacing={2} container>
              <Grid item lg={6} md={6} xs={12}>
                <TextField
                  onChange={handeleChange}
                  value={user.numberuser}
                  name="numberuser"
                  required
                  sx={{
                    mt: 2,

                    mb: 2,
                  }}
                  id="outlined-basic"
                  label="Mobile Number"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item lg={6} md={6} xs={12}>
                <TextField
                  onChange={handeleChange}
                  value={user.relation}
                  name="relation"
                  sx={{
                    mt: 2,

                    mb: 2,
                  }}
                  id="outlined-basic"
                  label="Relation to the missing person"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>

            <TextField
              onChange={handeleChange}
              value={user.addressuser}
              name="addressuser"
              sx={{
                mt: 2,

                mb: 2,
              }}
              id="outlined-basic"
              label="Address"
              variant="outlined"
              fullWidth
            />
            <InputLabel htmlFor="image-upload" sx={{mb:1}}>Citizenship Card's Photo</InputLabel>
            <Input
              id="image-upload"
              type="file"
              onChange={handleImageChangecitizen}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    component="label"
                    htmlFor="image-upload"
                    edge="end"
                    color="primary"
                  >
                    <PhotoCamera />
                  </IconButton>
                </InputAdornment>
              }
            />

            {selectedImagecitizen && (
              <div>
                <p>Your Selected Image:</p>
                <img
                  src={URL.createObjectURL(selectedImagecitizen)}
                  alt="Selected"
                  width="150px"
                />
              </div>
            )}
            <Typography
              sx={{ textAlign: "center", fontSize: 18, fontWeight: "700",mt:4,color:"#004163" }}
            >
              Details to Find a Person
            </Typography>
            <Grid spacing={2} container>
              <Grid item lg={6} md={6} xs={12}>
                <TextField
                  onChange={handeleChange}
                  value={user.firstname}
                  name="firstname"
                  sx={{
                    mt: 2,

                    mb: 2,
                  }}
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item lg={6} md={6} xs={12}>
                <TextField
                  onChange={handeleChange}
                  value={user.lastname}
                  name="lastname"
                  sx={{
                    mt: 2,

                    mb: 2,
                  }}
                  id="outlined-basic"
                  label="Last name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>

            <Grid spacing={2} container>
              <Grid item lg={6} md={6} xs={12}>
                <TextField
                  onChange={handeleChange}
                  value={user.age}
                  name="age"
                  sx={{
                    mt: 2,

                    mb: 2,
                  }}
                  id="outlined-basic"
                  label="Age"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item lg={6} md={6} xs={12}>
                <TextField
                  onChange={handeleChange}
                  value={user.gender}
                  name="gender"
                  sx={{
                    mt: 2,

                    mb: 2,
                  }}
                  id="outlined-basic"
                  label="Gender"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid spacing={2} container>
              <Grid item lg={6} md={6} xs={12}>
                <TextField
                  onChange={handeleChange}
                  value={user.municipality}
                  name="municipality"
                  sx={{
                    mt: 2,

                    mb: 2,
                  }}
                  id="outlined-basic"
                  label="Municipality"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item lg={6} md={6} xs={12}>
                <TextField
                  onChange={handeleChange}
                  value={user.wardno}
                  name="wardno"
                  sx={{
                    mt: 2,

                    mb: 2,
                  }}
                  id="outlined-basic"
                  label="Ward Number"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid spacing={2} container>
              <Grid item lg={6} md={6} xs={12}>
                <TextField
                  onChange={handeleChange}
                  value={user.address}
                  name="address"
                  sx={{
                    mt: 2,

                    mb: 2,
                  }}
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item lg={6} md={6} xs={12}>
                <TextField
                  onChange={handeleChange}
                  value={user.lastlocation}
                  name="lastlocation"
                  sx={{
                    mt: 2,

                    mb: 2,
                  }}
                  id="outlined-basic"
                  label="Last Seen Loctaion"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item lg={6} md={6} xs={12}>
                {" "}
                <TextField
                  onChange={handeleChange}
                  value={user.citizenshipnumber}
                  name="citizenshipnumber"
                  sx={{
                    mt: 2,

                    mb: 2,
                  }}
                  id="outlined-basic"
                  label="Citizenship Number "
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item lg={6} md={6} xs={12}>
                {" "}
                <TextField
                  onChange={handeleChange}
                  value={user.date}
                  name="date"
                  type="date"
                  sx={{
                    mt: 2,

                    mb: 2,
                  }}
                  id="outlined-basic"
                  label=" "
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
            <TextField
              onChange={handeleChange}
              value={user.number}
              name="number"
              sx={{
                mt: 2,

                mb: 2,
              }}
              id="outlined-basic"
              label="Mobile Number"
              variant="outlined"
              fullWidth
            />
            <TextField
              onChange={handeleChange}
              value={user.moredetails}
              name="moredetails"
              sx={{
                mt: 2,

                mb: 2,
              }}
              id="outlined-basic"
              label="More about the Person"
              variant="outlined"
              fullWidth
              multiline
            />
            <InputLabel htmlFor="image-upload" sx={{mb:1}}>Photo of missing Person</InputLabel>
            <Input
              id="image-upload"
              type="file"
              onChange={handleImageChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    component="label"
                    htmlFor="image-upload"
                    edge="end"
                    color="primary"
                  >
                    <PhotoCamera />
                  </IconButton>
                </InputAdornment>
              }
            />

            {selectedImage && (
              <div>
                <p>Your Selected Image:</p>
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected"
                  width="150px"
                />
              </div>
            )}
            <Button
              onClick={handleSubmit}
              sx={{
                mx: "auto",
                display: "flex",
                borderRadius: "15px",
                bgcolor: "#004163",
                color: "white",
                mt: 5,
                paddingTop: "15px",
                paddingBottom: "15px",
                minWidth: 285,
                boxShadow: 24,

                ":hover": {
                  mx: "auto",
                  display: "flex",
                  borderRadius: "15px",
                  bgcolor: "#004163",
                  color: "white",
                  mt: 5,
                  // padding: "15px 200px 15px 200px",
                  transform: "scale(1.05)",
                  transition: "0.3s",
                },
              }}
            >
              Post
            </Button>
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
};

export default Form;
