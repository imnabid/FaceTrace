// src/components/AboutUs.js
import React from 'react';
import { Typography, Container, Paper, CardMedia } from '@mui/material';

const AboutUs = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <CardMedia
          component="img"
          alt="Crime Investigation Bureau Nepal"
          height="300"
          src="https://cib.nepalpolice.gov.np/media/filer_public/ac/3f/ac3fb9dc-53bb-4ba2-a9ea-b98b74de2e6c/teccdr-2ndbatch.jpg"  // Update with your image path
          sx={{ maxWidth: '100%', borderRadius: '8px', marginBottom: '20px' }}
        />
        <Typography variant="h4" gutterBottom>
          About Crime Investigation Bureau Nepal
        </Typography>
        <Typography paragraph>
          Welcome to the Crime Investigation Bureau Nepal, where we are dedicated
          to ensuring the safety and security of our citizens. Our team of
          skilled investigators and law enforcement professionals work
          tirelessly to solve crimes, apprehend criminals, and uphold the rule
          of law.
        </Typography>
        <Typography paragraph>
          At Crime Investigation Bureau Nepal, we leverage cutting-edge
          technology and employ a collaborative approach to investigations. Our
          commitment to justice is unwavering, and we strive to maintain the
          highest standards of integrity in our work.
        </Typography>
        <Typography paragraph>
          Explore our website to learn more about our services, ongoing
          investigations, and how you can contribute to creating a safer
          community for everyone.
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutUs;
