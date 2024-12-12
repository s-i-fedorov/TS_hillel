// Створити enum OrderStatus, який представлятиме можливі статуси замовлення:
//     Pending — замовлення очікує підтвердження.
//     Processing — замовлення в обробці.
//     Shipped — замовлення відправлено.
//     Delivered — замовлення доставлено.
//     Canceled — замовлення скасовано.
enum OrderStatus {
    Pending = 0,
    Processing = 1,
    Shipped = 2,
    Delivered = 3,
    Canceled = 4,
}

//     Створити enum PaymentType, який представлятиме типи оплати:
//     CreditCard — оплата кредитною карткою.
//     PayPal — оплата через PayPal.
//     BankTransfer — оплата через банківський переказ.
//     CashOnDelivery — оплата при доставці.
enum PaymentType {
    CreditCard = 0,
    PayPal = 1,
    BankTransfer = 2,
    CashOnDelivery = 3
}

//     Створити інтерфейс Order, який містить поля:
//     id — унікальний ідентифікатор замовлення (типу string).
// amount — загальна сума замовлення (типу number).
// status — статус замовлення (типу OrderStatus).
// paymentType — тип оплати (типу PaymentType).
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
//     Написати функцію updateOrderStatus, яка приймає order: Order і status: OrderStatus, оновлює статус
//     замовлення, а також виводить у консоль повідомлення про зміну статусу.
function updateOrderStatus(order: Order, status: OrderStatus):void {

}
//     Написати функцію getOrdersByStatus, яка приймає масив orders: Order[] і status: OrderStatus, і повертає
//     всі замовлення з відповідним статусом.
function getOrdersByStatus(orders: Order[], status: OrderStatus):Order[]|null {
    const result = orders.filter((item)=>{
        item[status] === status
    })
    return []
}