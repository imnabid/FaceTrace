import React from "react";
import { useState } from "react";
import { Container, Box, Grid, Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Input, InputLabel, InputAdornment, IconButton } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { municipalities } from "./municpalities_name";
import { districts } from "./districts_name";
import PoliceLogo from "./Images/nppolicelogo.png";
import { useSnackbar } from "notistack";
const Form = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [gender, setGender] = useState("");
  const handleChangesex = (event) => {
    setGender(event.target.value);
  };

  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedMunicipality, setSelectedMunicipality] = useState("");

  const handleDistrictChange = (event) => {
    const selectedDistrict = event.target.value;
    setSelectedDistrict(selectedDistrict);

    setSelectedMunicipality("");
  };

  const handleMunicipalityChange = (event) => {
    setSelectedMunicipality(event.target.value);
    
  };
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
      age: "",
      gender: "",
      selectedDistrict: "",
      date:"",
      selectedMunicipality: "",
    });
    setGender("");
    setSelectedDistrict("");
    setSelectedMunicipality("");
    setSelectedImage(null);
  };
  const handleSubmit = async () => {
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
          },
          person_details: {
            firstname: user.firstname,
            lastname: user.lastname,
            age: user.age,
            citizenshipnumber: user.citizenshipnumber,
            number: user.number,
            moredetails: user.moredetails,
            gender: user.gender,  
            selectedDistrict: user.selectedDistrict,  
            selectedMunicipality: user.selectedMunicipality, 
            date:user.date
          },
        }),
        
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
        resetForm()
        enqueueSnackbar("Form is submitted sucessfully",{ variant: 'success' })
      } else {
        console.error("Form submission failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
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
    moredetails: "",
    number: "",
    age: "",
    date:"",
    gender: "",  
    selectedDistrict: "",  
    selectedMunicipality: "", 
  });
  
  const handeleChange = (e) => {
    const { name, value } = e.target;    
      setUser({
        ...user,
        [name]: value,
      });
     
  };
  
  return (
    <>
      <React.Fragment>
        <Container>
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
            <Typography sx={{
                textAlign: "center",
                fontSize: 15,
                fontWeight: "700",
                color: "#004163",
                mb:2
              }}>"वस्तुनिष्ठ अपराध अनुसन्धान, मानव अधिकारको सम्मान"</Typography>
            <Typography
              sx={{ textAlign: "center", fontSize: 18, fontWeight: "700" }}
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
                  label="Last name*"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
            <TextField
              onChange={handeleChange}
              value={user.numberuser}
              name="numberuser"
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
            <Typography
              sx={{ textAlign: "center", fontSize: 18, fontWeight: "700" }}
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
                  label="Last name*"
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
                  name="gender"
                  select
                  value={user.gender}
                  onChange={handleChangesex}
                  sx={{
                    mt: 2,

                    mb: 2,
                  }}
                  SelectProps={{
                    native: true,
                  }}
                  fullWidth
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </TextField>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item lg={6} md={6} xs={12}>
                <TextField
                  label=""
                  select
                  name="selectedDistrict"
                  value={selectedDistrict}
                  onChange={handleDistrictChange}
                  SelectProps={{
                    native: true,
                  }}
                  fullWidth
                  sx={{
                    mt: 2,

                    mb: 2,
                  }}
                >
                  <option value="" disabled>
                    Select District
                  </option>
                  {districts.map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item lg={6} md={6} xs={12}>
                {selectedDistrict && (
                  <TextField
                    label=""
                    select
                    name="selectedMunicipality"
                    value={selectedMunicipality}
                    onChange={handleMunicipalityChange}
                    SelectProps={{
                      native: true,
                    }}
                    fullWidth
                    sx={{
                      mt: 2,

                      mb: 2,
                    }}
                  >
                    <option value="" disabled>
                      Select Municipality
                    </option>
                    {municipalities[selectedDistrict].map((municipality) => (
                      <option key={municipality} value={municipality}>
                        {municipality}
                      </option>
                    ))}
                  </TextField>
                )}
              </Grid>
            </Grid>

            <TextField
              onChange={handeleChange}
              value={user.citizenshipnumber}
              name="citizenshipnumber"
              sx={{
                mt: 2,

                mb: 2,
              }}
              id="outlined-basic"
              label="Citizenship Number (only if nepali)"
              variant="outlined"
              fullWidth
            />
           <Grid container spacing={2}><Grid item lg={6} md={6} xs={12}> <TextField
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
            /></Grid>
            <Grid item lg={6} md={6} xs={12}> <TextField
              onChange={handeleChange}
              value={user.date}
              name="date"
              sx={{
                mt: 2,

                mb: 2,
              }}
              id="outlined-basic"
          
              type="date"
              variant="outlined"
              fullWidth
            /></Grid>
            </Grid>
            <TextField
              onChange={handeleChange}
              value={user.moredetails}
              name="moredetails"
              sx={{
                mt: 2,

                mb: 2,
              }}
              id="outlined-basic"
              label="More about the Person "
              variant="outlined"
              fullWidth
              multiline
            />
            <InputLabel htmlFor="image-upload">Upload Image</InputLabel>
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
                bgcolor: "#3f51b5",
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
                  bgcolor: "#3f51b5",
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
