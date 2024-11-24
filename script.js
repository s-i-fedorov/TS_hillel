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

// function getStudentGrades (universityRecord, studentId) {
//     const findKey = Object.keys(universityRecord.students).
//         find(item=>universityRecord.students[item].id === studentId)
//
//     return universityRecord.grades[findKey]
// }

function getStudentGrades (universityRecord, studentId) {
    const findKey = (() => {
        for (const key in universityRecord.students) {
            if (universityRecord.students[key].id === studentId) return key
        }
    })()


    return universityRecord.grades[findKey]
}

function getAverageGrade (universityRecord, subject) {
    const valuesArr = Object.values(universityRecord.grades)
    console.log(valuesArr)
    const result = valuesArr.reduce((acc, item)=>{
        return acc + item[subject];
    },0)/valuesArr.length
    console.log(result)
    // return 1
}
// getStudentGrades(universityRecord, '3')
// console.log(universityRecord.grades.s3);

// console.log(getStudentGrades(universityRecord, '3'));
console.log('-------------------')
getAverageGrade(universityRecord, 'Math')

const arr = [1, 2, 3, 4, 5]
const avNum = arr.reduce((acc,item, index, array)=>{
    return acc+item
})
// console.log(avNum);