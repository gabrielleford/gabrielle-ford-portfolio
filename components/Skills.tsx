interface Skill {
  icon: string;
  level: string;
  name: string;
  desc: string;
  tags: string[];
}

const SkillsData: Skill[] = [
  {
    icon: '⚙️',
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
    icon: '🖥️',
    level: 'Professional',
    name: 'Full-Stack Development',
    desc: 'Building end-to-end web applications - from database design to responsive.',
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Express'],
  },
  {
    icon: '☁️',
    level: 'Professional',
    name: 'Cloud & DevOps',
    desc: 'Managing cloud infrastructure and CI/CD pipelines to keep services running reliably.',
    tags: ['Agile / Scrum', 'AWS', 'Firebase', 'Git', 'Heroku'],
  },
  {
    icon: '🗄️',
    level: 'Professional',
    name: 'Data & Databases',
    desc: 'Designing schemas, building dashboards, and wrangling data with SQL and ETL tooling.',
    tags: ['Domo', 'ETL', 'PostgreSQL', 'S3', 'Sequelize'],
  },
  {
    icon: '🎨',
    level: 'Professional',
    name: 'UI & Styling',
    desc: 'Crafting accessible, responsive interfaces with modern CSS frameworks and design systems.',
    tags: ['Bootstrap', 'HTML5 / CSS3', 'Styled-Components', 'Tailwind CSS'],
  },
  {
    icon: '🔐',
    level: 'Experienced',
    name: 'Auth & Security',
    desc: 'Implementing authentication flows and secure data handling in full-stack applications.',
    tags: ['Bcrypt', 'JWT', 'OAuth'],
  },
];

export const Skills = () => {
  return <div id='skills'>Skills</div>;
};
