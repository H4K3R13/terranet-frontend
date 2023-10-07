import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Avatar from '@mui/material/Avatar'; 
import axios from 'axios';

const Bounty = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API}api/post`);
        setPostData(response.data.posts);
      } catch (error) {
        console.error('Error fetching post data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', color: '#333' }}>
        Challenges
      </h1>
      {postData.map((post) => (
        <Card key={post.id} sx={{ marginBottom: '20px', borderRadius: '20px' }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            title={post.sponsor_name}
            subheader={post.created_at}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {post.description}
              <br />
              <CurrencyRupeeIcon /> {post.reward}
            </Typography>
          </CardContent>
          <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Bounty;
