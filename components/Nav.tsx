// import {
//   Playfair_Display,
//   Raleway,
//   Source_Code_Pro,
// } from 'next/font/google';

// const playfairDisplay = Playfair_Display({
//   subsets: ['latin'],
//   variable: '--font-playfair-display',
// });

// const raleway = Raleway({
//   subsets: ['latin'],
//   variable: '--font-raleway',
// });

// const sourceCodePro = Source_Code_Pro({
//   subsets: ['latin'],
//   variable: '--font-source-code-pro',
// });

export const Nav = () => {
  return (
    <nav>
      <h1>Gabrielle Ford</h1>
      <p>Full Stack Web Developer</p>
      {/* Desktop Navigation */}
      {/* <ul>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#projects'>Projects</a>
        </li>
        <li>
          <a href='#devtools'>DevTools</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul> */}

      {/* Mobile Navigation */}
      <ul>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#projects'>Projects</a>
        </li>
        <li>
          <a href='#devtools'>DevTools</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </nav>
  );
};
