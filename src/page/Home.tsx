import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ProductCard from 'components/ProductCard';
import { Product } from 'types';
import useFetchProducts from '../hooks/useFetchProducts';
import useSearchStore from 'store/store';

interface SectionLayoutProps {
  $maxWidth?: string;
}

const Section = styled.section<SectionLayoutProps>`
  padding: 1rem;
  margin: 0 auto;
  max-width: ${(props) => props.$maxWidth || 'none'};
`;

const SearchForm = styled.form`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  gap: 4px;
  height: 40px;

  & > input {
    flex: 1;
    padding: 0 1rem;
  }

  & > button {
    padding: 0 1rem;
  }
`;

const ProductListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px 15px;
`

const ShowMoreButton = styled.button`
    width: 100%;
    margin: 3rem 0;
    padding: 1rem;
    background: #FFF;
    font-size: 1.2rem;
    cursor: pointer;
    &:hover {
      background: #000;
      color: #FFF;
    }
`

const Home = () => {

  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([] as Product[])
  const { searchQuery, setSearchQuery, showMoreCount, setShowMoreCount, scrollTop, setScrollTop } = useSearchStore();
  const [inputText, setInputText] = useState<string>(searchQuery || '');

  const products = useFetchProducts(searchQuery);



  useEffect(() => {
    const copy = products.map(obj => ({ ...obj }))
    setDisplayedProducts(copy.slice(0, 10 * (showMoreCount + 1)))
  }, [products, showMoreCount])


  // 이전 showMore 상태를 반영하여 렌더링 한 뒤에 scroll 이동
  useEffect(() => {
    window.scrollTo({ top: scrollTop })
  }, [displayedProducts])

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (inputText) {
      setSearchQuery(inputText);
      setShowMoreCount(0);
    } else {
      alert('검색어를 한 글자 이상 입력해주세요.');
    }

  };

  const handleClickMoreBtn = () => {
    setShowMoreCount(showMoreCount + 1)
    setScrollTop(window.scrollY) // showMore 클릭으로 displayedProducts 업데이트 시 scroll 이동이 일어나기 때문에, 현재 위치를 갱신하여 이상한 동작을 방지
  }



  return (
    <main>
      {/* 상품 검색 섹션 */}
      <Section $maxWidth="800px">
        <SearchForm onSubmit={handleSubmit}>
          <input type="text" placeholder="상품 이름으로 검색해주세요" value={inputText} onChange={handleChange} />
          <button type="submit">검색</button>
        </SearchForm>
      </Section>

      {/* 상품 목록 섹션 */}
      <Section $maxWidth="800px">
        <ProductListContainer>
          {displayedProducts.map(product =>
            <ProductCard key={product.id} product={product} />
          )}
        </ProductListContainer>

        {
          products.length > displayedProducts.length
            ? <ShowMoreButton onClick={handleClickMoreBtn}>더보기</ShowMoreButton>
            : null
        }

      </Section>
    </main>
  );
};

export default Home;
