"use strict";
const universityRecord = {
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
function getStudentGrades(universityRecord, studentId) {
    const findKey = Object.keys(universityRecord.students).
        find(item => universityRecord.students[item].id === studentId);
    if (!findKey)
        return console.error('student was not find');
    return universityRecord.grades[findKey];
}
//     Написати функцію getAverageGrade, яка приймає universityRecord: UniversityRecord та subject: Subject,
//     і повертає середню оцінку всіх студентів по зазначеному предмету.
function getAverageGrade(universityRecord, subject) {
    const valuesArr = Object.values(universityRecord.grades);
    const result = valuesArr.reduce((acc, item) => {
        return acc + item[subject];
    }, 0);
    return result / valuesArr.length;
}
console.log(getStudentGrades(universityRecord, '3'));
getAverageGrade(universityRecord, 'Math');
