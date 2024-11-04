type Product = {
    name: string;
    price: number;
    isAvailable: boolean
}
const prod1:Product = {
        name: 'phone',
        price: 400,
        isAvailable: true
    }
const prod2:Product = {
        name: 'tablet',
        price: 600,
        isAvailable: true
    }
const prod3:Product = {
        name: 'laptop',
        price: 1000,
        isAvailable: false
    }

function parsePrice(obj:Product):void {
    const name:string = obj.name
    const price:number = obj.price
    const isAvailable:boolean = obj.isAvailable
    let available: string = isAvailable ? 'Yes' : 'No'
    console.log(`Товар: ${name}, Ціна: ${price}$, В наявності: ${available}`)
}
parsePrice(prod3)