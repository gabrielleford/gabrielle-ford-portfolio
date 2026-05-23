'use client';

import { ExternalLink, Send } from 'lucide-react';
import { useState, useRef } from 'react';
import styles from './Contact.module.css';

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
      className={styles.section}
    >
      <p className='section-eyebrow'>Let&apos;s talk</p>
      <h2
        id='contact-heading'
        className='section-title'
      >
        Open to opportunities &amp; collaboration.
      </h2>

      <div className={styles.grid}>
        {/* Left: contact links */}
        <div>
          <p className={styles.intro}>
            I&apos;m always interested in integration and full-stack roles,
            freelance projects, or just connecting with other builders. Reach
            out and I&apos;ll get back to you.
          </p>

          <nav
            aria-label='Contact links'
            className={styles.linkList}
          >
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.ariaLabel}
                target='_blank'
                rel='noopener noreferrer'
                className={styles.linkItem}
              >
                <span className={styles.linkLabel}>{link.label}</span>
                <span className={styles.linkText}>
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
          className={styles.form}
        >
          {/* Name */}
          <div>
            <label
              htmlFor='cf-name'
              className={styles.label}
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
              className={styles.input}
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor='cf-email'
              className={styles.label}
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
              className={styles.input}
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor='cf-message'
              className={styles.label}
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
              className={styles.textarea}
            />
          </div>

          {/* Status message — announced to screen readers via aria-live */}
          <p
            ref={statusRef}
            role='status'
            aria-live='polite'
            className={`${styles.status} ${status?.ok ? styles.statusOk : styles.statusErr}`}
          >
            {status && status.text}
          </p>

          <button
            type='submit'
            className={styles.sendBtn}
          >
            Send Message <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}
