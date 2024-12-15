'use strict'
import User from "../classes/user.js";
import Student from "../classes/student.js";
import Teacher from "../classes/teacher.js";
import Course from "../classes/course.js";


const serg = new User('serhii','serg@gmail.com')
const miha = new User('miha','miha@gmail.com')
const leoTeach = new Teacher('leo', 'leo@mao.com')
leoTeach.addSubject('math')
leoTeach.addSubject('bio')
console.log(serg)
console.log(serg.info);
console.log(miha.info);
console.log(leoTeach);