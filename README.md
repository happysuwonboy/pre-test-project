# 배컴 랠리즈 프론트엔드 개발 사전 과제

## 프로젝트 개요

### 설명
상품 목록 페에지, 상품 상세 페이지로 구성된 개발자 구현 과제 프로젝트입니다. 패키지 매니저는 npm을 채택하였습니다.

### 디렉토리 구조
 📦src <br/>
 ┣ 📂components <br/>
 ┃ ┣ 📂home <br/>
 ┃ ┃ ┣ 📜ProductCard.tsx <br/>
 ┃ ┃ ┣ 📜ProductListSection.tsx <br/>
 ┃ ┃ ┗ 📜SearchSection.tsx <br/>
 ┃ ┣ 📂product-detail <br/>
 ┃ ┃ ┣ 📜ProductImageSection.tsx <br/>
 ┃ ┃ ┗ 📜PurchaseInfoSection.tsx <br/>
 ┃ ┣ 📜StyledComponents.tsx <br/>
 ┃ ┗ 📜TopButton.tsx <br/>
 ┣ 📂hooks <br/>
 ┃ ┣ 📜useFetchProduct.tsx <br/>
 ┃ ┗ 📜useFetchProducts.ts <br/>
 ┣ 📂pages <br/>
 ┃ ┣ 📜Home.tsx <br/>
 ┃ ┗ 📜ProductDetail.tsx <br/>
 ┣ 📂store <br/>
 ┃ ┗ 📜store.ts <br/>
 ┣ 📂types <br/>
 ┃ ┗ 📜index.ts <br/>
 ┣ 📜App.test.tsx <br/>
 ┣ 📜App.tsx <br/>
 ┣ 📜index.css <br/>
 ┣ 📜index.tsx <br/>
 ┣ 📜logo.svg <br/>
 ┣ 📜react-app-env.d.ts <br/>
 ┣ 📜reportWebVitals.ts <br/>
 ┗ 📜setupTests.ts <br/>


 - components : page를 제외한 컴포넌트 파일을 관리. components 폴더 내에서 페이지 별로 구분을 지어 각 페이지에서만 쓰는 컴포넌트로 분류. 

 - hooks : 커스텀 훅을 관리하는 폴더 

 - pages : 브라우저 라우팅의 단위가 되는 페이지 컴포넌트 파일을 관리

 - store : 전역 상태를 관리

 - types : 정적 데이터 타입 관리


 ### 개발 스택
 
 - React
 - TypeScript 
 - styled-components
 - zustand
 - react-router-dom


 ### 이용 API 
 https://dummyjson.com/docs/products
 
 ## 구현 목록

 ### 1. 상품 목록 페이지 ( URI : '/' )

#### 1-1. 상품 목록 출력
  - 처음 접속 시 전체 상품 중 10개만 출력
  - 더 표시할 상품 있을 경우 더보기 버튼을 눌러 10개씩 추가로 출력

#### 1-2. 검색
  - 검색어 입력 후 검색 버튼 클릭 or enter키 누를 시, 검색 결과 반영하여 출력


### 2. 상품 디테일 페이지 ( URI : '/detail/:id' )

#### 2-1. 상품 상세 정보 출력
- useParams를 통해 id를 받아와 상품 1개의 데이터를 fetch
- 상품 상세 정보, 이미지 출력

#### 2-2. 목록으로 돌아가기
 - 페이지 상단 '목록으로 돌아가기'를 클릭한 경우, 상품 목록 페이지로 이동
 - 상품 목록 페이지로 돌아갈 떄, 이전의 검색 결과, 스크롤 위치를 기억함
 - zustand를 통해 유저의 이전 검색 결과, 스크롤 위치, 더 보기 버튼 누른 횟수를 관리하여 구현 


 ### 3. 기타 
  #### 3-1. 브라우저 라우팅 
  - react-router-dom을 이용하여 각 path와 그에 맞는 page Component를 지정함

  #### 3-2. Top 버튼
  - 스크롤이 viewport Height의 1.5배정도 내려간 경우, 페이지 우측 하단에 Top 버튼을 표시
  - Top 버튼 클릭 시 스크롤 위치가 페이지 최상단으로 이동