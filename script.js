'use strict'
const universityRecord = {
    students: {
        "s1": { id: "1", name: "Alice Johnson", age: 20 },
        "s2": { id: "2", name: "Bob Smith", age: 22 },
        "s3": { id: "3", name: "Charlie Brown", age: 19 }
    },
    grades: {
        "s1": { Math: 95, Science: 88, Literature: 76, History: 90 },
        "s2": { Math: 68, Science: 72, Literature: 80, History: 85 },
        "s3": { Math: 89, Science: 92, Literature: 91, History: 87 }
    }
};

// const uRarray = Object.entries(universityRecord.students)
// const findingKey = Object.entries(universityRecord.students).
//                     find(([key, student])=> student.id === '3')[0]

// const findingKey = (()=>{
//     for (const key in universityRecord.students) {
//     if (universityRecord.students[key].id === '3') return key
// }
// })()

// const a = (()=>'hello')()
// console.log(a)

// console.log(findingKey);
// console.log(uRarray);
// console.log(universityRecord.students.s3.id);

function getStudentGrades (universityRecord, studentId) {
    const findingKey = (()=>{
        for (const key in universityRecord.students){
            if (universityRecord.students[key].id === studentId) return key
        }
    })()

    return universityRecord.grades.findingKey
}
getStudentGrades(universityRecord, '3')
// console.log(universityRecord.grades.s3);

// console.log(getStudentGrades(universityRecord, '3'));