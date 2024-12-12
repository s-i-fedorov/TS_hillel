enum OrderStatus {
    Pending = 0,
    Processing = 1,
    Shipped = 2,
    Delivered = 3,
    Canceled = 4,
}

enum PaymentType {
    CreditCard = 0,
    PayPal = 1,
    BankTransfer = 2,
    CashOnDelivery = 3
}

interface Order {
    id: string,
    amount: number,
    status: OrderStatus,
    paymentType: PaymentType
}

// Створити декілька замовлень для тестування системи, використовуючи OrderStatus та PaymentType.
const orders: Order[] = [
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
//     Написати функцію updateOrderStatus
function updateOrderStatus(order: Order, status: OrderStatus):void {
    const oldStatus: OrderStatus = order.status
    order.status = status
    console.log(`Status ${oldStatus} changed to ${status}`)
}
updateOrderStatus(orders[2], 0)

//     Написати функцію getOrdersByStatus
function getOrdersByStatus(orders: Order[], findStatus: OrderStatus):Order[]|null {
    return orders.filter(item=>
        item.status === findStatus)
}

console.log(getOrdersByStatus(orders, OrderStatus.Pending));