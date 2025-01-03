function Item (name, price) {
    this.name = name,
    this.price = price,
    this.showPrice = function () {
        console.log(`가격은 ${price}원 입니다`);
    };
};

const item1 = new Item ('인형', '5000');
const item2 = new Item ('볼펜', '1000');

console.log(item1, item2);

item1.showPrice();