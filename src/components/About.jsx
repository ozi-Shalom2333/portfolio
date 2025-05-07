import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: ${({ theme }) => theme.colors.background}; // Light grey
  color: ${({ theme }) => theme.colors.textDark}; // Dark text
  max-width: 800px;
  margin: 0 auto;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); // Subtle shadow
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  a {
    color: ${({ theme }) => theme.colors.accent}; // Muted grey-blue
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary}; // Dark grey on hover
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const ContentWrapper = styled(motion.div)`
  background: white; // White for card-like effect
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); // Subtle shadow
  border: 1px solid ${({ theme }) => theme.colors.secondary}; // Dark grey border
`;

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <AboutSection id="about" ref={ref} role="region" aria-label="About section">
      <ContentWrapper
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2>About Me</h2>
        <p>
        I'm a passionate frontend developer based in Lagos, Nigeria, with a growing foundation in HTML, CSS, and JavaScript. A recent graduate of The Curve Africa’s intensive frontend training program, I’ve built and deployed real-world projects that focus on responsiveness, clean UI, and functional design.
        </p>
        <p>
        My journey into tech has been fueled by curiosity, grit, and a desire to solve real problems through code. From building platforms like Artisan Aid—which connects skilled artisans to people in need of their services—to cloning modern landing pages for practice, I’m consistently leveling up my skills and understanding of frontend development.
        </p>
        <p>
        Currently, I’m deepening my knowledge of React.js, responsive web design principles, and UI/UX design using Figma. I love creating intuitive user experiences, and I’m always eager to learn new tools and frameworks that make the web faster and more beautiful.

When I’m not coding, I’m either watching tech videos, sketching UI ideas, studying design systems, or figuring out new ways to use AI to boost creativity and productivity.
        </p>
      </ContentWrapper>
    </AboutSection>
  );
}

export default About;