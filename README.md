#malangbook front
2016 sunrin digital content contest malangbook's front source
made by 2016 chojaeho

#document
 * main.html (form name : search, side-login-form)
  - search (method : GET)
    - name : search, type : search, function : 검색
  - side-login-form (method : POST)
    - name : user[id], type : text, function : 아이디
    - name : user[pw], type : password, function : 비밀번호
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
 * newBook2.html (form name : book-form-2" method : POST)
  - name : newbook[maintitle] type : text function : 메인제목
  - name : newbook[subtitle] type : text function : 소제목
  - name : newbook[author] type : text function : 저자
  - name : newbook[image] type : file function : 책 이미지
  - name : newbook[color] type : color function : 책 색깔
 * login.html (form name : login-form, login-findID, login-findPW, login-signUP)
  - login-form (method : POST)
    - name : id, type : text, function : 로그인 아이디
    - name : pw, type : password , function : 로그인 비밀번호
  - login-findId (method : POST)
    - name : email, type : email, function : 이메일주소
  - login-findPW (method : POST)
    - name : id, type : text, function : 사용자 아이디
    - name : pwquiz, type : select, function : 사용자 비밀번호 찾기 퀴즈지정
    - name : pwans, type : text, function : 사용자 비밀번호 퀴즈 답변
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
    - name : setting[profiles], type: file, function :  프로필 파일
  * reader.html
    - name : reply , type: textarea function : 댓글
#css component
  * /*DIRECTORY CAUTION*/
    - background-image등 경로 꼬일 수 있는거에다가 주석으로 달아놓음