import styled from 'styled-components';


// common 

interface SectionProps {
  $bgColor?: string;
}

interface LayoutDivProps {
  $maxWidth?: string;
}

export const Section = styled.section<SectionProps>`
  background-color: ${(props) => props.$bgColor || '#FFF'};
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const LayoutDiv = styled.section<LayoutDivProps>`
  padding: 1rem;
  margin: 0 auto;
  max-width: ${(props) => props.$maxWidth || 'none'};
`;
