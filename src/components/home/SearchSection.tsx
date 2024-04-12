import React, { useState } from 'react';
import { Section, LayoutDiv, SectionTitle } from 'components/StyledComponents';
import styled from 'styled-components';
import useLogStore from 'store/store';

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

const StickySection = styled(Section)`
    position: sticky;
    top: 0;
    left: 0;
    box-shadow: 0 0 3px #000;
`
const SearchResult = styled.div`
    padding-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    & > span > b {
            font-weight : 600;
        
    }
    & > button {
        cursor: pointer;
        background: none;
        border: none;
        font-weight: 600;
        color: #ff0000ac;
        &:hover {
            color: red;
        }
    }
`

const SearchSection = ({ searchResultCount }: { searchResultCount: number }) => {
  const { searchQuery, setSearchQuery, setShowMoreCount, setScrollTop } = useLogStore();
  const [inputText, setInputText] = useState<string>(searchQuery || '');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (inputText) {
      setSearchQuery(inputText);
      setShowMoreCount(0);
      setScrollTop(0);
    } else {
      alert('검색어를 한 글자 이상 입력해주세요.');
    }
  };

  const handleClickResetBtn = () => {
    setScrollTop(0);
    setSearchQuery('');
    setInputText('');
  }

  return (
    <StickySection>
      <LayoutDiv $maxWidth="800px">
        <SectionTitle>상품 검색</SectionTitle>
        <SearchForm onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="상품 이름으로 검색해주세요"
            value={inputText}
            onChange={handleChange}
          />
          <button type="submit">검색</button>
        </SearchForm>
        {searchQuery
          ?
          <SearchResult>
            <span>
              {searchResultCount
                ? <><b>"{searchQuery}"</b> 에 대한 총 <b>{searchResultCount}</b> 건의 검색 결과가 있습니다.</>
                : <><b>"{searchQuery}"</b> 에 대한 검색결과가 존재하지 않습니다.</>}
            </span>
            <button onClick={handleClickResetBtn}> 초기화</button>
          </SearchResult>
          : null}
      </LayoutDiv>
    </StickySection>
  );
};

export default SearchSection;
