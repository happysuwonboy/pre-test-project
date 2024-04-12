import { Section, LayoutDiv, SectionTitle, ImageContainer } from 'components/StyledComponents'
import styled from 'styled-components'

const ImageListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    gap: 20px;
    & > div {
      width: 80%;
    }
`

const ProductImageSection = ({ imagesArray }: { imagesArray: string[] }) => {
  return (
    <Section>
      <LayoutDiv $maxWidth="1000px">
        <SectionTitle $bottomLine>상품 사진</SectionTitle>
        <ImageListContainer>
          {imagesArray?.map((src, index) =>
            <ImageContainer $border key={index}>
              <img src={src} alt="상품 사진" />
            </ImageContainer>
          )}
        </ImageListContainer>
      </LayoutDiv>
    </Section>
  )
}

export default ProductImageSection