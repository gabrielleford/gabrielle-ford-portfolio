import styles from './Hero.module.css';
import { ArrowDown } from 'lucide-react';

const stats = [
  { num: '44', label: 'Zapier Automations' },
  { num: '23', label: 'Power Automate Flows' },
  { num: '40K', label: 'Monthly Tasks Streamlined' },
  { num: '3+', label: 'Years Experience' },
];

const coreStack = [
  'Domo',
  'Power Automate',
  'Zapier',
  'JavaScript',
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'AWS',
];

export default function Hero() {
  return (
    <section
      id='hero'
      aria-labelledby='hero-heading'
      className={styles.hero}
    >
      {/* Left: text content */}
      <div>
        <p className={`${styles.eyebrow} animate-fade-up delay-100`}>
          IT Systems Integrator &amp; Full-Stack Developer
        </p>

        <h1
          id='hero-heading'
          className={`${styles.heading} animate-fade-up delay-250`}
        >
          Building systems that <em className='gradient-text'>connect</em> and{' '}
          <em className='gradient-text'>ship.</em>
        </h1>

        <p className={`${styles.desc} animate-fade-up delay-400`}>
          Enthusiastic, resourceful IT professional based in Fishers, IN. I
          automate workflows, integrate enterprise systems, and build full-stack
          web apps - bringing precision to every layer of the stack.
        </p>

        <div className={`${styles.ctas} animate-fade-up delay-550`}>
          <a
            href='#projects'
            className={styles.btnPrimary}
          >
            View Projects <ArrowDown size={16} />
          </a>
          <a
            href='#contact'
            className={styles.btnOutline}
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Right: floating glass stats card */}
      <div
        className={`${styles.card} animate-fade-in delay-700`}
        aria-hidden='true'
      >
        <div className={styles.statsGrid}>
          {stats.map(({ num, label }) => (
            <div
              key={label}
              className={styles.statItem}
            >
              <div className={styles.statNum}>{num}</div>
              <div className={styles.statLabel}>{label}</div>
            </div>
          ))}
        </div>

        <p className={styles.stackLabel}>Core Stack</p>
        <div className={styles.stackTags}>
          {coreStack.map((tech) => (
            <span
              key={tech}
              className={styles.tag}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
