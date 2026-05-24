import { ImageResponse } from 'next/og';

export const alt = 'Gabrielle Ford | IT Systems Integrator & Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const stack = [
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

const gradientText = {
  backgroundImage: 'linear-gradient(135deg, #c9a0d8, #f4b8c4, #90d0e0)',
  backgroundClip: 'text',
  color: 'transparent',
} as const;

async function getCormorantItalic(): Promise<ArrayBuffer> {
  const css = await fetch(
    'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300',
    { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }
  ).then((r) => r.text());

  const url = css.match(/src:\s*url\(([^)]+)\)/)?.[1];
  if (!url) throw new Error('Could not extract Cormorant Garamond font URL');

  return fetch(url).then((r) => r.arrayBuffer());
}

export default async function Image() {
  const cormorantItalic = await getCormorantItalic();

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: [
            'radial-gradient(ellipse 65% 60% at 15% 22%, rgba(244, 184, 196, 0.27) 0%, transparent 65%)',
            'radial-gradient(ellipse 80% 65% at 62% 28%, rgba(197, 184, 232, 0.24) 0%, transparent 65%)',
            'radial-gradient(ellipse 40% 70% at 98% 45%, rgba(176, 200, 240, 0.18) 0%, transparent 65%)',
            'radial-gradient(ellipse 45% 45% at 88% 85%, rgba(168, 216, 224, 0.16) 0%, transparent 60%)',
            'radial-gradient(ellipse 55% 45% at 8% 90%, rgba(210, 190, 235, 0.18) 0%, transparent 65%)',
            'radial-gradient(ellipse 90% 70% at 50% 50%, rgba(180, 160, 220, 0.07) 0%, transparent 75%)',
            '#11131a',
          ].join(', '),
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '64px 80px',
          position: 'relative',
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: 'linear-gradient(90deg, #7b3da8, #c03870, #1e86a0)',
          }}
        />

        {/* Eyebrow */}
        <p
          style={{
            fontSize: 15,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#b7aec9',
            margin: '0 0 20px 0',
          }}
        >
          IT Systems Integrator & Full-Stack Developer
        </p>

        {/* Name */}
        <h1
          style={{
            fontSize: 80,
            fontWeight: 300,
            lineHeight: 1.05,
            margin: '0 0 16px 0',
            color: '#f2edf7',
            letterSpacing: '-0.02em',
          }}
        >
          Gabrielle Ford
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontSize: 28,
            fontWeight: 300,
            fontStyle: 'italic',
            fontFamily: 'Cormorant Garamond',
            margin: '0 0 48px 0',
            lineHeight: 1.4,
            display: 'flex',
          }}
        >
          <span style={{ color: '#b7aec9' }}>Building systems that&nbsp;</span>
          <span style={gradientText}>connect</span>
          <span style={{ color: '#b7aec9' }}>&nbsp;and&nbsp;</span>
          <span style={gradientText}>ship.</span>
        </p>

        {/* Stack pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {stack.map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: 13,
                padding: '5px 14px',
                background: 'rgba(115,199,212,0.1)',
                border: '1px solid rgba(115,199,212,0.25)',
                color: '#9edee8',
                borderRadius: 20,
                letterSpacing: '0.05em',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* URL */}
        <p
          style={{
            position: 'absolute',
            bottom: 40,
            right: 80,
            fontSize: 14,
            color: 'rgba(183,174,201,0.5)',
            margin: 0,
            letterSpacing: '0.08em',
          }}
        >
          gabrielleford.dev
        </p>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Cormorant Garamond',
          data: cormorantItalic,
          style: 'italic',
          weight: 300,
        },
      ],
    }
  );
}
