import { Helmet } from 'react-helmet';
import { lazy, Suspense } from 'react';
import Hero from '../components/Hero';


const About = lazy(() => import('../components/About'));
const Projects = lazy(() => import('../components/Projects'));
const Skills = lazy(() => import('../components/Skills'));
const Contact = lazy(() => import('../components/Contact'));

function Home() {
  return (
    <>
      <Helmet>
        <title>Home - Ozioma Portfolio</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Ozioma. Explore my projects, skills, and get in touch."
        />
      </Helmet>
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </Suspense>
    </>
  );
}

export default Home;