import styled from 'styled-components';

// 공통적으로 사용할 수 있는 Styled Components

interface SectionProps {
  $bgColor?: string;
}

interface LayoutDivProps {
  $maxWidth?: string;
}

interface SectionTitleProps {
  $bottomLine?: boolean;
}

interface MarginYProps {
  $mg?: string;
}

interface ImageContainerProps {
  $border?: boolean;
}

export const Section = styled.section<SectionProps>`
  background-color: ${(props) => props.$bgColor || '#FFF'};
`;

export const SectionTitle = styled.h2<SectionTitleProps>`
  text-align: center;
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-bottom: ${(props) => (props.$bottomLine ? '1rem' : 0)};
  border-bottom: ${(props) => (props.$bottomLine ? '1px dotted #AAA' : 'none')};
`;

export const LayoutDiv = styled.section<LayoutDivProps>`
  padding: 1rem;
  margin: 0 auto;
  max-width: ${(props) => props.$maxWidth || 'none'};
`;

export const CommonButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    background: #000;
    color: #fff;
  }
`;

export const MarginY = styled.div<MarginYProps>`
  margin: ${(props) => (props.$mg ? props.$mg + ' 0' : '1rem 0')};
`;

export const ImageContainer = styled.div<ImageContainerProps>`
  overflow: hidden;
  border-radius : 10px;
  border: ${(props) => props.$border ? '1px solid #CCC' : 'none'};
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
