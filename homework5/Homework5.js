// 1. 
function propsCount(currentObject) {
    return Object.entries(currentObject).length;
}

let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development",
};

console.log(propsCount(mentor)); // 3

// 2.
let myObject = {
    name: "MyName",
    surname: "MySurName",
    age: "MyAge",
    city: "MyCity",
    country: "MyCountry",
};

function showProps(obj) {
    console.log(Object.keys(obj));
    console.log(Object.values(obj));
}

showProps(myObject);

// 3.
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        return this.name + " " + this.surname;
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    showFullName(midleName) {
        return this.name + " " + midleName + " " + this.surname;
    }
    showCourse() {
        const currentYear = new Date().getFullYear();
        const course = currentYear - this.year;
        if (7 > course > 0) {
            return "Current course: " + course;
        } else {
            return "Incorrect data. Please check the year!";
        }
    }
}

let person = new Person("Kate", "Sotnykova");
console.log(person.showFullName());

let student = new Student("Kate", "Sotnykova", 2020);
console.log(student.showFullName("Mykhailivna"));
console.log(student.showCourse());

// 4.
let workers = [];

class Worker {
    #experience = 1.2;

    set setExp(value) {
        this.#experience = value;
    }
    get showExp() {
        return this.#experience;
    }

    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        workers.push(this);
    }
    showSalary() {
        return this.dayRate * this.workingDays;
    }
    showSalaryWithExperience() {
        return this.dayRate * this.workingDays * this.#experience;
    }
    sortSalaries(workers) {
        let sortedSalary = workers.sort(function (a, b) {
            return a.showSalaryWithExperience() - b.showSalaryWithExperience();
        });
        for (let i = 0; i < sortedSalary.length; i++) {
            console.log(sortedSalary[i].fullName + ": " + sortedSalary[i].showSalaryWithExperience()
            );
        }
    }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
console.log(worker1.showSalary());
console.log("New experience: " + worker1.showExp);
console.log(worker1.showSalaryWithExperience());
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
console.log(worker1.showSalaryWithExperience());

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
console.log(worker2.showSalary());
console.log("New experience: " + worker2.showExp);
console.log(worker2.showSalaryWithExperience());
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
console.log(worker2.showSalaryWithExperience());

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
console.log(worker3.showSalary());
console.log("New experience: " + worker3.showExp);
console.log(worker3.showSalaryWithExperience());
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
console.log(worker3.showSalaryWithExperience());

worker3.sortSalaries(workers);

// 5. 
class GeometricFigure {
    getArea() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
    }
    getArea() {
        return this.a * this.b / 2;
    }
}

class Square extends GeometricFigure {
    constructor(a) {
        super();
        this.a = a;
    }
    getArea() {
        return Math.pow(this.a, 2);
    }
}

class Circle extends GeometricFigure {
    constructor(r) {
        super();
        this.r = r;
    }
    getArea() {
        return (Math.PI * Math.pow(this.r, 2));
    }
}

function handleFigures(figures) {
    let sumArea = '';
    let figuresArea = 0;
    for (let i = 0; i < figures.length; i++) {
        sumArea += 'Geometric figure:  ' + figures[i].toString() + ' - area: ' + figures[i].getArea() + '\n'
        figuresArea += figures[i].getArea()
    }
    sumArea += 'All figures area:' + figuresArea;
    return sumArea;
}

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(handleFigures(figures));
