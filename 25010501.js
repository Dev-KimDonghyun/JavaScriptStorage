const user = {
    name: 'Mike',
    age: 30,
    gender: 'male',
}

//Object.assgin
const newUser = Object.assign({}, user);
// {}는 초기값. user 변수를 newUser에 복사시켜 줌

//Object.keys
Object.keys(user);
// 키만 Array로 변환시켜줌

//Object.values
Object.values(user);
// 값만 Array로 변환시켜줌

//Object.entries
Object.entries(user);
// 키와 값 모두를 Array로 변환시켜줌

Object.fromEntries(arr);
// Array를 Object로 변환시켜줌