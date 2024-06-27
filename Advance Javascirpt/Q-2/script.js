/**
 * (Q) Create a constructor Employee that inherits from the Person constructor of problem 1. Add an additional  property designation and a method getDetails to display the employee details
 */
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

function Employee(name, age, designation) {
    Person.call(this, name, age); // Call the Person constructor with the Employee context
    this.designation = designation;
}

// Set up inheritance
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getDetails = function () {
    console.log(`Name: ${this.name}, Age: ${this.age}, Designation: ${this.designation}`);
}

let employee = new Employee('Silu', 20, 'Software Engineer');
employee.sayHello();
employee.getDetails();