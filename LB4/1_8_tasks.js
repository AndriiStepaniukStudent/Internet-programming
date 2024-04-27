//1 constructor
function CarConstructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

let car1 = new CarConstructor('Toyota', 'Camry', 2020);

//1 class
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}

let car2 = new Car('Honda', 'Accord', 2018);

//2
let car3 = Object.create(Car.prototype);
car3.brand = 'Ford';
car3.model = 'Focus';
car3.year = 2015;

let car4 = Object.create(Car.prototype);
car4.brand = 'Chevrolet';
car4.model = 'Cruze';
car4.year = 2017;

//3
function Person(name, surname, birthYear) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.getAge = function () {
        return new Date().getFullYear() - this.birthYear;
    };
    this.getFullName = function () {
        return `${this.name} ${this.surname}`;
    };
}

let person1 = new Person('John', 'Doe', 1985);
console.log(person1.getAge());
console.log(person1.getFullName());

//4
function Employee(name, surname, birthYear, position) {
    Person.call(this, name, surname, birthYear);
    this.position = position;
    let parentGetFullName = this.getFullName;
    this.getFullName = function () {
        return `${parentGetFullName.call(this)} - ${this.position}`;
    };
}

let employee1 = new Employee('Alice', 'Smith', 1990, 'Manager');
console.log(employee1.getFullName());

//5
function checkObjectClass(obj1, obj2) {
    let class1 = obj1.constructor.name;
    let class2 = obj2.constructor.name;
    console.log(`${class1} and ${class2} are instances of the same class.`);
}

//6
function ObservedPerson(person) {
    this.name = person.name;
    this.surname = person.surname;
    this.birthYear = person.birthYear;
    this.getAge = function () {
        console.log('getAge was called.');
        return new Date().getFullYear() - this.birthYear;
    };
    this.getFullName = function () {
        console.log('getFullName was called.');
        return `${this.name} ${this.surname}`;
    };
}

let observedPerson = new ObservedPerson(person1);

//7
class Shape {
    getArea() {
        throw new Error('getArea method must be implemented');
    }
    getPerimeter() {
        throw new Error('getPerimeter method must be implemented');
    }
}

//8
class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    getArea() {
        return this.side ** 2;
    }
    getPerimeter() {
        return 4 * this.side;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

let shapes = [
    new Square(5),
    new Circle(3)
];

shapes.forEach(shape => {
    console.log('Area:', shape.getArea());
    console.log('Perimeter:', shape.getPerimeter());
});
