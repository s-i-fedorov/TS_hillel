'use strict'

// Крок 3: Клас Course
// Створи клас Course, який містить:
//
//     Властивості:
//         id (унікальний ідентифікатор, генерується автоматично).
//         name (назва курсу).
//          teacher (об’єкт класу Teacher, який викладає курс).
//          приватну властивість students (масив студентів, записаних на курс).
//      Методи:
//          addStudent(student) — додає студента до курсу.
//          removeStudent(studentId) — видаляє студента з курсу за його id.
//          listStudents() — повертає список студентів на курсі.

import User from "./user";

export default class Course {
    static id = 0;
    name = null;
    teacher = null;
    #students = [];

    constructor(name, teacher) {
        this.id = Course.id
        Course.id+=1
        this.name = name;
        this.teacher = teacher;
    }

    addStudent(student){
        if(!(student instanceof User)) return;
        this.#students.push(student)
    }
    removeStudent(studentId){
        if( typeof(studentId) !== "number")
            throw new Error('student id should be a number')
        const studentIndex = this.#students.findIndex(studentId)
        this.#students.splice(studentIndex, 1)
    }
    get listStudents(){
        return this.#students
    }

}
