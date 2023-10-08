import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Non-profit Organization Support',
    description:
      'The platform serves as a dedicated space for non-profit organizations (NGOs) to seek essential donations for their impactful projects, helping them raise funds effectively.',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Dynamic Rewards System',
    description:
      'A well-defined rewards system incentivizes users to actively participate and take responsibility for addressing global challenges.',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Collective Progress Tracking',
    description:
      'The platform fosters a sense of collective progress by involving users, sponsors, and NGOs in addressing global challenges together.',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'User-Centric Engagement',
    description: 'Users have the flexibility to choose tasks with their personal interests and values.',
    icon: <LocalLibraryIcon />,
  },
]
