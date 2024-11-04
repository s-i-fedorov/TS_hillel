"use strict";
const prod1 = {
    name: 'phone',
    price: 400,
    isAvailable: true
};
const prod2 = {
    name: 'tablet',
    price: 600,
    isAvailable: true
};
const prod3 = {
    name: 'laptop',
    price: 1000,
    isAvailable: false
};
function parsePrice(obj) {
    const name = obj.name;
    const price = obj.price;
    const isAvailable = obj.isAvailable;
    let available = isAvailable ? 'Yes' : 'No';
    console.log(`Товар: ${name}, Ціна: ${price}$, В наявності: ${available}`);
}
parsePrice(prod3);
