#malangbook front
2016 sunrin digital content contest malangbook's front source
made by 2016 chojaeho

#document
 * newbook.html (form name : book-form)
  - name : category, type : NaN, function : 대분류, 소분류
  - name : page-limit, type : number, function : 페이지제한 (0 : 제한 없음)
  - name : chapter-limit, type : number, function : 단원 제한 (0 : 제한 없음)
  - name : overlap, type: select, optionValue : (yes : 예) , (no : 아니오), function : 중복 참여 가능 여부
  - name : series, type : select, optionValue : (yes : 예) , (no : 아니오), function : 시리즈 여부
  - name : private, type : select, optionValue : (yes : 예) , (no : 아니오), function : 비공개 여부
  - name : right-click, type : radio, function : 우클릭 설정 (accept : 허용 , deny : 비허용)
  - name : share, type : radio, function : 공유 설정 (accept : 허용 , deny : 비허용)
  - name : modify, type: radio, function : 관리자 다른사람이 쓴글 수정 (accept : 허용 , deny : 비허용)
  - name : delete, type: radio, function : 관리자 다른사람이 쓴글 삭제 (accept : 허용 , deny : 비허용)
  - name : font, type : select, optionValue : NaN function : 글꼴 설정
 * login.html (form name : login-form, login-findID, login-findPW, login-signUP)
  - login-form
    - name : id, type : text, function : 로그인 아이디
    - name : pw, type : password , function : 로그인 비밀번호
  - login-findId
    - name : email, type : email, function : 이메일주소
  - login-findPW
    - name : id, type : text, function : 사용자 아이디
    - name : email, type : email, function : 사용자 이메일
  - login-signUP
    - name : id, type : text, function : 아이디
    - name : pw, type : password, function : 비밀번호
    - name : pwc, type : password, function : 비밀번호 확인
    - name : email, type : email, function : 이메일
    - name : policy, type : checkbox, function : 이용약관 동의(체크되있으면 동의)