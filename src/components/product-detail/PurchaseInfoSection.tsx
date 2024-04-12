import { ImageContainer, LayoutDiv, Section, SectionTitle } from 'components/StyledComponents'
import styled from 'styled-components'
import { Product } from 'types';

const PurchaseInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    & > div {
      width: 49%;
    }
    @media screen and (max-width:600px) {
      flex-direction: column;
      & > div {
        width: 100%;
      }
    }
`
const ThumbmailContainer = styled(ImageContainer)`
    min-height: 300px;
    max-height: 500px;
`

const InfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const ProductTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  /* margin-bottom: 5px; */
`

const ProductBrand = styled.span`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 20px;
`

const ProductDescription = styled.span`
  font-size: 1.2rem;
  color: #000;
`

const ProductPrice = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: end;
  & > div > span { // 원가
    color: #AAA;
    font-size: 2rem;
    text-decoration: line-through;
    margin-right: 10px;
  }
  & > div > b { // 할인율
    font-size: 2rem;
    color: orangered;
    font-weight: 600;
  }
  & > span { // 할인 적용가
    color: #000;
    font-weight: 600;
    font-size: 2.5rem;
  }
`

const PurchaseInfoSection = ({ product }: { product: Product }) => {
  return (
    <Section>
      <LayoutDiv $maxWidth="1000px">
        <SectionTitle $bottomLine>상품 구매 정보</SectionTitle>
        <PurchaseInfoContainer>

          {/* 썸네일 이미지 (좌측) */}
          <ThumbmailContainer>
            <img src={product?.thumbnail} alt="s" />
          </ThumbmailContainer>

          {/* 상품 정보 텍스트 영역 (우측) */}
          <InfoTextContainer>
            <ProductTitle>{product?.title}</ProductTitle>
            <ProductBrand>{product?.brand}</ProductBrand>
            <ProductDescription>{product?.description}</ProductDescription>
            <ProductPrice>
              <div>
                <span>${product?.price?.toLocaleString()}</span>
                <b>{Math.round(product?.discountPercentage)}% DC</b>
              </div>
              <span>${Math.round(product?.price * (100 - product?.discountPercentage) / 100)?.toLocaleString()}</span>
            </ProductPrice>
          </InfoTextContainer>

        </PurchaseInfoContainer>
      </LayoutDiv>
    </Section>
  )
}

export default PurchaseInfoSection