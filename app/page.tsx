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

      <main id='mainContent'>
        {/* About */}
        <section>About</section>
        {/* Projects */}
        <section>Projects</section>
        {/* Dev Tools */}
        <section>Dev Tools</section>
        {/* Contact */}
        <section>Contact</section>
      </main>

      <footer></footer>
    </div>
  );
}
