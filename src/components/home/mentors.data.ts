import type { Mentor } from '@/interfaces/mentor'

export const data: Array<Mentor> = [
  {
    id: 1,
    photo: '/images/mentors/b1.jpg',
    name: 'Transforming a Neglected Park ',
    category: 'UI/UX Design',
    description:
      'I am Sam, a Thrikkakara resident. Our once-neglected central park faced decay, but volunteers united to revive it. With Terranets support, transforming our neighborhood into a cleaner, greener, and more vibrant community.',

    company: {
      name: '',
      logo: '/images/companies/grab.png',
    },
  },
  {
    id: 2,
    photo: '/images/mentors/b2.jpg',
    name: 'Unity in Agriculture',
    category: 'Machine Learning',
    description:
      'Maya shares a harrowing tale of a flood and landslide that trapped her town. Brave volunteers arrived, saving lives, offering hope, and inspiring resilience through selfless dedication and hard work.',
    company: {
      name: 'Google',
      logo: '/images/companies/google.png',
    },
  },
  {
    id: 3,
    photo: '/images/mentors/b3.jpg',
    name: 'Empowering the Unemployed',
    category: 'Android Development',
    description:
      'Vimal, a job seeker, discovered Terranets call for unemployed graduates to teach underprivileged students. He and friends formed a passionate teachers community, dedicating themselves to educating and empowering youngsters.',
    company: {
      name: 'Airbnb',
      logo: '/images/companies/airbnb.png',
    },
  },
  {
    id: 4,
    photo: '/images/mentors/b4.jpg',
    name: ' How Terranet Empowered Farmers',
    category: 'Fullstack Development',
    description:
      'Thomas, a traditional farmer, united with Terranets agriculture-savvy volunteers. They formed a cooperative, and shared knowledge, fostering food security, environmental protection, and community unity.',
    company: {
      name: 'Microsoft',
      logo: '/images/companies/microsoft.png',
    },
  },
]
