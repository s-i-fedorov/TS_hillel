// 1. Розширення та об'єднання інтерфейсів
interface Address {
    street: string,
    city: string,
    zipCode: number
}
interface User {
    name: string,
    age: number
}
interface UserWithAddress extends User, Address {
    email: string
}
const usr: UserWithAddress = {
    street: 'ASd',
    city: 'Kiliya',
    zipCode: 68000,
    name: 'Vasiliy',
    age: 22,
    email: 'vasiliy@gmail.com'
}
console.log(usr)

// 2. Створення типів для даних із вкладеними інтерфейсами
interface Category{
    categoryName: string,
    categoryId: number
}
interface Product {
    name: string,
    price: number,
    category: Category
}
interface Order {
    orderId: number,
    userId: number,
    products: Product[]
}
type OrdersArray = Order[]

const orders: OrdersArray = [
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
console.log(orders)

// 3. Обов'язкові та необов'язкові поля
interface Person{
    firstName: string,
    lastName: string,
    middleName?: string
}
const person1:Person = {
    firstName: 'serhii',
    lastName: 'fedorov'
}
const person2:Person = {
    firstName: 'mykhailo',
    lastName: 'fedorov',
    middleName: 'serhiyovuch'
}
function printInfo (obj:Person):string{
    const mN = obj.middleName ? obj.middleName : ''
    return `${obj.lastName} ${obj.firstName} ${mN}`
}

console.log(printInfo(person1))
console.log(printInfo(person2))

// 4. Створення інтерфейсу для зчитування налаштувань
