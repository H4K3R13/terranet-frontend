import React, { useState } from 'react'
import { TextField, Button, Grid, Typography, Paper, RadioGroup, Radio, FormControlLabel } from '@mui/material'
// import imageSrc from '../../public/images/signup-image.jpg' // Replace with the correct absolute path

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'sponsor', // Default role, you can set it to 'bounty_hunter' if needed.
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // You can add login logic here, such as sending the data to a server.
    // Example:
    console.log(formData)
  }

  const handleSponsor = () => {
    router.push('/bounty')
  }

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={10} md={8} lg={2}>
        {/* Image on the left */}
        {/* <img src={imageSrc} alt="Image" style={{ width: '200px', margin: '80px 370px 20px 100px' }} /> */}
      </Grid>
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
              Login
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Login
