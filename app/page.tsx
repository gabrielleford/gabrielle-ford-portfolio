// import { About } from '@/components/About';
// import { Contact } from '@/components/Contact';
// import { DevTools } from '@/components/DevTools';
// import { Projects } from '@/components/Projects';
import { Nav } from '@/components/Nav';

export default function Home() {
  return (
    <div>
      <header>
        <a
          className='skipNavLink'
          href='#mainContent'
        >
          Skip to main content
        </a>
        <Nav />
      </header>

      {/* <main id='mainContent'>
        About
        <section>
          <About />
        </section>
        Projects
        <section>
          <Projects />
        </section>
        Dev Tools
        <section>
          <DevTools />
        </section>
        Contact
        <section>
          <Contact />
        </section>
      </main> */}

      {/* <footer></footer> */}
    </div>
  );
}
