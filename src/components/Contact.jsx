import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: ${({ theme }) => theme.colors.background}; // Light grey
  color: ${({ theme }) => theme.colors.textDark}; // Dark text

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); // Subtle shadow
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;

    h2 {
      font-size: 2rem;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 2rem auto;
  gap: 1rem;
  background: white; // White for form card
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); // Subtle shadow
  border: 1px solid ${({ theme }) => theme.colors.secondary}; // Dark grey border

  @media (max-width: 600px) {
    max-width: 100%;
    padding: 1rem;
  }
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary}; // Dark grey
  border-radius: 5px;
  background: white;
  color: ${({ theme }) => theme.colors.textDark}; // Dark text
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent}; // Muted grey-blue on focus
    box-shadow: 0 0 5px rgba(107, 114, 128, 0.3); // Subtle focus glow
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary}; // Dark grey
  border-radius: 5px;
  background: white;
  color: ${({ theme }) => theme.colors.textDark}; // Dark text
  font-size: 1rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent}; // Muted grey-blue on focus
    box-shadow: 0 0 5px rgba(107, 114, 128, 0.3); // Subtle focus glow
  }
`;

const Button = styled(motion.button)`
  padding: 0.75rem;
  background: ${({ theme }) => theme.colors.accent}; // Muted grey-blue
  color: ${({ theme }) => theme.colors.text}; // Light grey/white
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s ease, transform 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background: ${({ theme }) => theme.colors.secondary}; // Dark grey on hover
    transform: translateY(-2px); // Slight lift effect
  }

  &:active {
    transform: translateY(0);
  }
`;

const SocialLinks = styled.div`
  margin-top: 1.5rem;

  a {
    color: ${({ theme }) => theme.colors.accent}; // Muted grey-blue
    text-decoration: none;
    margin: 0 0.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary}; // Dark grey on hover
      text-decoration: underline;
    }
  }
`;

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_wixbt1q', // Your SERVICE_ID
        'template_gn0zt5g', // Your TEMPLATE_ID
        form.current,
        'o83y8yMpC3qQD8OjL' // Your PUBLIC_KEY
      )
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.error('EmailJS error:', error);
        }
      );
  };

  return (
    <ContactSection id="contact" role="region" aria-label="Contact section">
      <h2>Get in Touch</h2>
      <Form ref={form} onSubmit={sendEmail}>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          aria-label="Your name"
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          aria-label="Your email"
          required
        />
        <TextArea
          rows="5"
          name="message"
          placeholder="Message"
          aria-label="Your message"
          required
        />
        <Button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          aria-label="Send message"
        >
          Send Message
        </Button>
      </Form>
      <SocialLinks>
        <a href="https://www.linkedin.com/in/ozioma-okafor-111006329/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        {' | '}
        <a href="https://github.com/ozi-Shalom2333" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {' | '}
        <a href="okaozisol45@gmail.com">Email</a>
      </SocialLinks>
    </ContactSection>
  );
}

export default Contact;