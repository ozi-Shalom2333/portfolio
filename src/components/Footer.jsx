import styled from 'styled-components';

const FooterSection = styled.footer`
  padding: 1rem;
  text-align: center;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
`;

function Footer() {
  return (
    <FooterSection>
      <p>&copy; {new Date().getFullYear()} Ozioma. All rights reserved.</p>
      <div>
        <a href="https://www.linkedin.com/in/ozioma-okafor-111006329/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        {' | '}
        <a href="https://github.com/ozi-Shalom2333" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </FooterSection>
  );
}

export default Footer;