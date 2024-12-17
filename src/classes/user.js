'use strict'
export default class User {
    static #id = 0;
    name = null;
    email = null;
    #password = null;
    constructor(name, email) {
        this.id = User.#id
        User.#id+=1
        this.name = name;
        this.email = email;
    }

    set changePassword(pass){
        if(typeof(pass)!== 'string') return;
        this.#password = atob(pass);
    }
    get info(){
        return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}`
    }
}
