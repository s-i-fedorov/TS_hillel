'use strict'


const product = {
    name: 'phone',
        price: '400',
        isAvailable: false
}


function parsePrice(obj) {
    const {name, price, isAvailable} = obj
    let available = isAvailable ? 'Yes' : 'No'
    console.log(`Товар: ${name}, Ціна: ${price}$, В наявності: ${available}`)
}

parsePrice(product)