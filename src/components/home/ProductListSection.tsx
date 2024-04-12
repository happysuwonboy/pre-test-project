import React from 'react';
import styled from 'styled-components';
import { Section, LayoutDiv } from 'components/StyledComponents';
import ProductCard from './ProductCard';
import useSearchStore from 'store/store';
import { Product } from '../../types/index';

const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 15px;
`;

const EmptyListContainer = styled.div`
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #888;
`

const ShowMoreButton = styled.button`
  width: 100%;
  margin: 3rem 0;
  padding: 1rem;
  background: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    background: #000;
    color: #fff;
  }
`;

interface ProductListSectionProps {
  displayedProducts : Product[];
  isAllDisplayed : boolean;
}

const ProductListSection : React.FC<ProductListSectionProps> = ({ displayedProducts, isAllDisplayed}) => {

  const { showMoreCount, setShowMoreCount, setScrollTop } = useSearchStore();

  const handleClickMoreBtn = () => {
    setShowMoreCount(showMoreCount + 1);
    setScrollTop(window.scrollY); // showMore 클릭으로 displayedProducts 업데이트 시 scroll 이동이 일어나기 때문에, 현재 위치를 갱신하여 이상한 동작을 방지
  };

  return (
    <Section>
      <LayoutDiv $maxWidth="800px">
        {displayedProducts.length ? (
          <ProductListContainer>
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          </ProductListContainer>
        ) : <EmptyListContainer>검색 결과에 해당하는 상품이 존재하지 않습니다.</EmptyListContainer>}

        {!isAllDisplayed ? (
          <ShowMoreButton onClick={handleClickMoreBtn}>더보기</ShowMoreButton>
        ) : null}
      </LayoutDiv>
    </Section>
  );
};

export default ProductListSection;