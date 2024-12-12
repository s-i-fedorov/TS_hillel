'use strict'
import User from "./user.js";
// Створи класи Student та Teacher, які успадковують клас User.
//
//     Клас Student:
//     Нові властивості:
//     courses (масив, за замовчуванням порожній).
// Нові методи:
//     enroll(course) — додає курс до списку студента.
//     Клас Teacher:
//     Нові властивості:
//     subjects (масив предметів, які викладає).
// Нові методи:
//     addSubject(subject) — додає предмет до списку викладача.
export default class Teacher extends User{
    courses = [];

    // constructor(name, email) {
    //     this.id = User.id
    //     User.id+=1
    //     this.name = name;
    //     this.email = email;
    // }

}
