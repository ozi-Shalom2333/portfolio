// Hero.jsx
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled Hero Section
const HeroSection = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.text};
  background: url('/assets/profile.png') center/cover no-repeat;
  overflow: hidden;

  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.primary + 'cc'},  
      ${({ theme }) => theme.colors.secondary + 'cc'}
    );
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  p {
    font-size: 1.5rem;
    margin: 1rem 0;
  }

  @media (max-width: 768px) {
    height: 80vh;
    padding: 1rem;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

// Styled Button
const Button = styled(motion.a)`
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  transition: background 0.3s ease, transform 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

// Main Hero Component
function Hero() {
  return (
    <HeroSection role="banner" aria-label="Hero section">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Ozioma
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A Passionate Frontend Developer
      </motion.p>
      <Button
        href="#projects"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="View my projects"
      >
        View My Work
      </Button>
    </HeroSection>
  );
}

export default Hero;
