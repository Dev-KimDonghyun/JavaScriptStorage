const a = Symbol();
const b = Symbol();

// a === b, a == b 모두 false
// 유일성이 보장되는 코드
// 괄호 안에 문자형을 넣어 설명을 달아줄 수 있음

const id1 = Symbol.for('id');
const id2 = Symbol.for('id');

// id1 === id2 => true





// 강의 Symbol 사용 예제코드


// 타인이 작업한 코드
const user = {
    name: 'Mike',
    age: 30,
};

// 내가 작업한 코드
const showName = Symbol('show name');
user[showName] = function () {
    console.log(this.name);
};

// 중복을 피하기 위함도 있고..데이터를 쉽게 노출시키지 않기 위함도 있음





// ChatGPT 예제 코드

// 사용자 객체
const user = {
    name: "Alice",
    age: 25,
};
  
// 비공개 데이터를 위한 Symbol 키
const privateKey = Symbol("privateKey");
  
// Symbol 키를 사용해 비공개 데이터 추가
user[privateKey] = "secret123"; // 유일한 Symbol로 추가된 키
  