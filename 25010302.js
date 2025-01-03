let fruit = prompt('어떤 과일을 구매히시겠습니까?:');

switch (fruit) {
    case '사과' :
        console.log('좋은 선택입니다');
        break
    case '참외' :
        console.log('나 참외 알레르기 있음');
        break
    default :
        console.log('그건 뭐고?');
};