import React, { useState } from 'react'
import { Container, TextField, Button, Snackbar,  Paper, Grid, Typography } from '@mui/material'
import MuiAlert from '@mui/material/Alert'
import axios from 'axios'
import { useRouter } from 'next/router'

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const CreatePost = () => {
  const savedUser = localStorage.getItem("user")
  const parsedUserData = JSON.parse(savedUser);
  const name = parsedUserData.first_name
  const email = parsedUserData.email

  console.log(email, name)  
  const router = useRouter()
  const [postData, setPostData] = useState({
    author: email,
    sponsor_name: name,
    title: '',
    description: '',
    reward: '',
    deadline: '',
  })

  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [snackbarSeverity, setSnackbarSeverity] = useState('success')

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API}api/post`, postData)

      if (response.status === 201) {
        console.log('Post created successfully:', response.data)
        setSnackbarMessage('Post created successfully!')
        setSnackbarSeverity('success')
        setSnackbarOpen(true)
      } else {
        console.error('Error creating post:', response.statusText)
        setSnackbarMessage('Error creating post')
        setSnackbarSeverity('error')
        setSnackbarOpen(true)
      }
    } catch (error) {
      console.error('Error creating post:', error)
      setSnackbarMessage('Error creating post')
      setSnackbarSeverity('error')
      setSnackbarOpen(true)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setPostData({
      ...postData,
      [name]: value,
    })
  }

  const handleLogout = () => {
    router.push('/')
  }

  return (
    <div style={{ padding: '20px' }}>
     <Button
        variant="contained"
        color="primary"
        onClick={handleLogout}
        style={{ position: 'absolute', top: '10px', right: '10px' }}
      >
        Logout
      </Button>

      <Container maxWidth="sm">
        <Paper style={{ padding: '20px', marginTop: '70px', width: '100%' , position:"left" }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <Typography variant="h4" align="center" gutterBottom>
                Create a Post
              </Typography>
            </Grid>
            {/* Other fields ... */}
          </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            name="author"
            label="Author Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={postData.author}
            onChange={handleChange}
          />
          <TextField
            name="sponsor_name"
            label="Sponsor Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={postData.sponsor_name}
            onChange={handleChange}
          />
          <TextField
            name="title"
            label="Title"
            variant="outlined"
            fullWidth
            margin="normal"
            value={postData.title}
            onChange={handleChange}
          />
          <TextField
            name="description"
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            value={postData.description}
            onChange={handleChange}
          />
          <TextField
            name="reward"
            label="Reward"
            variant="outlined"
            fullWidth
            type="number"
            margin="normal"
            value={postData.reward}
            onChange={handleChange}
          />
          <TextField
            name="deadline"
            label="Deadline"
            variant="outlined"
            fullWidth
            type="datetime-local"
            margin="normal"
            value={postData.deadline}
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" type="submit">
            Create Post
          </Button>
        </form>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <div>
            <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
              {snackbarMessage}
            </Alert>
          </div>
        </Snackbar>
      </Paper>
    </Container>
    </div>
  )
}

export default CreatePost
