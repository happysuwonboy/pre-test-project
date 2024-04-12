import { ImageContainer } from 'components/StyledComponents';
import { useNavigate } from 'react-router-dom';
import useSearchStore from 'store/store';
import styled from 'styled-components';
import { Product } from 'types';

const ThumbnailContainer = styled(ImageContainer)`
  height: 25vh;
`

const HeaderContainer = styled.h3`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    padding: 0.5rem 0.2rem;
    transition: background .3s;
    & > div {
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2; 
      -webkit-box-orient: vertical;
    }
    & span {
        font-size: 1.5rem;
        word-break: break-all;
        @media screen and (max-width: 750px) {
          font-size: 1rem;
        }
    }
    & small {
        font-size: 1rem;
        color: #333;
        @media screen and (max-width: 750px) {
          font-size: 0.7rem;
        }
    }   
`

const CardContainer = styled.div`
    display: flex;
    padding: .5rem;
    flex-direction: column;
    border: 1px solid #AAA;
    cursor: pointer;
    &:hover ${HeaderContainer} {
      background : #4c85ee6b
    }
`

interface PriceContainerProps {
  $isDiscounted: boolean;
}

const PriceContainer = styled.div<PriceContainerProps>`
    & > div {
      display: flex;
      align-items: center;
      gap: 5px;
      b { // 원가
        font-size: ${(props) => props.$isDiscounted ? '1.2rem' : '1.3rem'};
        font-weight: ${(props) => props.$isDiscounted ? '400' : '600'};
        color : ${(props) => props.$isDiscounted ? '#BBB' : '#000'};
        text-decoration: ${(props) => props.$isDiscounted ? 'line-through' : 'none'};
      }
      span { // 할인율
        color: orangered;
        font-weight: 600;
        font-size: 1.2rem;
        display: ${(props) => props.$isDiscounted ? 'inline' : 'none'}
      }
    }
    & > b { // 할인가
      font-size: 1.3rem;
      font-weight: 600;
      display: ${(props) => props.$isDiscounted ? 'block' : 'none'}
    }
`




const ProductCard = ({ product }: { product: Product }) => {
  const navigate = useNavigate();
  const { setScrollTop } = useSearchStore();

  const handleClickProduct = () => {
    setScrollTop(window.scrollY)
    navigate(`/detail/${product.id}`)
  }

  return (
    <CardContainer onClick={handleClickProduct}>
      {/* 썸네일 이미지 */}
      <ThumbnailContainer>
        <img src={product?.thumbnail} alt="" />
      </ThumbnailContainer>

      {/* 헤더 (이름, 브랜드) */}
      <HeaderContainer>
        <div>
          <span>
            {product?.title}
          </span>
        </div>
        <div>
          <small>
            {product?.brand}
          </small>
        </div>
      </HeaderContainer>

      {/* 가격 (원가, 할인가, 할인율) */}
      <PriceContainer $isDiscounted={product?.discountPercentage !== 0}>
        <div>
          <b>${product?.price}</b>
          <span>{Math.round(product?.discountPercentage)}%</span>
        </div>
        <b>${(product?.price * (100 - product?.discountPercentage) / 100).toFixed(2).toLocaleString()}</b>
      </PriceContainer>

    </CardContainer>
  )
}

export default ProductCard