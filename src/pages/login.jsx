import React, { useState } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button, Grid, Paper, Typography, TextField } from '@mui/material';
import axios from 'axios';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { useRouter } from 'next/router';

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const Login = () => {
  const router = useRouter();
  const [userType, setUserType] = useState(''); // State to store selected user type

  const handleUserTypeChange = (event) => {
    const selectedUserType = event.target.value;
    setUserType(selectedUserType);
  
    // Update the role in the form data based on the selected user type
    setFormData({ ...formData, role: selectedUserType });
  };
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: '', // Default role, you can set it to 'bounty_hunter' if needed.
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
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API}api/login`, {
        email: formData.email,
        password: formData.password,
        user_type: formData.role === 'sponsor' ? 'Sponsor' : 'Bounty Hunter',
      });
      console.log('Login successful:', response.data);
      setSnackbarMessage('Login Successfull');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);

      localStorage.setItem('user', JSON.stringify(response.data.user));
      setTimeout(() => {
        if (response.data.user.user_type === 'Bounty Hunter') {
          router.push('/bounty');
        } else if (response.data.user.user_type === 'Sponsor') {
          router.push('/sponsor');
        }
      }, 2000);
    } catch (error) {
      console.error('Error during login:', error);
      setSnackbarMessage('Something Went Wrong');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '100vh', padding: '20px' }}
    >
      <Grid item xs={12} sm={10} md={3} lg={3}>
        <Paper
          elevation={3}
          style={{ padding: '20px', borderRadius: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}
        >
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
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
           <FormControl component="fieldset">
        <FormLabel component="legend">Select User Type</FormLabel>
        <RadioGroup
          aria-label="user-type"
          name="user-type"
          value={formData.role}  // Use formData.role instead of userType
          onChange={handleUserTypeChange}  // Use handleUserTypeChange to update userType and role
          style={{ marginTop: '10px' }}
        >
          <FormControlLabel value="sponsor" control={<Radio />} label="Sponsor" />
          <FormControlLabel value="bounty_hunter" control={<Radio />} label="Bounty Hunter" />
        </RadioGroup>
      </FormControl><br/>
            <Button type="submit" variant="contained" color="primary">
              Login
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

export default Login;
