console.log(location.toString(), location.href);
// 문서의 주소정보 알아내는 방법 두가지. toString() or href

alert(location);
// 이렇게 하면 alert창에 주소정보가 출력됨. 문자열이여야 하기 때문

console.log(location.protocol);
// 프로토콜 출력 ex) http or https

console.log(location.host);
// 호스트 출력 ex) naver.com

console.log(location.port);
// 포트번호 출력, 기본은 80

console.log(location.pathname);
// 뒤에 뭐 따라붙는거 출력

// 이런식으로 여러 주소정보를 따로따로 분리하여 알아낼 수 있음


location.reload;
// 새로고침

location.href = "www.naver.com";
// 현재 주소정보를 www.naver.com으로 변경