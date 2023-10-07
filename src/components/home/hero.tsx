import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '@/components/styled-button'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
// import { useRouter } from 'next/router' // Import the useRouter hook
import Vid from './videoBg.mp4'
interface Exp {
  label: string
  value: string
}
interface ExpItemProps {
  item: Exp
}

const ExpItem: FC<ExpItemProps> = ({ item }) => {
  const { value, label } = item
  return (
    <Box sx={{ textAlign: 'center', mb: { xs: 1, md: 0 } }}>
      <Typography
        sx={{ color: 'secondary.main', mb: { xs: 1, md: 2 }, fontSize: { xs: 34, md: 44 }, fontWeight: 'bold' }}
      >
        {value}
      </Typography>
      <Typography color="text.secondary" variant="h5">
        {label}
      </Typography>
    </Box>
  )
}

const HomeHero: FC = () => {


  return (
    <Box
      id="hero"
      sx={{
        // backgroundImage: `url('/images/homeimg.jpg')`,
        backgroundSize: 'cover', // Cover the entire box
        backgroundAttachment: 'fixed', // Fixed background position
        backgroundColor: '#eeeeee',
        position: 'relative',
        pt: 4,
        pb: { xs: 8, md: 10 },
        minHeight: '100vh',
        // Set minimum height to 100% of viewport height
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 0,

          // Adjust the opacity as needed
          // Adjust the stacking order as needed
        },
      }}
    >
    <video
    autoPlay
    loop
    muted
    playsInline
    style={{
      position: 'absolute',
      width: '100%', // Set width to screen width
      height: '100%', // Set height to screen height
      objectFit: 'cover',
      zIndex: -1, // Place video behind other content
    }}
  >
    <source src={Vid} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
      <Container maxWidth="lg">
     
        <Grid container spacing={0} sx={{ flexDirection: { xs: 'column', md: 'unset' } }}>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ mb: 3 }}>
                <Typography
                  component="h2"
                  sx={{
                    position: 'relative',
                    fontSize: { xs: 30, md: 42 },
                    letterSpacing: 1.5,
                    fontWeight: 'bold',
                    lineHeight: 1.3,
                    zIndex: 1,
                  }}
                >
                  <Typography
                    component="mark"
                    sx={{
                      position: 'relative',
                      color: 'primary.main',
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      backgroundColor: 'unset',
                    }}
                  >
                    {' '}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: { xs: 24, md: 34 },
                        left: 2,
                        transform: 'rotate(3deg)',
                        // '& img': { width: { xs: 146, md: 210 }, height: 'auto' },
                      }}
                    >
                      {/* eslint-disable-next-line */}
                      {/* <img src="/images/headline-curve.svg" alt="Headline curve" /> */}
                    </Box>
                  </Typography>
                  OUR VISION {/* with Different Way */}
                </Typography>
              </Box>
              <Box sx={{ mb: 4, width: { xs: '100%', md: '70%' } }}>
                <Typography sx={{ color: '#000', lineHeight: 1.6 }}>
                  {
                    'Our vision is to foster a world where every individual  actions, no matter how small, contribute to meaningful global change. We aspire to create a digital platform that empowers people to make a positive impact by completing diverse tasks while offering NGOs the resources they need to drive essential projects forward. Through collaboration, transparency, and a dynamic rewards system, we aim to build a community dedicated to addressing pressing global challenges. Together, we envision a brighter, more sustainable future for all.'
                  }
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} sx={{ position: 'relative' }}></Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeHero
