const developer = {
    name: 'Donghyun',
    age: '20',
};

console.log(developer.name);
// 출력

developer.gender = 'male';
// 추가

delete developer.age;
// 삭제

'birthDay' in developer;
// 참 거짓 확인


function makeList (name, age) {
    return {
        name: name,
        age: age,
    };
};

const elly = makeList ('Elly', 24);
console.log(elly);

const mike = {
    name: 'Mike',
    age: 20,
};

for (key in mike) {
    console.log(key) // name, age
    console.log(mike[key])// Mike, 20
}