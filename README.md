# 데이터 시각화하기 (Data Visualization)

## 외부 데이터 불러오기 (TMDB API)

TMDB API를 통해 영화, TV 합한 현재 트렌딩 컨텐츠를 불러옵니다.  
트렌딩 컨텐츠 불러오기: [TMDB API](https://api.themoviedb.org/3/trending/all)

![트렌딩 시각화](./public/트렌드시각화.png)

## 프로젝트 목적

Netflix, Watcha, Disney+ 등 다양한 OTT 서비스에 있는 수많은 컨텐츠들 속에서  
당장 무엇을 볼지 정하는 것은 쉽지 않습니다. 이를 해결하고자 현재 트렌딩한 컨텐츠의 키워드를 받아보고자 했습니다.

또한, 짧은 시간 내에 원하는 정보를 얻고자 하는 현대 사람들의 니즈에 맞춰  
한눈에 알 수 있도록 데이터를 시각화하는 기법을 중요하게 생각하여 제작하였습니다.

---

<div>
 <h2>⚡Tech Stack⚡</h2>

  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white" alt="javascript" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/ReactQuery-20232A?style=for-the-badge&logo=react&logoColor=61DAF" alt="react-query"/>

</div>

# 추가 개선 사항

## 1. 다양한 컨텐츠 데이터 시각화

현재는 TMDB API를 통해 영화, TV쇼에 관한 트렌딩 정보만 제공하지만,  
YouTube, 도서, 뉴스 등 다양한 컨텐츠들의 데이터를 시각화해보는 것을 목표로 합니다.

## 2. UI 디자인 고려

시각화 프로젝트에 맞는 UI 디자인도 함께 고려하여, 사용자 경험을 더욱 개선하고  
데이터를 직관적으로 표현할 수 있도록 디자인을 다듬어보겠습니다.

## 3. 데이터 출처 파악

영화 시청이 가능한 플랫폼(예: Netflix, Disney+)과 같은 **데이터 출처**에 대한 정보를 찾아보고,  
이 정보를 시각화에 포함시켜 사용자에게 더욱 유용한 데이터를 제공할 수 있도록 하겠습니다.
