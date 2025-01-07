let num = 10;

num.toString();
// 말 그대로 숫자를 문자로 바꿔줌

num.toString(2);
// 2진법으로 바꿔줌

num.toString(16);
// 16진수로 바꿔줌

console.log(Math.PI);
// 원주율 출력해줌

let num1 = 5.2;
let num2 = 5.7;

Math.ceil(num1);
Math.ceil(num2);
// 올려줌. 값은 6

Math.floor(num1);
Math.floor(num2);
// 내려줌. 값은 5

Math.round(num1);
Math.round(num2);
// 반올림. 값은 알 거라고 생각함

let userRate = 30.12345;
userRate.toFixed(2);
// 소수점 둘째자리까지 출력. 나머지는 반올림 됨
// toFixed는 문자열로 반환함

Number(userRate.toFixed(2));
// 그래서 이런식으로 사용함

console.log(Number(userRate.toFixed(2)));
// 좀 간지나노

Number.isNaN(3);
// false. 숫자가 아닌 경우에만 true

let margin = '10px';

parseInt(margin); // 읽을 수 있는 것까지 숫자(정수)로 변환함. 허나 숫자로 시작하여야 함

parseFloat(margin); // 소숫점까지 변환함

Math.min(); // 최솟값
Math.max(); // 최댓값

Math.abs(); // 절댓값

Math.pow(a, b); // a의 b제곱

Math.sqrt(); // 루트