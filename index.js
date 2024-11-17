"use strict";
const users = [
    { id: 1, name: 'Alice', age: 25, isActive: true },
    { id: 2, name: 'Bob', age: 30, isActive: false },
    { id: 3, name: 'Charlie', age: 35, isActive: true },
];
function filterByProperty(array, property, value) {
    return array.filter(item => item[property] === value);
}
const activeUsers = filterByProperty(users, 'isActive', false);
console.log(activeUsers);
// interface Person {
//     name: string;
//     age: number;
// }
//
// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//     return obj[key];
// }
//
// const person: Person = { name: "Alice", age: 25 };
// const name1 = getProperty(person, "name"); // T = Person, K = "name" (result: string)
// const age = getProperty(person, "age"); // T = Person, K = "age" (result: number)
// console.log('name: ', name1)
// console.log('age: ', age)
