class Employee {
 #salary; 
  constructor (firstName, lastName, salary){
    this._firstName = firstName;
    this._lastName = lastName;
    this.#salary = salary;
  }

  get firstName (){
    return this._firstName;
  };
  
  get lastName() {
   return this._lastName;
  };

  get salary (){
    return this.#salary;
  };

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

class Developer extends Employee {
  constructor (firstName, lastName, salary, programmingLanguages = []) {
    super(firstName, lastName, salary);
    this._programmingLanguages = programmingLanguages;
  }

  get programmingLanguages() {
    return [...this._programmingLanguages]; //вернем копию массива
  }

   addProgrammingLanguage(language) {
    if (!language || typeof language !== 'string'|| language.trim() === '') {
      throw new Error("Please provide a valid programming language");
    } else {
      this._programmingLanguages.push(language);
    }
    }
   }

class Manager extends Employee {
  constructor (firstName, lastName, salary, teamSize) {
    super(firstName, lastName, salary);
    this._teamSize = teamSize;
  }

  get teamSize () {
    return this._teamSize;
  }

  set teamSize (value) {
    if (typeof value !== 'number' || value < 0) {
      throw new Error("Please provide a valid team size")
    }
    else {
      this._teamSize = value;
    }
  }

 increaseTeamSize() {
    this._teamSize++;
  }
}

class Designer extends Employee {
  constructor (firstName, lastName, salary, designTools = []) {
    super(firstName, lastName, salary);
    this._designTools = designTools;
}

get designTools () {
  return [...this._designTools];
}

addDesignTool(tool) {
    if (!tool || typeof tool !== 'string' || tool.trim() === '') {
    throw new Error("Please provide a valid design tool");
  } else {
    this._designTools.push(tool);
  }
  }
}

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

    //добавлена проверка уникальности имя + фамилия
    addEmployee(employee){
      if (!(employee instanceof Employee)) {
        throw new Error (`${employee.getFullName()} is not an instance of Employee`)
      }
      const isFullNameUnique = this.#employees.some(emp => emp.getFullName() === employee.getFullName());//хотя бы 1
      if (isFullNameUnique) {
        throw new Error (`${employee.getFullName()} already exist`)
      } else {
        this.#employees.push(employee)
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

  getEmployeesByProfession(profession) {
    if (!profession || typeof profession !== 'string') {
      throw new Error("Please provide a valid profession");
    }
    return this.#employees.filter(obj => obj.constructor.name === profession);
}
};

const dev1 = new Developer('Alex', 'Dev1', 2000, ['JS', 'TS']);
const mng1 = new Manager('Michael', 'Mng1', 3000, 10);
const des1 = new Designer('Olga', 'Des1', 5000, ['3d-modeling', 'Figma']);
const des2 = new Designer('Olga', 'Des1', 6000, ['3d-modeling']);

const comp1 = new Company("MyCompany", "123-456", "Some Address");

comp1.addEmployee(dev1);
comp1.addEmployee(mng1);
comp1.addEmployee(des1);
comp1.addEmployee(des2);

const devs = console.log(comp1.getEmployeesByProfession('Developer'));
const qas = console.log(comp1.getEmployeesByProfession('QA'));

export { Employee, Company, Designer, Developer, Manager };
