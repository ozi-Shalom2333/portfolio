import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../styles/Theme';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10;
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  padding: 1rem;
  z-index: 9;
  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    padding: 1.5rem 0;
    font-size: 1.2rem;
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav role="navigation" aria-label="Main navigation">
      <Link to="/" style={{ color: theme.colors.text, textDecoration: 'none' }}>
        <h1>My Portfolio</h1>
      </Link>
      <NavLinks>
        <Link to="/" style={{ color: theme.colors.text, textDecoration: 'none' }}>
          Home
        </Link>
        <a href="#about" style={{ color: theme.colors.text, textDecoration: 'none' }}>
          About
        </a>
        <a href="#projects" style={{ color: theme.colors.text, textDecoration: 'none' }}>
          Projects
        </a>
        <a href="#contact" style={{ color: theme.colors.text, textDecoration: 'none' }}>
          Contact
        </a>
      </NavLinks>
      <Hamburger
        onClick={() => {
          console.log('Hamburger clicked, isOpen:', !isOpen);
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
        aria-label="Toggle menu"
      >
        ☰
      </Hamburger>
      <MobileMenu isOpen={isOpen} role="menu">
        <Link to="/" onClick={() => setIsOpen(false)} role="menuitem">
          Home
        </Link>
        <a href="#about" onClick={() => setIsOpen(false)} role="menuitem">
          About
        </a>
        <a href="#projects" onClick={() => setIsOpen(false)} role="menuitem">
          Projects
        </a>
        <a href="#contact" onClick={() => setIsOpen(false)} role="menuitem">
          Contact
        </a>
      </MobileMenu>
    </Nav>
  );
}

export default Header;