import {
  LayoutDiv,
  CommonButton,
} from 'components/StyledComponents';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import useFetchProduct from '../hooks/useFetchProduct';
import { MarginY } from '../components/StyledComponents';
import PurchaseInfoSection from './../components/product-detail/PurchaseInfoSection';
import ProductImageSection from 'components/product-detail/ProductImageSection';

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

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = useFetchProduct(id);

  return (
    <div>
      <LayoutDiv $maxWidth="1000px">
        <BackButton onClick={() => navigate('/')}>
          <span>&lt;</span>목록으로 돌아가기
        </BackButton>
      </LayoutDiv>

      {/* 상품 구매 정보 섹션 */}
      <PurchaseInfoSection product={product} />

      <MarginY $mg='2rem' />

      {/* 상품 사진 섹션 */}
      <ProductImageSection imagesArray={product?.images} />

    </div>
  );
};

export default ProductDetail;
