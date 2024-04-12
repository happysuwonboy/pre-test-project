import {
  LayoutDiv,
  Section,
  CommonButton,
  SectionTitle,
} from 'components/StyledComponents';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import useFetchProduct from '../hooks/useFetchProduct';
import { VerticalMargin, ImageContainer } from '../components/StyledComponents';

const BackButton = styled(CommonButton)`
  width: auto;
  font-size: 1rem;
  border-radius: 10rem;
  padding: 0.5rem 1rem;
  & span {
    margin-right: 10px;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    border-radius: 0;
  }
`;

const PurchaseContainer = styled.div`
    display: flex;
    justify-content: space-between;
    & > div {
      width: 46%;
    }
`
const ThumbmailContainer = styled(ImageContainer)`
    min-height: 300px;
    max-height: 500px;
`

const PurchaseInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`


const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = useFetchProduct(id);

  return (
    <div>
      <Section>
        <LayoutDiv $maxWidth="1000px">
          <BackButton onClick={() => navigate('/')}>
            <span>&lt;</span>목록으로 돌아가기
          </BackButton>
        </LayoutDiv>
      </Section>

      <Section>
        <LayoutDiv $maxWidth="1000px">
          <SectionTitle $bottomLine>상품 구매</SectionTitle>
          <PurchaseContainer>
            <ThumbmailContainer>
              <img src={product?.thumbnail} alt="s" />
            </ThumbmailContainer>
            <PurchaseInfoContainer>
              <h3>{product?.title}</h3>
              <span>{product?.brand}</span>
              <span>{product?.description}</span>
              <span>${product?.price}</span>
            </PurchaseInfoContainer>
          </PurchaseContainer>
        </LayoutDiv>
      </Section>

      <VerticalMargin $mg='2rem' />

      <Section>
        <LayoutDiv $maxWidth="1000px">
          <SectionTitle $bottomLine>상품 사진</SectionTitle>
          
        </LayoutDiv>
      </Section>
    </div>
  );
};

export default ProductDetail;
