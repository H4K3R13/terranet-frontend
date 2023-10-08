import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Empowering!',
    content:
      'I ve always wanted to contribute to making the world a better place, but finding the right opportunities was a challenge. This platform changed everything. It offers a wide range of tasks that align with my interests, and the rewards system keeps me motivated. Its empowering to know that my actions are making a positive impact on global issues.',
    user: {
      id: 1,
      name: 'Luis Sera',
      professional: 'Executive Director',
      photo: '1.jpg',
    },
  },
  {
    id: 2,
    title: 'Support',
    content:
      'As a non-profit organization, we often struggle to find the necessary support for our projects. This platform has been a game-changer for us. We can showcase our missions and achievements to a community of engaged users who genuinely care about our cause. The transparency and trust it fosters have helped us raise the funds needed to drive our impactful projects forward.',
    user: {
      id: 1,
      name: 'Riski',
      professional: 'Environmental Activist',
      photo: '2.jpg',
    },
  },
  {
    id: 3,
    title: 'Dedication and Transparency',
    content:
      'Supporting this platform has been incredibly fulfilling. We can present meaningful challenges to the community and witness the dedication and passion with which users tackle them. The verification process ensures that our goals are met, and the transparency in impact reporting reassures us that our contributions are making a difference in addressing global challenges.',
    user: {
      id: 1,
      name: 'Nguyễn Văn',
      professional: 'Non-profit Executive Director',
      photo: '3.jpg',
    },
  },
  {
    id: 4,
    title: 'Great Quality!',
    content:
      'I ve been part of this platforms community for a while now, and its more than just completing tasks; its about belonging to a collective force for good. The game-like elements and the sense of camaraderie among users keep me coming back. Its inspiring to see how our combined efforts are creating tangible solutions to global problems.',
    user: {
      id: 1,
      name: 'Diana Jordan',
      professional: 'Sustainability Manager',
      photo: '4.jpg',
    },
  },
]
