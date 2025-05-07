import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  color: black;
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const Skill = styled(motion.div)`
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 5px;
`;

const skills = [
  'React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Styled-Components',
  'Node.js', 'Git', 'Redux'
];

function Skills() {
  return (
    <SkillsSection id="skills">
      <h2>My Skills</h2>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <Skill
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            {skill}
          </Skill>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
}

export default Skills;