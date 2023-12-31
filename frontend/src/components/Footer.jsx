import {
    Grid,
    List,
    ListItemText,
    Typography,
  
    Link,
    IconButton,
   
  } from "@mui/material";
  import { Box } from "@mui/system";

  import YouTubeIcon from "@mui/icons-material/YouTube";
  import FacebookIcon from "@mui/icons-material/Facebook";
  import LinkedInIcon from "@mui/icons-material/LinkedIn";
  import TwitterIcon from "@mui/icons-material/Twitter";
  import InstagramIcon from "@mui/icons-material/Instagram";
  import PoliceLogo from "./Images/nppolicelogo.png";
  import Map from "./Images/map.png";
  import GoogleMapReact from 'google-map-react';
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  export default function Footer() {
    const defaultProps = {
      center: {
        lat: 10.99835602,
        lng: 77.01502627
      },
      zoom: 11
    };
    return (
      <div className="container">
        
        <Box
          elevation={24}
          sx={{
            mt: 32,
            background: "#004163",
           
            p: { xs: 4, md: 5 },
           
          
            fontSize: { xs: "12px", md: "14px" },
         
          }}
        >
          <Grid container spacing={15} >
            <Grid item  lg={3} sx={12}>
            <Box
              sx={{
                
                
                
              }}
            >
              <img
             
                src={PoliceLogo}
                alt="PoliceLogo"
                style={{ height: "70px", width: "75px" }}
              />
            </Box>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  color: "white",
                  mt: 2,
                }}
              >
            Crime Investment Depertment
              </Typography>
              <Typography variant="caption2" color="white">
                Loctaion: Naxal, Kathmandu <br />
              </Typography>
              <Typography variant="caption2" color="white">
                Phone: +977-01-4411210
              </Typography>
              <Box
                sx={{
                  mt: 4,
                }}
              >
                <Link href="https://www.facebook.com/">
                  <IconButton>
                    <FacebookIcon
                      sx={{ mr: 1, color: "white", cursor: "pointer" }}
                    />
                  </IconButton>
                </Link>
                <Link href="https://www.twitter.com/">
                  <IconButton>
                    {" "}
                    <TwitterIcon
                      sx={{ mr: 1, color: "white", cursor: "pointer" }}
                    />
                  </IconButton>
                </Link>
                <Link href="https://www.instafram.com/">
                  <IconButton>
                    <InstagramIcon
                      sx={{ mr: 1, color: "white", cursor: "pointer" }}
                    />
                  </IconButton>
                </Link>
                <Link><IconButton></IconButton></Link>
                <Link href="https://www.linkedin.com/"><IconButton><LinkedInIcon
                  sx={{ mr: 1, color: "white", cursor: "pointer" }}
                /></IconButton></Link>
           <Link href="https://www.youtube.com/"><IconButton>     <YouTubeIcon sx={{ color: "white", cursor: "pointer" }} /></IconButton></Link>
              </Box>
            </Grid>
  
            <Grid item md={6} lg={3} xs={12} >
              <Typography
                variant="body1"
                sx={{ fontSize: "1.1rem", fontWeight: "600",  color: "white" ,textDecoration:"underline",textDecorationColor:"yellow", mt:{xs:-5,lg:0,md:0}}}
              >
                OTHER LINKS
              </Typography>
              <List>
                <ListItemText>
                  <Typography lineHeight={2} color="skyblue">
                    Missing Persons
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Typography
                    lineHeight={2}
                    color="skyblue"
                  >
                    Missing Child
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Typography
                    lineHeight={2}
                    color="skyblue"
                  >
                   Found Child
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Typography lineHeight={2} color="skyblue">
                    unidentified Dead Bodies
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Typography lineHeight={2} color="skyblue" >
                   Nepal Police(main Site)
                  </Typography>
                </ListItemText>
              </List>
            </Grid>
            <Grid item md={6} lg={3} xs={12}>
              <Typography
                variant="body1"
                sx={{ fontSize: "1.1rem", fontWeight: "600", color: "white" ,textDecoration:"underline",textDecorationColor:"yellow",mt:{xs:-5,lg:0,md:0}}}
              >
               POLICE OFFICE LINK
              </Typography>
              <List>
             <Link href="https://koshi.nepalpolice.gov.np/" sx={{textDecoration:"none"}}>   <ListItemText>
                  <Typography lineHeight={2} color="skyblue" cursor="pointer">
                  Koshi Province Police
                  </Typography>
                </ListItemText></Link>
                <Link href="https://madhesh.nepalpolice.gov.np/" sx={{textDecoration:"none"}}>   <ListItemText>
                  <Typography lineHeight={2} color="skyblue" cursor="pointer">
                  Madhesh Province Police
                  </Typography>
                </ListItemText></Link>
                <Link href="https://bagmati.nepalpolice.gov.np/" sx={{textDecoration:"none"}}>   <ListItemText>
                  <Typography lineHeight={2} color="skyblue" cursor="pointer">
                  Bagmati Province Police
                  </Typography>
                </ListItemText></Link>
                <Link href="https://gandaki.nepalpolice.gov.np/" sx={{textDecoration:"none"}}>   <ListItemText>
                  <Typography lineHeight={2} color="skyblue" cursor="pointer">
                  Gandaki Province Police
                  </Typography>
                </ListItemText></Link>
                <Link href="https://lumbini.nepalpolice.gov.np/" sx={{textDecoration:"none"}}>   <ListItemText>
                  <Typography lineHeight={2} color="skyblue" cursor="pointer">
                  Lumbini Province Police
                  </Typography>
                </ListItemText></Link>
                <Link href="https://karnali.nepalpolice.gov.np/" sx={{textDecoration:"none"}}>   <ListItemText>
                  <Typography lineHeight={2} color="skyblue" cursor="pointer">
                 Karnali Province Police
                  </Typography>
                </ListItemText></Link>
                <Link href="https://sudurpashchim.nepalpolice.gov.np/" sx={{textDecoration:"none"}}>   <ListItemText>
                  <Typography lineHeight={2} color="skyblue" cursor="pointer">
                  Sudurpaschim Province Police
                  </Typography>
                </ListItemText></Link>
              </List>
            </Grid> 
            <Grid item md={6} lg={3} xs={12}>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: 'white',
                textDecoration: 'underline',
                textDecorationColor: 'yellow',
                mt: { xs: -5, lg: 0, md: 0 },
              }}
            >
              Map
            </Typography>
            <div style={{ height: '30vh', width: '100%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "YOUR_GOOGLE_MAPS_API_KEY" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <AnyReactComponent
                  lat={defaultProps.center.lat}
                  lng={defaultProps.center.lng}
                  text="My Marker"
                />
              </GoogleMapReact>
            </div>
          </Grid>
          
          </Grid>
        </Box>
      </div>
    );
  }
  