import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Paper, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import axios from 'axios';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
// import imageSrc from '../../public/images/signup-image.jpg'; // Replace with the correct absolute path

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'sponsor', // Default role, you can set it to 'bounty_hunter' if needed.
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API}api/register`, {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        password: formData.password,
        user_type: formData.role === 'sponsor' ? 'Sponsor' : 'Bounty Hunter',
      });
      console.log('Registration successful:', response.data);
      setSnackbarMessage('Registration Successfull');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      // You can handle success (e.g., redirect) here
    } catch (error) {
      console.error('Error during registration:', error);
      setSnackbarMessage('Something Went Wrong');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      // You can handle errors here
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '100vh', padding: '20px' }}
    >
      <Grid item xs={12} sm={10} md={6} lg={4}>
        <Paper
          elevation={3}
          style={{
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
          }}
        >
          <Typography variant="h5" gutterBottom>
            Register
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="First Name"
              fullWidth
              margin="normal"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              InputProps={{
                style: { borderRadius: '10px' },
              }}
            />
            <TextField
              label="Last Name"
              fullWidth
              margin="normal"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              InputProps={{
                style: { borderRadius: '10px' },
              }}
            />
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              InputProps={{
                style: { borderRadius: '10px' },
              }}
            />
            <TextField
              label="Password"
              fullWidth
              margin="normal"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              InputProps={{
                style: { borderRadius: '10px' },
              }}
            />
            <TextField
              label="Confirm Password"
              fullWidth
              margin="normal"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              InputProps={{
                style: { borderRadius: '10px' },
              }}
            />
            <Typography variant="subtitle1" gutterBottom>
              Role
            </Typography>
            <RadioGroup
              aria-label="Role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              style={{ marginTop: '10px', display: 'flex', flexDirection: 'row' }}
            >
              <FormControlLabel value="sponsor" control={<Radio />} label="Sponsor" />
              <FormControlLabel value="bounty_hunter" control={<Radio />} label="Bounty Hunter" />
            </RadioGroup>
            <Button type="submit" variant="contained" color="primary">
              Register
            </Button>
          </form>
        </Paper>
      </Grid>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <div>
          <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
            {snackbarMessage}
          </Alert>
        </div>
      </Snackbar>
    </Grid>
  );
};

export default Register;
