'use client';

import { ExternalLink, FileDown, Send } from 'lucide-react';
import { useState, useRef } from 'react';

const formspreeID = 'myylvdwp';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const contactLinks = [
  {
    label: 'Resume',
    text: 'View resume PDF',
    icon: <ExternalLink size={16} />,
    href: '/Gabrielle Ford Resume.pdf',
    // download: true,
    ariaLabel: "Gabrielle Ford's resume PDF (opens in new tab)",
  },
  {
    label: 'GitHub',
    text: 'github.com/gabrielleford',
    icon: <ExternalLink size={16} />,
    href: 'https://github.com/gabrielleford',
    ariaLabel: 'Gabrielle Ford GitHub profile (opens in new tab)',
  },
  {
    label: 'LinkedIn',
    text: 'linkedin.com/in/fdgabrielle',
    icon: <ExternalLink size={16} />,
    href: 'https://linkedin.com/in/fdgabrielle',
    ariaLabel: 'Gabrielle Ford LinkedIn profile (opens in new tab)',
  },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<{ text: string; ok: boolean } | null>(
    null,
  );
  const statusRef = useRef<HTMLParagraphElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    // Client-side validation before hitting the network
    if (!form.name || !form.email || !form.message) {
      setStatus({
        text: 'Please fill in all fields before sending.',
        ok: false,
      });
      return;
    }

    setStatus({ text: 'Sending…', ok: true });

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (res.ok) {
        // Success — clear the form and show confirmation
        setStatus({ text: "Thanks! I'll be in touch soon. ✨", ok: true });
        setForm({ name: '', email: '', message: '' });
      } else {
        // Formspree returned an error (e.g. form not found, quota exceeded)
        const data = await res.json().catch(() => ({}));
        const msg =
          (data as { error?: string }).error ??
          'Something went wrong. Try emailing me directly.';
        setStatus({ text: msg, ok: false });
      }
    } catch {
      // Network failure
      setStatus({
        text: 'Network error. Please check your connection and try again.',
        ok: false,
      });
    }
  };

  return (
    <section
      id='contact'
      aria-labelledby='contact-heading'
      style={{ padding: '5rem 2.5rem' }}
    >
      <p style={eyebrow}>Let&apos;s talk</p>
      <h2
        id='contact-heading'
        style={sectionTitle}
      >
        Open to opportunities &amp; collaboration.
      </h2>

      <div className='contact-grid'>
        {/* Left: contact links */}
        <div>
          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--text-muted)',
              lineHeight: 1.85,
              maxWidth: '400px',
              marginBottom: '0.5rem',
            }}
          >
            I&apos;m always interested in full-stack roles, freelance projects,
            or just connecting with other builders. Reach out and I&apos;ll get
            back to you.
          </p>

          <nav
            aria-label='Contact links'
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.ariaLabel}
                target='_blank'
                rel='noopener noreferrer'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'var(--text)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  padding: '0.85rem 0',
                  borderBottom: '1px solid var(--divider)',
                  transition: 'color 0.2s, padding-left 0.2s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    'var(--text-muted)';
                  (e.currentTarget as HTMLElement).style.paddingLeft =
                    '0.35rem';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--text)';
                  (e.currentTarget as HTMLElement).style.paddingLeft = '0';
                }}
              >
                <span
                  style={{
                    fontSize: '0.68rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    minWidth: '70px',
                  }}
                >
                  {link.label}
                </span>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                  }}
                >
                  {link.text}
                  {link.icon}
                </span>
              </a>
            ))}
          </nav>
        </div>

        {/* Right: glass form */}
        <form
          aria-label='Contact form'
          noValidate
          onSubmit={handleSubmit}
          style={{
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid var(--glass-border)',
            borderRadius: '20px',
            padding: '2rem',
            boxShadow: '0 8px 32px var(--glass-shadow)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {/* Name */}
          <div>
            <label
              htmlFor='cf-name'
              style={labelStyle}
            >
              Name
            </label>
            <input
              id='cf-name'
              name='name'
              type='text'
              value={form.name}
              onChange={handleChange}
              placeholder='Your name'
              autoComplete='name'
              required
              aria-required='true'
              style={inputStyle}
              onFocus={(e) => {
                (e.target as HTMLElement).style.borderColor = 'var(--primary)';
              }}
              onBlur={(e) => {
                (e.target as HTMLElement).style.borderColor =
                  'var(--glass-border)';
              }}
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor='cf-email'
              style={labelStyle}
            >
              Email
            </label>
            <input
              id='cf-email'
              name='email'
              type='email'
              value={form.email}
              onChange={handleChange}
              placeholder='your@email.com'
              autoComplete='email'
              required
              aria-required='true'
              style={inputStyle}
              onFocus={(e) => {
                (e.target as HTMLElement).style.borderColor = 'var(--primary)';
              }}
              onBlur={(e) => {
                (e.target as HTMLElement).style.borderColor =
                  'var(--glass-border)';
              }}
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor='cf-message'
              style={labelStyle}
            >
              Message
            </label>
            <textarea
              id='cf-message'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What are you working on?'
              required
              aria-required='true'
              rows={5}
              style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={(e) => {
                (e.target as HTMLElement).style.borderColor = 'var(--primary)';
              }}
              onBlur={(e) => {
                (e.target as HTMLElement).style.borderColor =
                  'var(--glass-border)';
              }}
            />
          </div>

          {/* Status message — announced to screen readers via aria-live */}
          <p
            ref={statusRef}
            role='status'
            aria-live='polite'
            style={{
              fontSize: '0.8rem',
              minHeight: '1.2em',
              color: status?.ok ? 'var(--accent)' : 'var(--secondary)',
            }}
          >
            {status?.text ?? ''}
          </p>

          <button
            type='submit'
            style={{
              display: 'flex',
              gap: '0.5rem',
              alignItems: 'center',
              background:
                'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
              color: '#4a3a5a',
              border: 'none',
              borderRadius: '30px',
              padding: '0.8rem 1.8rem',
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.8rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              alignSelf: 'flex-start',
              fontWeight: 500,
              transition: 'opacity 0.2s, transform 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = '0.85';
              (e.currentTarget as HTMLElement).style.transform =
                'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = '1';
              (e.currentTarget as HTMLElement).style.transform = 'none';
            }}
          >
            Send Message <Send size={16} />
          </button>
        </form>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; gap: 2.5rem; }
        }
        @media (max-width: 640px) {
          #contact { padding: 3.5rem 1.25rem; }
        }
      `}</style>
    </section>
  );
}

const eyebrow: React.CSSProperties = {
  fontSize: '0.72rem',
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
  marginBottom: '0.5rem',
};

const sectionTitle: React.CSSProperties = {
  fontFamily: 'var(--font-cormorant)',
  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
  fontWeight: 300,
  letterSpacing: '-0.01em',
  color: 'var(--text)',
  marginBottom: '3rem',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.72rem',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
  marginBottom: '0.3rem',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(255,255,255,0.35)',
  border: '1px solid var(--glass-border)',
  borderRadius: '10px',
  padding: '0.7rem 1rem',
  fontFamily: 'var(--font-dm-sans)',
  fontSize: '0.875rem',
  color: 'var(--text)',
  outline: 'none',
  transition: 'border-color 0.2s',
};
