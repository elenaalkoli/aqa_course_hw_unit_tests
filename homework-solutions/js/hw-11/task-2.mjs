class Employee {
  #salary; 
  constructor (firstName, lastName, profession, salary){
    this._firstName = firstName;
    this._lastName = lastName;
    this._profession = profession;
    this.#salary = salary;
  }

  //get для firstName, lastName, profession, #salary
  get firstName (){
    return this._firstName;
  };
  
  get lastName() {
   return this._lastName;
  };

  get profession(){
   return this._profession;
  };

  get salary (){
    return this.#salary;
  };

  //set для firstName, lastName, profession, #salary
  set firstName(value){
    if (!value || typeof value !== 'string' || value.length < 2 || value.length > 50 || !/^[A-Za-z]+$/.test(value)) {
      throw new Error("Please provide a valid firstName (2-50 letters, only Latin)");
    }
    this._firstName = value;
  };
  
  set lastName(value) {
   if (!value || typeof value !== 'string' || value.length < 2 || value.length > 50 || !/^[A-Za-z]+$/.test(value)) {
      throw new Error("Please provide a valid lastName (2-50 letters, only Latin)");
    }
    this._lastName = value;
  };
  
  set profession(value){
   if (!value || typeof value !== 'string' || value.trim() === '' || !/^[A-Za-z\s]+$/.test(value)) {
      throw new Error("Please provide a valid profession (only Latin letters and spaces)");
    }
    this._profession = value;
  };

  set salary(value){
    if (!value || typeof value !== 'number' || value <= 0 || value >= 10000) {
       throw new Error("Please provide a valid salary (0 < salary < 10000)");
    } 
    this.#salary = value;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
}
}

// const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
// console.log(emp1.firstName); // "John"
// emp1.salary = 3100;
// console.log(emp1.salary); // 3100

class Company {
  #employees = []; 
  constructor (title, phone, address){
    this._title = title;
    this._phone = phone;
    this._address = address;
  }

  get title() {
    return this._title;
  };
  
  get phone() {
    return this._phone;
  };

  get address() {
    return this._address;
  };

  addEmployee(employee){
    if (employee instanceof Employee) {
      this.#employees.push(employee)
    }
    else {
      throw new Error (`${employee} is not an instance of Employee`)
    }
  };

  getEmployees() {
    return [...this.#employees];
  }

  getInfo() {
    return `Company: ${this._title}\nAddress: ${this._address}\nTotal employees: ${this.#employees.length}`
  }

  findEmployeeByName(firstName) {
    if (!firstName || typeof firstName !== 'string' || firstName.length < 2 || firstName.length > 50 || !/^[A-Za-z]+$/.test(firstName)) {
      throw new Error("Please provide a valid firstName (2-50 letters, only Latin)");
    }
    let foundedObject = this.#employees.find((obj) => obj.firstName === firstName);
    if (!foundedObject){
      throw new Error(`Employee with "${firstName}" not found`);
    }
    return foundedObject;
  }

  removeEmployee(firstName) {
    let index = this.getEmployeeIndex(firstName);
    if (index !== -1) {
    this.#employees.splice(index, 1)
    } 
    else {
      throw new Error(`Employee with "${firstName}" not found`);
    }
  };

  getEmployeeIndex(firstName) {
     if (!firstName || typeof firstName !== 'string' || firstName.length < 2 || firstName.length > 50 || !/^[A-Za-z]+$/.test(firstName)) {
      throw new Error("Please provide a valid firstName (2-50 letters, only Latin)");
    }
    return this.#employees.findIndex((obj, _ind, _arr) => obj.firstName === firstName);
  };

  getTotalSalary() {
      return this.#employees.reduce((acc, obj, _ind, _arr) => acc + obj.salary, 0);
  };
}

const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Jane', 'Smith', 'Manager', 5000);
const emp3 = new Employee('Mark', 'Brown', 'Designer', 4000);

const company = new Company('Tech Corp', '123-456', 'Main Street');
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);

console.log(company.getTotalSalary()); // 12000
console.log(company.findEmployeeByName('Jane')); // Employee { firstName: 'Jane', ... }
company.removeEmployee('John');
console.log(company.getEmployees()); // [Employee, Employee]

export { Employee, Company };
