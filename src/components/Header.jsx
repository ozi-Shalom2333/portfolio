import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
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
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
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
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav role="navigation" aria-label="Main navigation">
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
        <h1>My Portfolio</h1>
      </Link>
      <NavLinks>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          Home
        </Link>
        <a href="#about" style={{ color: 'white', textDecoration: 'none' }}>
          About
        </a>
        <a href="#projects" style={{ color: 'white', textDecoration: 'none' }}>
          Projects
        </a>
        <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>
          Contact
        </a>
      </NavLinks>
      <Hamburger
        onClick={() => setIsOpen(!isOpen)}
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