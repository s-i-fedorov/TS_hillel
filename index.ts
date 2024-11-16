type User = {
    id: number;
    name: string;
    age: number;
    isActive: boolean;
};

const users: User[] = [
    { id: 1, name: 'Alice', age: 25, isActive: true },
    { id: 2, name: 'Bob', age: 30, isActive: false },
    { id: 3, name: 'Charlie', age: 35, isActive: true },
];


function filterByProperty<T, K extends keyof T>(array: T[], property: K, value: T[K]): T[] {
    const a =
}

const activeUsers = filterByProperty(users, 'isActive', true);
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