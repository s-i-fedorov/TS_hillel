"use strict";
// type User = {
//     id: number;
//     name: string;
//     age: number;
//     isActive: boolean;
// };
//
// const users: User[] = [
//     { id: 1, name: 'Alice', age: 25, isActive: true },
//     { id: 2, name: 'Bob', age: 30, isActive: false },
//     { id: 3, name: 'Charlie', age: 35, isActive: true },
// ];
function getProperty(obj, key) {
    return obj[key];
}
const person = { name: "Alice", age: 25 };
const name1 = getProperty(person, "name"); // T = Person, K = "name" (result: string)
const age = getProperty(person, "age"); // T = Person, K = "age" (result: number)
console.log('name: ', name1);
console.log('age: ', age);
