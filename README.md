# Market

제공된 API 를 이용한 오픈마켓 프로젝트입니다.

2월 25일 main branch에 배포 테스트 진행

### 필요 기능

메인페이지 상품 무한스크롤 구현
판매회원 상품수정
장바구니
상품검색
판매자센터
상태관리 기능 업데이트

### 개선필요사항

TopNavbar : 판매자센터 nav 추가
로그인정보확인 -> seller인지 buyer인지 확인 -> buyer는 특정 페이지 접근 금지

### 트러블

서버에 이미지파일 전송 오류
상품등록시 이미지를 같이 등록한다.
이 때, 이미지파일 전송에 있어서 오류가 나고 있다.
FormData 형식으로 전송해보고, base64로 인코딩하여 전송해봐도 정상작동하지 않는다.

FormData에 이미지파일 외에 다른 정보도 같이 넣어 전송하는것으로 해결

### 무한스크롤

현재 intersectionObserver API 활용하여 구현 완료
페이지 첫 로드시, 상품 1페이지를 보여줌
intersectionObserver 사용하여 스크롤이 끝에 다다르면, 다음 페이지 로드
-> 현재까지 로드된 페이지를 상태관리
-> 페이지 로드 함수 추가 작성
-> 함수시작시 관측하던 자식들 관측 종료 &함수 종료시 마지막 자식 관측
