'use strict'
const orders = [
    {
        id: "order1",
        amount: 150.5,
        status: 'Pending',
        paymentType: 'CreditCard'
    },
    {
        id: "order2",
        amount: 250.0,
        status: 'Processing',
        paymentType: 'PayPal'
    },
    {
        id: "order3",
        amount: 500.99,
        status: 'Shipped',
        paymentType: 'BankTransfer'
    },
    {
        id: "order4",
        amount: 120.0,
        status: 'Delivered',
        paymentType: 'CashOnDelivery'
    },
    {
        id: "order5",
        amount: 75.0,
        status: 'Canceled',
        paymentType: 'PayPal'
    },
    {
        id: "order6",
        amount: 75.0,
        status: 'Canceled',
        paymentType: 'PayPal'
    }
];
const a = {
    id: "order7",
    amount: 95.0,
    status: 'Processing',
    paymentType: 'PayPal'
}

function updateOrderStatus(order, status){
    const oldStatus = order.status
    order.status = status
    console.log(`Status ${oldStatus} changed to ${status}`)
}
updateOrderStatus(a, 'Delivered')
console.log(a);
function getOrdersByStatus(orders, findStatus){

    return orders.filter(item=>
        item.status === findStatus)
}

console.log(getOrdersByStatus(orders, 'Canceled'));