### ↓↓ Опис ДЗ ↓↓ 
### ДЗ 10. Дженерики
Напиши функцію `filterByProperty`, яка приймає масив об'єктів та ім'я властивості, а повертає новий масив об'єктів, що мають цю властивість. Тип властивості повинен збігатися з типом, переданим у параметрі, завдяки дженерікам.

Умови:

1. Функція має мати наступний тип:
   <code>function filterByProperty<T, K extends keyof T>(array: T[], property: K, value: T[K]): T[]</code>

T — це тип об'єктів у масиві.

K — це ім'я властивості, яка повинна бути присутня в об'єктах масиву.

value — значення, яке повинна мати ця властивість для того, щоб об'єкт був включений у результуючий масив.

Приклад використання
<code><br/>
type User = {<br/>
id: number;<br/>
name: string;<br/>
age: number;<br/>
isActive: boolean;<br/>
};

const users: User[] = [<br/>
{ id: 1, name: 'Alice', age: 25, isActive: true },<br/>
{ id: 2, name: 'Bob', age: 30, isActive: false },<br/>
{ id: 3, name: 'Charlie', age: 35, isActive: true },<br/>
];
</code>
<p>Використання функції</p>
<code>
const activeUsers = filterByProperty(users, 'isActive', true);<br/>
console.log(activeUsers);<br/>
// Результат: [<br/>
//   { id: 1, name: 'Alice', age: 25, isActive: true },<br/>
//   { id: 3, name: 'Charlie', age: 35, isActive: true }<br/>
// ]
</code>
Пояснення

- Функція `filterByProperty` використовує дженеріки `T` та `K`.

- `T` — тип елементів у масиві.

- `K extends keyof T` — дозволяє використовувати тільки ті ключі, які є у типі `T`.

- `T[K]` — тип значення, яке ми порівнюємо з переданим `value`.

Як це працює

- Функція `filterByProperty` перевіряє кожен об'єкт у масиві, щоб визначити, чи має властивість `property` значення, що дорівнює `value`.

- Результат — новий масив, що містить тільки об'єкти, які відповідають умовам.