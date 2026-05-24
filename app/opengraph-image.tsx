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

async function fetchFont(googleFontsCss: string): Promise<ArrayBuffer> {
  const css = await fetch(googleFontsCss, {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
  }).then((r) => r.text());

  const url = css.match(/src:\s*url\(([^)]+)\)/)?.[1];
  if (!url) throw new Error(`Could not extract font URL from: ${googleFontsCss}`);

  return fetch(url).then((r) => r.arrayBuffer());
}

export default async function Image() {
  const [cormorantRegular, cormorantItalic, dmSans] = await Promise.all([
    fetchFont('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300'),
    fetchFont('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300'),
    fetchFont('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300'),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: [
            'radial-gradient(ellipse 65% 60% at 15% 22%, rgba(244, 184, 196, 0.50) 0%, transparent 65%)',
            'radial-gradient(ellipse 80% 65% at 62% 28%, rgba(197, 184, 232, 0.44) 0%, transparent 65%)',
            'radial-gradient(ellipse 40% 70% at 98% 45%, rgba(176, 200, 240, 0.34) 0%, transparent 65%)',
            'radial-gradient(ellipse 45% 45% at 88% 85%, rgba(168, 216, 224, 0.30) 0%, transparent 60%)',
            'radial-gradient(ellipse 55% 45% at 8% 90%, rgba(210, 190, 235, 0.34) 0%, transparent 65%)',
            'radial-gradient(ellipse 90% 70% at 50% 50%, rgba(180, 160, 220, 0.16) 0%, transparent 75%)',
            '#161922',
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
            fontSize: 23,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#ccc4dd',
            margin: '0 0 24px 0',
            fontFamily: 'DM Sans',
          }}
        >
          IT Systems Integrator & Full-Stack Developer
        </p>

        {/* Name */}
        <h1
          style={{
            fontSize: 122,
            fontWeight: 300,
            lineHeight: 1.05,
            margin: '0 0 20px 0',
            color: '#f2edf7',
            letterSpacing: '-0.02em',
            fontFamily: 'DM Sans',
          }}
        >
          Gabrielle Ford
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontSize: 48,
            fontWeight: 300,
            fontStyle: 'normal',
            fontFamily: 'Cormorant Garamond',
            margin: '0 0 52px 0',
            lineHeight: 1.4,
            display: 'flex',
          }}
        >
          <span style={{ color: '#ccc4dd' }}>Building systems that&nbsp;</span>
          <span style={{ ...gradientText, fontStyle: 'italic' }}>connect</span>
          <span style={{ color: '#ccc4dd' }}>&nbsp;and&nbsp;</span>
          <span style={{ ...gradientText, fontStyle: 'italic' }}>ship.</span>
        </p>

        {/* Stack pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {stack.map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: 18,
                padding: '6px 16px',
                background: 'rgba(115,199,212,0.15)',
                border: '1px solid rgba(115,199,212,0.35)',
                color: '#b8eaf0',
                borderRadius: 20,
                letterSpacing: '0.05em',
                fontFamily: 'DM Sans',
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
            fontSize: 20,
            color: 'rgba(200,192,218,0.7)',
            margin: 0,
            letterSpacing: '0.08em',
            fontFamily: 'DM Sans',
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
          name: 'DM Sans',
          data: dmSans,
          style: 'normal',
          weight: 300,
        },
        {
          name: 'Cormorant Garamond',
          data: cormorantRegular,
          style: 'normal',
          weight: 300,
        },
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
