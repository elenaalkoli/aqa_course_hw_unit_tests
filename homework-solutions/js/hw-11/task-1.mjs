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
    if (!value || typeof value !== 'string' || value.trim() === '') {
      throw new Error("Please provide a valid string");
    }
    this._firstName = value;
  };
  
  set lastName(value) {
   if (!value || typeof value !== 'string' || value.trim() === '') {
      throw new Error("Please provide a valid string");
    }
    this._lastName = value;
  };
  
  set profession(value){
   if (!value || typeof value !== 'string' || value.trim() === '') {
      throw new Error("Please provide a valid string");
    }
    this._profession = value;
  };

  set salary(value){
    if (!value || typeof value !== 'number' || value < 0) {
       throw new Error("Please provide a valid number");
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
      throw new Error (`${employee} is not an instanse of Employee`)
    }
  };

  getEmployees() {
    return [...this.#employees];
  }

  getInfo() {
    return `Компания: ${this._title}\nАдрес: ${this._address}\nКоличество сотрудников: ${this.#employees.length}`
  }
}

// const company = new Company('Tech Corp', 123456, 'Main Street');
// const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
// const emp2 = new Employee('Barbara', 'Johnson', 'QA', 2500);
// company.addEmployee(emp1);
// company.addEmployee(emp2);
// console.log(company.getEmployees()); // [Employee, Employee]
// console.log(company.getInfo());

export { Employee, Company };
