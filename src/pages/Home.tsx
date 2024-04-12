import useFetchProducts from '../hooks/useFetchProducts';
import useSearchStore from 'store/store';
import SearchSection from '../components/home/SearchSection';
import ProductListSection from '../components/home/ProductListSection';
import { Product } from '../types/index';
import { useState, useEffect } from 'react';

const Home = () => {

  const { searchQuery, showMoreCount, scrollTop } = useSearchStore();
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([] as Product[]);
  const products = useFetchProducts(searchQuery);

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
      {/* 상품 목록 섹션 */}
      <ProductListSection 
        displayedProducts={displayedProducts} 
        isAllDisplayed={products.length === displayedProducts.length}
      />
    </div>
  );
};

export default Home;
