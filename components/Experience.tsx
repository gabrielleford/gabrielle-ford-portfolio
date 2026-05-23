import styles from './Experience.module.css';

/*
  Experience
*/

interface Role {
  date: string;
  title: string;
  company: string;
  bullets: string[];
}

const EXPERIENCE: Role[] = [
  {
    date: 'March 2025 – Present',
    title: 'IT Systems Integrator',
    company: 'Hensley Legal Group, PC · Fishers, IN',
    bullets: [
      'Built 44 Zapier automations, streamlining nearly 40,000 monthly tasks',
      'Developed 23 Power Automate workflows to improve efficiency and data integration',
      'Designed data dashboards in DOMO using SQL and ETL tools to highlight firm performance',
      'Integrated data from 7 lead generation services into Lead Docket',
      'Set up Raspberry Pi displays for real-time dashboard viewing across the office',
      'Connected Filevine reports to an S3 Bucket for DOMO integration',
      'Created an email-to-ticket automation for seamless Atera support logging',
    ],
  },
  {
    date: 'May 2023 – March 2025',
    title: 'IT Support Specialist',
    company: 'Hensley Legal Group, PC · Fishers, IN',
    bullets: [
      'Responded to support tickets within 15 minutes to ensure fast issue resolution',
      'Redesigned technical training materials and created a searchable FAQ for self-service support',
      'Streamlined IT onboarding, reducing training time by 2.5 hours per employee',
      'Implemented a digital literacy assessment to customize IT training for new hires',
      'Helped launch online invoice payments, replacing manual phone-based payments',
    ],
  },
  {
    date: 'February 2022 – Present',
    title: 'Freelance Web Developer',
    company: 'Bliss Event Space · Fishers, IN',
    bullets: [
      'Designed wireframes and built the full client site in under 6 weeks',
      'Advised client on UX, UI design, and digital marketing strategy',
      'Deployed to Heroku with a custom domain; providing ongoing maintenance and updates',
    ],
  },
  {
    date: '2022',
    title: 'Web Development Immersive',
    company: 'Eleven Fifty Academy',
    bullets: [
      'Completed an intensive full-stack program covering JavaScript, React, Node.js, and PostgreSQL',
    ],
  },
];

export default function Experience() {
  return (
    <section
      id='experience'
      aria-labelledby='experience-heading'
      className={styles.section}
    >
      <p className='section-eyebrow'>Where I&apos;ve been</p>
      <h2
        id='experience-heading'
        className='section-title'
      >
        Experience
      </h2>

      <div
        className={styles.timeline}
        role='list'
      >
        {EXPERIENCE.map((role) => (
          <article
            key={role.title + role.date}
            role='listitem'
            className={styles.item}
          >
            <p className={styles.date}>{role.date}</p>
            <h3 className={styles.role}>{role.title}</h3>
            <p className={styles.company}>{role.company}</p>
            <ul
              aria-label='Key accomplishments'
              className={styles.bullets}
            >
              {role.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className={styles.bullet}
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
