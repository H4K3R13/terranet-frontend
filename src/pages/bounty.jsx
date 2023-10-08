import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'
import Avatar from '@mui/material/Avatar'
import axios from 'axios'
import { Snackbar } from '@mui/material'
import MuiAlert from '@mui/material/Alert'
import { useRouter } from 'next/router'
import Button from '@mui/material/Button'

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const Bounty = () => {
  const savedUser = localStorage.getItem('user')
  const parsedUserData = JSON.parse(savedUser)
  const name = parsedUserData.first_name
  const email = parsedUserData.email

  const router = useRouter()
  const [postData, setPostData] = useState([])
  const [interestMap, setInterestMap] = useState({}) // Store interest state for each post

  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [snackbarSeverity, setSnackbarSeverity] = useState('success')

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API}api/post`)
        setPostData(response.data.posts)
        const initialInterestMap = {}
        response.data.posts.forEach((post) => {
          initialInterestMap[post.id] = false
        })
        setInterestMap(initialInterestMap)
      } catch (error) {
        console.error('Error fetching post data:', error)
      }
    }

    fetchData()
  }, [])

  const handleLogout = () => {
    router.push('/')
  }

  const handleInterest = async (postId, postTitle, postAuthor) => {
    setInterestMap((prevMap) => {
      const updatedMap = { ...prevMap }
      updatedMap[postId] = !prevMap[postId] // Toggle interest for the specific post
      return updatedMap
    })
    const data = {
      title: postTitle,
      username: email,
      sponsor_name: postAuthor,
    }
    console.log(data)
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API}api/interested`, data)
      if (response.status === 200) {
        console.log('Post created successfully:', response.data)
        setSnackbarMessage('Sponser Is Notified')
        setSnackbarSeverity('success')
        setSnackbarOpen(true)
      }
    } catch (error) {
      console.error('Error creating post:', error)
      setSnackbarMessage('Something Went Wrong')
      setSnackbarSeverity('error')
      setSnackbarOpen(true)
    }
  }
  const colors = ['#FF5733', '#FFBD33', '#B8FF33', '#33FF57', '#33FFBD', '#3333FF', '#BD33FF', '#FF33BD']

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleLogout}
        style={{ position: 'absolute', top: '10px', right: '10px' }}
      >
        Logout
      </Button>
      <h1 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', color: '#333' }}>Challenges</h1>

      {postData
        .slice()
        .reverse()
        .map((post, index) => {
          // Generate a random index within the length of the colors array
          const randomIndex = index % colors.length
          const randomColor = colors[randomIndex]
          return (
            <Card key={post.id} sx={{ marginBottom: '20px', borderRadius: '20px' }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: randomColor }} aria-label="recipe">
                    {post.sponsor_name.charAt(0).toUpperCase()}
                  </Avatar>
                }
                title={post.sponsor_name}
                subheader={post.created_at}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {post.description}
                  <br />
                  <CurrencyRupeeIcon style={{ fontSize: 'inherit', verticalAlign: 'middle' }} />
                  <span style={{ verticalAlign: 'middle', marginLeft: '5px' }}>{post.reward}</span>
                </Typography>
              </CardContent>
              <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
                <IconButton
                  aria-label="add to favorites"
                  onClick={() => handleInterest(post.id, post.title, post.sponsor_name)}
                >
                  <FavoriteIcon style={{ color: interestMap[post.id] ? 'red' : 'gray' }} />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </div>
            </Card>
          )
        })}

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <div>
          <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
            {snackbarMessage}
          </Alert>
        </div>
      </Snackbar>
    </div>
  )
}

export default Bounty
