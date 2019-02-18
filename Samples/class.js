class Employee {
    constructor (id, name) {
        this.id = id;
        this.name = name;
    }

    display () {
        console.log (`ID: ${this.id} and Name: ${this.name}`);
    }
}

class Manager extends Employee {
    constructor (id, name, dept) {
        super (id, name);
        this.dept = dept;
    }

    display () {
        super.display();
        console.log (`ID: ${this.id} and Name: ${this.name} and Department: ${this.dept}`);
    }
}

let emp1 = new Employee(1, "Guru1");
let emp2 = new Employee(2, "Guru2");
let emp3 = new Employee(3, "Guru3");
let emp4 = new Employee(4, "Guru4");

emp1.display();
emp2.display();
emp3.display();
emp4.display();

let man1 = new Manager(10, 'Manager', 12);

man1.display();

import {greet} from './util'
greet();