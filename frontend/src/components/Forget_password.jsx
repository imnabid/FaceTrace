import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
} from '@mui/material';

const Forgot_password = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      // Make a POST request to your backend API endpoint for forgot password
      const response = await fetch('http://localhost:8000/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      if (response.ok) {
        setMessage(`Password reset instructions sent to ${email}`);
      } else {
        const data = await response.json();
        setMessage(`Error: ${data.detail}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error sending password reset instructions');
    }
  };
  
  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center',mt:5 }}>
        <Typography component="h1" variant="h5" mb={3}>
          Forgot Password
        </Typography>
        <TextField
          margin="normal"
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={handleEmailChange}
        />
        <Button
          type="button"
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
          onClick={handleSubmit}
        >
          Send Reset Instructions
        </Button>
        {message && (
          <Box mt={2}>
            <Typography color={message.includes('Error') ? 'error' : 'success'}>
              {message}
            </Typography>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default Forgot_password;
