import useFetchProducts from '../hooks/useFetchProducts';
import useSearchStore from 'store/store';
import SearchSection from '../components/home/SearchSection';
import ProductListSection from '../components/home/ProductListSection';
import { Product } from '../types/index';
import { useState, useEffect } from 'react';
import { MarginY } from './../components/StyledComponents';

const Home = () => {
  const { searchQuery, showMoreCount, scrollTop } = useSearchStore();
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([] as Product[]);
  const products = useFetchProducts(searchQuery); // searchQuery를 의존성 배열로 받고 있기 때문에 검색 시 produts를 새로 가져옴

  useEffect(() => {
    const copy = products.map((obj) => ({ ...obj }));
    setDisplayedProducts(copy.slice(0, 10 * (showMoreCount + 1)));
  }, [products, showMoreCount]);

  // 이전 showMore 상태를 반영하여 렌더링 한 뒤에 scroll 이동
  useEffect(() => {
    window.scrollTo({ top: scrollTop });
  }, [displayedProducts]);

  return (
    <div>
      {/* 상품 검색 섹션 */}
      <SearchSection searchResultCount={products.length} />

      <MarginY $mg='1rem' />

      {/* 상품 목록 섹션 */}
      <ProductListSection
        displayedProducts={displayedProducts}
        isAllDisplayed={products.length === displayedProducts.length}
      />
    </div>
  );
};

export default Home;
