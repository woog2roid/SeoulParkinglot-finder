# [파킹랏]: 서울시의 공영주차장을 찾아주는 웹 서비스]

### 링크
- [실행화면](#실행화면)
- [프로젝트를 마치고](#프로젝트를-마치고)

## 실행화면
- 모바일 기준 실행화면
	- <img src="https://user-images.githubusercontent.com/54667577/135610973-7f9b53c7-4317-427e-a385-8acd55016343.gif" alt="실행화면" width="50%" height="50%" >

## 프로젝트를 마치고
### 1. 군입대하고 자대에서 시간이 날 때마다 조금씩 만든 웹앱이다.
정확히는 군대에서 뭐라도 다시 해야 안 잊어버리지 않을까 하는 생각에 시작했고, 아쉽지만 이전 [격투기 토이 프로젝트](https://github.com/woog2roid/mma-fighter-finder) 와는 다르게 정감이 가거나 이용하지는 않는 프로젝트이다. 실제로 사용하지 않는다는 점이 좀 큰 것 같다.

### 2. 이 프로젝트는 지난 프로젝트와는 다르게 [공공 API](http://data.seoul.go.kr/dataList/OA-13122/S/1/datasetView.do)를 이용해서 한번 만들어보고 싶다는 생각이 들어서 만들게 되었다.
백엔드에서 크롤링을 하던 격투기 전적 사이트와는 다르게 확실히 공공 API를 사용하니 백엔드 단에서의 불안함은 없는 것 같다. 하지만, 서울 주차장 공공 API에서는 거리를 계산하는 등의 기능은 없어서, 따로 [서버](https://github.com/woog2roid/seoul-parking-lot-api)를 두고 매일 새벽 공공 API의 모든 데이터를 받아서 json형식으로 저장하고, 프론트에서 요청을 보내면 서버에서 데이터를 재가공해서 프론트로 데이터를 보내주는 식으로 개발하였다.

### 3. 기능이 많아질 수록 컴포넌트 단위로 많이 나누게 되고, 컴포넌트의 이름을 짓는 것이 중요한 것 같다.
components의 main, search 폴더를 보면, 폴더와 컴포넌트 명으로는 정확한 컴포넌트의 형태를 유추하기가 상당히 어렵다. components/main/search에 있는 Search, SearchButton, SearchForrm, ShearchPopover나 components/search의 Info, Map, Search 이 파일을 처음 보는 사람이 어떻게 구분할 수 있을까? 아마 협업이었다면 동료 고생시키는 유형이 아닐까 싶다.

아마 다시하게 된다면 폴더 구조를 명확히하고, 정확한 이름을 지을 것 같다. components/main/search/Search.js나 components/search/Search.js 모두 나머지 컴포넌트를 합친 큰 하나의 컴포넌트이니 나머지 컴포넌트를 search의 하위 폴더에 두던가 아예 해당 Search 컴포넌트를 없애고 pages에서 합치는 것이 좋았을 것이다.

components/search의 Info와 Map도 Map안에서 Info가 주차장의 정보를 알려주는 것이니 Map, ParkinglotInfoPopover과 같이 명명하고 하위 폴더 구조를 이용했으면 보자마자 아는 이름이 되지 않았을까 싶다.

### 4. contextAPI를 이용해서 서비스를 만들었다.
[이전 토이 프로젝트](https://github.com/woog2roid/mma-fighter-finder)는 너무 간단하게 끝나서, contextAPI를 이용하여 지도와 검색옵션들을 전역 상태로 사용하였다. 지도옵션 같은 경우에는 아무리 로그인 기능이 없는 프로젝트이지만 한 기기에서 접속했을 때 매번 설정을 바꾸는 것은 불편할 것 같아 localStorage와 contextAPI를 동시에 이용했다. 다른 상태관리 라이브러리도 있지만 contextAPI의 기능이 많이 좋아졌고, redux가 boilerplate가 많다는 점 때문에 contextAPI를 채택하였다.