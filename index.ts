const prod1 = {
        name: 'phone',
        price: '400',
        isAvailable: true
    }
const prod2 = {
        name: 'tablet',
        price: '600',
        isAvailable: true
    }
const prod3 = {
        name: 'laptop',
        price: '1000',
        isAvailable: true
    }

function parsePrice(obj):void {
    const name:string = obj.name
    const price:number = obj.price
    const isAvailable:boolean = obj.isAvailable
    let available: string = isAvailable ? 'Yes' : 'No'
    console.log(`Товар: ${name}, Ціна: ${price}$, В наявності: ${available}`)
}