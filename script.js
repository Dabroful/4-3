const income = prompt('Наименование товара: ');
const quantity = prompt('количество: ');
const category = prompt('категория: ');
const price = prompt('цена: ');

console.log(income);
console.log(quantity);
console.log(category);
console.log(price);

console.log(`На складе ${quantity} единиц товара "${income}" на сумму ${quantity * price} рублей`)
