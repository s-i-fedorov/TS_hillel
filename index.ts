interface Student {
    id: string,
    name: string,
    age: number
}

type Subject = 'Math' | 'Science' | 'Literature' | 'History'

//     Створити тип Grades, який буде Record<Subject, number>. Це буде об'єкт, де ключами
//     будуть предмети, а значеннями — оцінки студента за кожен з предметів (значення типу number
//     від 0 до 100).
type Grades = Record<Subject, number>


// Створити інтерфейс UniversityRecord, що містить поля:
//     students — об'єкт типу Record<string, Student>, де ключем буде id студента, а значенням об'єкт
//     типу Student.
//     grades — об'єкт типу Record<string, Grades>, де ключем буде id студента, а значенням об'єкт
//     типу Grades, який зберігає оцінки студента за предметами.
interface UniversityRecord {
    students: Record<string, Student>,
    grades: Record<string, Grades>
}

// Створити декілька тестових записів UniversityRecord, додавши кілька студентів та їхні оцінки з різних
// предметів.
const universityRecord: UniversityRecord = {
    students: {
        "s1": { id: "1", name: "Alex", age: 19 },
        "s2": { id: "2", name: "Evgeniy", age: 20 },
        "s3": { id: "3", name: "Kate", age: 20 }
    },
    grades: {
        "s1": { Math: 90, Science: 80, Literature: 75, History: 90 },
        "s2": { Math: 60, Science: 70, Literature: 80, History: 85 },
        "s3": { Math: 80, Science: 90, Literature: 85, History: 80 }
    }
};
//     Написати функцію getStudentGrades, яка приймає universityRecord: UniversityRecord та studentId: string,
//     і повертає оцінки студента за предметами.
function getStudentGrades (universityRecord: UniversityRecord, studentId: string): Grades {
    const findingKey = (()=>{
        for (const key in universityRecord.students){
            if (universityRecord.students[key].id === studentId) return key
        }
    })()

    return universityRecord.grades.findingKey
}
//     Написати функцію getAverageGrade, яка приймає universityRecord: UniversityRecord та subject: Subject,
//     і повертає середню оцінку всіх студентів по зазначеному предмету.
