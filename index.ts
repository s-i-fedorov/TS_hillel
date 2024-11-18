interface Student {
    id: string,
    name: string,
    age: number
}

type Subject = 'Math' | 'Science' | 'Literature' | 'History'
type Grades = Record<Subject, number>
//     Створити тип Grades, який буде Record<Subject, number>. Це буде об'єкт, де ключами
//     будуть предмети, а значеннями — оцінки студента за кожен з предметів (значення типу number
//     від 0 до 100).
interface UniversityRecord {
    students: Record<string, Student>,
    grades: Record<string, Grades>
}
// Створити інтерфейс UniversityRecord, що містить поля:
//     students — об'єкт типу Record<string, Student>, де ключем буде id студента, а значенням об'єкт
//     типу Student.
//     grades — об'єкт типу Record<string, Grades>, де ключем буде id студента, а значенням об'єкт
//     типу Grades, який зберігає оцінки студента за предметами.

// Створити декілька тестових записів UniversityRecord, додавши кілька студентів та їхні оцінки з різних
// предметів.
//     Написати функцію getStudentGrades, яка приймає universityRecord: UniversityRecord та studentId: string,
//     і повертає оцінки студента за предметами.
//     Написати функцію getAverageGrade, яка приймає universityRecord: UniversityRecord та subject: Subject,
//     і повертає середню оцінку всіх студентів по зазначеному предмету.
