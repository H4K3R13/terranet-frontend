import React, { useState } from 'react'
import { Container, TextField, Button, Snackbar } from '@mui/material'
import MuiAlert from '@mui/material/Alert'
import axios from 'axios'
import { useRouter } from 'next/router'

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const CreatePost = () => {
  const router = useRouter()
  const [postData, setPostData] = useState({
    author: '',
    sponsor_name: '',
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
    <Container maxWidth="sm">
      <div>
        <h2>Create a Post</h2>
        <Button variant="contained" color="primary" onClick={handleLogout}>
          Logout
        </Button>
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
      </div>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <div>
          <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
            {snackbarMessage}
          </Alert>
        </div>
      </Snackbar>
    </Container>
  )
}

export default CreatePost
