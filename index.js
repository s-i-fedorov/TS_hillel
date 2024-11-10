"use strict";
const usr = {
    street: 'ASd',
    city: 'Kiliya',
    zipCode: 68000,
    name: 'Vasiliy',
    age: 22,
    email: 'vasiliy@gmail.com'
};
console.log(usr);
const orders = [
    {
        orderId: 1,
        userId: 101,
        products: [
            {
                name: "Laptop",
                price: 1500,
                category: {
                    categoryName: "Electronics",
                    categoryId: 1
                }
            },
            {
                name: "Mouse",
                price: 25,
                category: {
                    categoryName: "Electronics",
                    categoryId: 1
                }
            }
        ]
    },
    {
        orderId: 2,
        userId: 102,
        products: [
            {
                name: "Desk",
                price: 200,
                category: {
                    categoryName: "Furniture",
                    categoryId: 2
                }
            }
        ]
    }
];
console.log(orders);
const person1 = {
    firstName: 'serhii',
    lastName: 'fedorov'
};
const person2 = {
    firstName: 'mykhailo',
    lastName: 'fedorov',
    middleName: 'serhiyovuch'
};
function printInfo(obj) {
    const mN = obj.middleName ? obj.middleName : '';
    return `${obj.lastName} ${obj.firstName} ${mN}`;
}
console.log(printInfo(person1));
console.log(printInfo(person2));
