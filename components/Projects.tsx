import Image from 'next/image';
import styles from './Projects.module.css';
import { Atom, ExternalLink, Rose, UtensilsCrossed } from 'lucide-react';

interface Project {
  num: string;
  type: string;
  title: string;
  href: string;
  githubHref?: string;
  desc: string;
  stack: string[];
  imageSrc?: string;
  placeholder: React.ReactNode;
}

const ProjectsData: Project[] = [
  {
    num: '01',
    type: 'Freelance Web App',
    title: 'Bliss Space Event Venue',
    href: 'https://blissspaceindy.com',
    desc: 'Built my first freelance site for a local event venue in Fishers, IN. Worked closely with the client from wireframe to deployment, advising on UX, UI, and marketing strategy. Ongoing maintenance and updates.',
    stack: ['React', 'TailwindCSS', 'JavaScript', 'HTML5/CSS3', 'Heroku'],
    placeholder: <Rose size={200} />,
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
    placeholder: <UtensilsCrossed size={200} />,
    imageSrc: '/mealPrepMarket.webp',
  },
  {
    num: '03',
    type: 'API Integration',
    title: 'Rick & Morty Database',
    href: 'https://rickandmortydatabase.herokuapp.com',
    desc: 'A searchable character database powered by the Rick & Morty public API. Built to practice API integration, component architecture, and responsive design from scratch.',
    stack: ['React', 'Rick & Morty API', 'HTML5/CSS3', 'JavaScript', 'Heroku'],
    placeholder: <Atom size={200} />,
    imageSrc: '/rickandmorty.webp',
  },
];

export default function Projects() {
  return (
    <section
      id='projects'
      aria-labelledby='projects-heading'
      className={styles.section}
    >
      <p className='section-eyebrow'>What I&apos;ve built</p>
      <h2
        id='projects-heading'
        className='section-title'
      >
        Projects
      </h2>

      <div className={styles.grid}>
        {ProjectsData.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const {
    num,
    type,
    title,
    href,
    githubHref,
    desc,
    stack,
    imageSrc,
    placeholder,
  } = project;

  return (
    <article className={styles.card}>
      {/* Screenshot or emoji placeholder */}
      {imageSrc ? (
        <div className={styles.imgWrapper}>
          <Image
            src={imageSrc}
            alt={`${title} screenshot`}
            fill
            style={{ objectFit: 'cover', objectPosition: 'top' }}
            sizes='(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>
      ) : (
        <div
          role='img'
          aria-label={`${title} — screenshot coming soon`}
          className={styles.placeholder}
        >
          {placeholder}
        </div>
      )}

      <div className={styles.body}>
        <p className={styles.num}>
          {num} — {type}
        </p>

        {/* Glass pill button — project title as link */}
        <a
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={`Visit ${title} (opens in new tab)`}
          className={styles.titleLink}
        >
          {title}
          <ExternalLink size={13} />
        </a>

        <p className={styles.desc}>{desc}</p>

        <div
          role='list'
          aria-label='Technologies used'
          className={styles.stack}
        >
          {stack.map((tech) => (
            <span
              key={tech}
              role='listitem'
              className={styles.stackTag}
            >
              {tech}
            </span>
          ))}
        </div>

        {githubHref && (
          <div className={styles.links}>
            <a
              href={githubHref}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.link}
            >
              GitHub ↗
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
