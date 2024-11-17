interface Student {
    id: number,
    name: string,
    age: number
}

type Subject = 'Math' | 'Science' | 'Literature' | 'History'
//     Створити тип Grades, який буде Record<Subject, number>. Це буде об'єкт, де ключами
//     будуть предмети, а значеннями — оцінки студента за кожен з предметів (значення типу number
//     від 0 до 100).
// Створити інтерфейс UniversityRecord, що містить поля:
//     students — об'єкт типу Record<string, Student>, де ключем буде id студента, а значенням об'єкт
//     типу Student.
//     grades — об'єкт типу Record<string, Grades>, де ключем буде id студента, а значенням об'єкт
//     типу Grades, який зберігає оцінки студента за предметами.