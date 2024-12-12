"use strict";
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["Processing"] = 1] = "Processing";
    OrderStatus[OrderStatus["Shipped"] = 2] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 3] = "Delivered";
    OrderStatus[OrderStatus["Canceled"] = 4] = "Canceled";
})(OrderStatus || (OrderStatus = {}));
var PaymentType;
(function (PaymentType) {
    PaymentType[PaymentType["CreditCard"] = 0] = "CreditCard";
    PaymentType[PaymentType["PayPal"] = 1] = "PayPal";
    PaymentType[PaymentType["BankTransfer"] = 2] = "BankTransfer";
    PaymentType[PaymentType["CashOnDelivery"] = 3] = "CashOnDelivery";
})(PaymentType || (PaymentType = {}));
// Створити декілька замовлень для тестування системи, використовуючи OrderStatus та PaymentType.
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
//     Написати функцію updateOrderStatus, яка приймає order: Order і status: OrderStatus, оновлює статус
//     замовлення, а також виводить у консоль повідомлення про зміну статусу.
function updateOrderStatus(order, status) {
    const oldStatus = order.status;
    order.status = status;
    console.log(`Status ${oldStatus} changed to ${status}`);
}
updateOrderStatus(orders[2], 0);
//     Написати функцію getOrdersByStatus, яка приймає масив orders: Order[] і status: OrderStatus, і повертає
//     всі замовлення з відповідним статусом.
function getOrdersByStatus(orders, findStatus) {
    return orders.filter(item => item.status === findStatus);
}
console.log(getOrdersByStatus(orders, OrderStatus.Pending));
