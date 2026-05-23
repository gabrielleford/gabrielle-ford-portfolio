import Image from 'next/image';

interface Project {
  num: string;
  type: string;
  title: string;
  href: string;
  githubHref?: string;
  desc: string;
  stack: string[];
  imageSrc?: string;
  placeholder: string;
}

const ProjectsData: Project[] = [
  {
    num: '01',
    type: 'Freelance Web App',
    title: 'Bliss Space Event Venue',
    href: 'https://blissspaceindy.com',
    desc: 'Built my first freelance site for a local event venue in Fishers, IN. Worked closely with the client from wireframe to deployment, advising on UX, UI, and marketing strategy. Ongoing maintenance and updates.',
    stack: ['React', 'TailwindCSS', 'JavaScript', 'HTML5/CSS3', 'Heroku'],
    placeholder: '🌸',
    imageSrc: '/blissEventSpace.webp',
  },
  {
    num: '02',
    type: 'Full-Stack E-Commerce',
    title: 'Meal Prep Market',
    href: 'https://mealprepmarket.herokuapp.com',
    desc: 'E-commerce platform where cooks create accounts, advertise meal prep services, and consumers can purchase meals. Includes a separate Admin client for managing all user accounts, listings, and orders.',
    stack: [
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Sequelize',
      'Heroku',
    ],
    placeholder: '🥗',
    imageSrc: '/mealPrepMarket.webp',
  },
  {
    num: '03',
    type: 'API Integration',
    title: 'Rick & Morty Database',
    href: 'https://rickandmortydatabase.herokuapp.com',
    desc: 'A searchable character database powered by the Rick & Morty public API. Built to practice API integration, component architecture, and responsive design from scratch.',
    stack: ['React', 'Rick & Morty API', 'HTML5/CSS3', 'JavaScript', 'Heroku'],
    placeholder: '🛸',
    imageSrc: '/rickandmorty.webp',
  },
];

export const Projects = () => {
  return <div id='projects'>Projects</div>;
};
