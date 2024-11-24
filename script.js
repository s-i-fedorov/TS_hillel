'use strict'
const orders = [
    {
        id: "order1",
        amount: 150.5,
        status: OrderStatus.Pending,
        paymentType: PaymentType.CreditCard
    },
    {
        id: "order2",
        amount: 250.0,
        status: OrderStatus.Processing,
        paymentType: PaymentType.PayPal
    },
    {
        id: "order3",
        amount: 500.99,
        status: OrderStatus.Shipped,
        paymentType: PaymentType.BankTransfer
    },
    {
        id: "order4",
        amount: 120.0,
        status: OrderStatus.Delivered,
        paymentType: PaymentType.CashOnDelivery
    },
    {
        id: "order5",
        amount: 75.0,
        status: OrderStatus.Canceled,
        paymentType: PaymentType.PayPal
    }
];

function getOrdersByStatus(orders, statusf){
    const result = orders.filter((item)=>{
        item[status] === statusf
    })
    return []
}