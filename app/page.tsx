import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <header>
        <a
          className='skip-link'
          href='#main'
        >
          Skip to main content
        </a>
        <Nav />
      </header>

      <main id='main'>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
