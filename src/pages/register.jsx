import React, { useState } from 'react'
import { TextField, Button, Grid, Typography, Paper, RadioGroup, Radio, FormControlLabel } from '@mui/material'

// import imageSrc from '../../public/images/signup-image.jpg' // Replace with the correct absolute path

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'sponsor', // Default role, you can set it to 'bounty_hunter' if needed.
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // You can add registration logic here, such as sending the data to a server.
    // Example:
    console.log(formData)
  }

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }} >
      {/* Separate image container (positioned on the right) */}

      <Grid item xs={12} sm={8} md={3}>
        <Paper
          elevation={3}
          style={{ padding: '30px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}
        >
          <Typography variant="h5" gutterBottom>
            Register
          </Typography>
          <form onSubmit={handleSubmit}>
            {/* Form fields with rounded borders */}
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
              marginleft="80px"
              aria-label="Role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              style={{ marginTop: '10px', display: 'flex', flexDirection: 'row', marginLeft: '130px' }}
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
    </Grid>
  )
}

export default Register
