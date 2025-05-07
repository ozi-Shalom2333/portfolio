import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import projects from '../data/projects';

const ProjectsSection = styled.section`
  padding: 4rem 1rem;
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

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: white; // White for card contrast
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); // Subtle shadow
  border: 1px solid ${({ theme }) => theme.colors.secondary}; // Dark grey border
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px); // Lift effect on hover
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled(LazyLoadImage)`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (max-width: 600px) {
    height: 150px;
  }
`;

const ProjectInfo = styled.div`
  padding: 1rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textDark}; // Dark text

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.5;
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

  @media (max-width: 600px) {
    padding: 0.75rem;
    font-size: 0.85rem;

    h3 {
      font-size: 1.1rem;
    }
  }
`;

function Projects() {
  return (
    <ProjectsSection id="projects" role="region" aria-label="Projects section">
      <h2>My Projects</h2>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectImage
              src={project.image}
              alt={project.title}
              effect="blur"
              height="200px"
              width="100%"
            />
            <ProjectInfo>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                {' | '}
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
              <Link to={`/project/${project.id}`} aria-label={`View details for ${project.title}`}>
                View Details
              </Link>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
}

export default Projects;