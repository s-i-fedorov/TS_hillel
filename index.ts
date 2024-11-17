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
    return array.filter(item=>item[property]===value)
}

const activeUsers = filterByProperty(users, 'isActive', false);
console.log(activeUsers);