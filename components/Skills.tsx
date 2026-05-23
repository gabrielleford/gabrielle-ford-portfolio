import styles from './Skills.module.css';
import {
  Cog,
  Database,
  LockKeyhole,
  MonitorCloud,
  MonitorCog,
  Proportions,
} from 'lucide-react';

interface Skill {
  icon: React.ReactNode;
  level: string;
  name: string;
  desc: string;
  tags: string[];
}

const SkillsData: Skill[] = [
  {
    icon: <Cog size={24} />,
    level: 'Professional',
    name: 'Systems Integration',
    desc: 'Designing and connecting enterprise systems, automating workflows across platforms at scale.',
    tags: [
      'Atera',
      'Filevine',
      'Lead Docket',
      'Power Automate',
      'REST APIs',
      'Zapier',
    ],
  },
  {
    icon: <MonitorCog size={24} />,
    level: 'Professional',
    name: 'Full-Stack Development',
    desc: 'Building end-to-end web applications - from database design to responsive UI.',
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express'],
  },
  {
    icon: <MonitorCloud size={24} />,
    level: 'Professional',
    name: 'Cloud & DevOps',
    desc: 'Managing cloud infrastructure and CI/CD pipelines to keep services running reliably.',
    tags: ['Agile / Scrum', 'AWS', 'Firebase', 'Git', 'Heroku'],
  },
  {
    icon: <Database size={24} />,
    level: 'Professional',
    name: 'Data & Databases',
    desc: 'Designing schemas, building dashboards, and manipulating data with SQL and ETL tooling.',
    tags: ['Domo', 'ETL', 'PostgreSQL', 'S3', 'Sequelize'],
  },
  {
    icon: <Proportions size={24} />,
    level: 'Professional',
    name: 'UI & Styling',
    desc: 'Crafting accessible, responsive interfaces with modern CSS frameworks and design systems.',
    tags: [
      'Bootstrap',
      'Figma',
      'HTML5 / CSS3',
      'Styled-Components',
      'Tailwind CSS',
    ],
  },
  {
    icon: <LockKeyhole size={24} />,
    level: 'Experienced',
    name: 'Auth & Security',
    desc: 'Implementing authentication flows and secure data handling in full-stack applications.',
    tags: ['Bcrypt', 'JWT', 'OAuth'],
  },
];

export default function Skills() {
  return (
    <section
      id='skills'
      aria-labelledby='skills-heading'
      className={styles.section}
    >
      <p className='section-eyebrow'>What I bring</p>
      <h2
        id='skills-heading'
        className='section-title'
      >
        Skills &amp; Technologies
      </h2>

      <div className={styles.grid}>
        {SkillsData.map((skill) => (
          <article
            key={skill.name}
            className={styles.card}
          >
            <div className={styles.cardTop}>
              <span
                aria-hidden='true'
                className={styles.icon}
              >
                {skill.icon}
              </span>
              <span className={styles.badge}>{skill.level}</span>
            </div>
            <h3 className={styles.name}>{skill.name}</h3>
            <p className={styles.desc}>{skill.desc}</p>
            <div
              role='list'
              aria-label='Related technologies'
              className={styles.tags}
            >
              {skill.tags.map((tag) => (
                <span
                  key={tag}
                  role='listitem'
                  className={styles.tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
