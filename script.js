'use strict'

function BankAccount(name,age,phone){
    let currentBalance = 0;
    this.abName = name;
    this.age = age;
    this.phone = phone;

    this.deposit = function (sum){
        currentBalance = currentBalance + sum;
    }

    this.withdraw = function (sum){
        currentBalance = currentBalance - sum;
    }

    this.getBalance = function (){
        return currentBalance;
    }

}
let user = new BankAccount('Serhii',36, '0931111111');



user.deposit(10)
user.withdraw(1)
user.deposit(3)
console.log(user.getBalance())




