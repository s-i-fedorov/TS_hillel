'use strict'
import User from "./user.js";

//     Клас Student:
//     Нові властивості:
//     courses (масив, за замовчуванням порожній).
// Нові методи:
//     enroll(course) — додає курс до списку студента.

export default class Student extends User{
    courses = [];

    enroll(course){
        this.courses.push(course)
    }

}
