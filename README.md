#malangbook front
2016 sunrin digital content contest malangbook's front source
made by 2016 chojaeho

#document
 * main.html (form name : search, method : GET)
  - name : search, type : search, function : 검색
 * newbook.html (form name : book-form, method : POST)
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
  - login-form (method : POST)
    - name : id, type : text, function : 로그인 아이디
    - name : pw, type : password , function : 로그인 비밀번호
  - login-findId (method : POST)
    - name : email, type : email, function : 이메일주소
  - login-findPW (method : POST)
    - name : id, type : text, function : 사용자 아이디
    - name : email, type : email, function : 사용자 이메일
  - login-signUP (method : POST)
    - name : id, type : text, function : 아이디
    - name : pw, type : password, function : 비밀번호
    - name : pwc, type : password, function : 비밀번호 확인
    - name : email, type : email, function : 이메일
    - name : nickname, type : text, function : 닉네임
    - name : pwquiz, type : select, function : 비밀번호 찾기퀴즈 지정 (option : ...)
    - name : policy, type : checkbox, function : 이용약관 동의(체크되있으면 동의)
 * mp_setting.html (form name : setting-form)
  - setting-form (method : POST)
    - name : setting[id], type: text, function : 아이디
    - name : setting[pw], type: password, function : 이전비밀번호
    - name : setting[repw], type: password, function : 새비밀번호
    - name : setting[repwc], type: password, function : 새비밀번호재입력
    - name : setting[nickname], type: text, function : 닉네임
    - name : setting[email], type: email, function :  이메일
    - name : setting[check], type: number, function : 이메일 인증번호
#css component
    - title