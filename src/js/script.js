'use strict'
// Створи клас User, який має:
//
//     Властивості:
//         id (унікальний ідентифікатор, автоматично генерується для кожного екземпляра);
// name (ім’я);
// email (електронна пошта);
// приватну властивість password.
//     Методи:
// changePassword(newPassword) — змінює пароль.
//     Гетер info — повертає рядок: "ID: [id], Name: [name], Email: [email]".
//     Додатково:
//
// Використовуй статичну властивість для автоматичного створення id.
class User {
    #id = 1;
    name = null;
    email = null;
    #password = null;
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}