import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface CircleButtonProps {
  $show: boolean;
}

const CircleButton = styled.button<CircleButtonProps>`
  width: 80px;
  height: 80px;
  border: none;
  border-radius: 50%;
  background: #DDD;
  position: fixed;
  bottom: 5vh; 
  right: 5vw;
  cursor: pointer;
  transition: all .5s;
  opacity: ${(props) => (props.$show ? 1 : 0)};
  pointer-events: ${(props) => (props.$show ? 'all' : 'none')};
`;

const TopButton = () => {
  const [showButton, setShowButton] = useState<boolean>(false);


  // 스크롤 위치 체크하여 뷰포트 height 보다 1.5배 정도 내려가면 버튼 보이도록 함
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 1.5) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0 })
  }

  return <CircleButton onClick={handleClick} $show={showButton}>TOP</CircleButton>;
};

export default TopButton;