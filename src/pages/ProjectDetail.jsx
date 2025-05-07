import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import projects from '../data/projects';

const DetailSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <DetailSection>Project not found</DetailSection>;
  }

  return (
    <DetailSection>
      <Helmet>
        <title>{project.title} - [Your Name] Portfolio</title>
        <meta name="description" content={project.description} />
      </Helmet>
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} style={{ maxWidth: '100%', height: 'auto' }} />
      <p>{project.description}</p>
      <p><strong>Tech Stack:</strong> {project.tech.join(', ')}</p>
      <div>
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
        {' | '}
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </DetailSection>
  );
}

export default ProjectDetail;