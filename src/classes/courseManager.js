'use strict'

// Створи клас CourseManager, який керує всією системою:
//
//     Властивості:
//         Масиви: users, courses.
//             Методи:
// addUser(user) — додає користувача (викладача або студента) до системи.
// addCourse(course) — додає курс до системи.
// assignTeacherToCourse(courseId, teacherId) — призначає викладача до курсу.
// enrollStudentToCourse(courseId, studentId) — записує студента на курс.


import User from "./user.js";
import Teacher from "./teacher.js";

export default class CourseManager {
    #users = [];
    #courses = [];

    // constructor(name, teacher) {
    //     this.#validateTeacher(teacher)
    //     this.id = Course.id
    //     Course.id+=1
    //     this.name = name;
    //     this.teacher = teacher;
    // }

    #validateTeacher(teacher){
        if (!(teacher instanceof Teacher))
            throw new Error('This person is not a teacher')
    }
    addUser(user, email){
        new User(user, email)
    }
// addCourse(course) — додає курс до системи.
// assignTeacherToCourse(courseId, teacherId) — призначає викладача до курсу.
// enrollStudentToCourse(courseId, studentId) — записує студента на курс.

}
