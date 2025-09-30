// Task 3. Перед вами структура компании, и ниже представлены задания, относящиеся к ней.
// Реализовать на классах структуру и методы (придумать доп.методы, приватные хелперы и тд).

const enterprises = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ],
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ],
  },
  {
    id: 9,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ],
  },
];

// Задания:
// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. 
// Для предприятия посчитать сумму всех сотрудников во всех отделах.

// **Пример:**

// Предприятие 1 (45 сотрудников)
// - Отдел тестирования (10 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Администрация (15 человек)
// Предприятие 2 (75 сотрудников)
// - Отдел разработки (50 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Отдел охраны труда (5 сотрудников)
// Предприятие 3 (нет сотрудников)
// - Отдел аналитики (нет сотрудников)

// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела
//  и возвращать предприятие, к которому относится).

// Пример:
// getEnterpriseName(4)
// getEnterpriseName("Отдел маркетинга")

// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает 
// название предприятия

// Пример:
// addEnterprise("Название нового предприятия")

// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента 
// принимает id предприятия, в которое будет добавлен отдел и название отдела.

// Пример:
// addDepartment(1, "Название нового отдела")

// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента 
// id предприятия и новое имя предприятия.

// Пример:
// editEnterprise(1, "Новое название предприятия")

// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id 
// отдела и новое имя отдела.

// Пример:
// editDepartment(7, "Новое название отдела")

// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

// Пример:
// deleteEnterprise(1)

// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. 
// Удалить отдел можно только, если в нем нет сотрудников.

// Пример:
// deleteDepartment(3)

// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. 
// В качестве аргумента принимает два значения: id отдела, из которого будут переноситься 
// сотрудники и id отдела, в который будут переноситься сотрудники).

// Пример:
// moveEmployees(2, 3)



class Enterprise { //1 предприятие
    public id: number;
    public name: string;
    public departments: Department[] = [];

    constructor (id: number, name: string, departments: {id: number, name: string, employees_count: number}[]) {
        this.id = id;
        this.name = name;
        this.departments = departments.map(
            dep => new Department(dep.id, dep.name, dep.employees_count)
        );//новый [] с объектами из класса Department
    };
      
      //добавить отдел
    public addDepartment(departmentName: string ): void {
      const newDepId = this.getNewDepertmentId();
      this.departments.push(new Department(newDepId, departmentName, 0))
    };

     private getNewDepertmentId():number {
      return this.departments.length ? Math.max(...this.departments.map(ent => ent.id)) + 1 : 1;
    };
    
    editEnterpriseName(newName: string): void {
      this.name = newName;
    };
    
    deleteDepartment(departmentId: number): void {
      const foundedDepartmentIndex = this.getDepartmentIndexById(departmentId);
        if(foundedDepartmentIndex === -1) return
        if(this.departments[foundedDepartmentIndex].employees_count === 0) {
          this.departments.splice(foundedDepartmentIndex, 1);
        }
        else return;
      };

    private getDepartmentIndexById(departmentId: number): number {
      return this.departments.findIndex(dep => dep.id === departmentId);
    }

    public moveEmployees(fromId: number, toId: number): void {
      const fromDep = this.getDepartmentById(fromId);
      const toDep = this.getDepartmentById(toId);
      if (!fromDep || !toDep) return;
      toDep.addEmployeesCount(fromDep.employees_count);
      fromDep.removeEmployeesCount(fromDep.employees_count);
    };

    private getDepartmentById(departmentId: number): Department | undefined {
      return this.departments.find(dep => dep.id === departmentId);
    }

};

class Department { //1 отдел
    public id: number;
    public name: string;
    public employees_count: number;

    constructor(id: number, name: string, employees_count: number) {
        this.id = id;
        this.name = name;
        this.employees_count = employees_count;
    }

    addEmployeesCount(count: number): void {
      if (count > 0) {
      this.employees_count += count;
      }
    };
  
    removeEmployeesCount(count: number): void {
      if (count > 0) {
        this.employees_count -= count;
      }
    };

    editName(newName: string): void {
      this.name = newName;
    };
};

class EnterprisesManager { //каталог компании, методы работают с []предприятий
    enterprises: Enterprise[] = [];

       constructor(newEnterprises: typeof enterprises = []) {
        this.enterprises = newEnterprises.map(
            ent => new Enterprise(ent.id, ent.name, ent.departments)
        );
    }

    //добавить новое предприятие 
    public addEnterprise(newName: string):void {
        if(!newName) return;
        const newId = this.getNewEnterpriseId();
        const newEnterprise = new Enterprise(newId, newName, []);
        this.enterprises.push(newEnterprise);
    };

    private getNewEnterpriseId():number{
        return this.enterprises.length ? Math.max(...this.enterprises.map(ent => ent.id)) + 1 : 1;
    }

    //удалить предприятие по id
    public deleteEnterprise(id:number):void {
        const index = this.foundEnterpriseIndexById(id);
        if (index !== -1) {
            this.enterprises.splice(index,1);
        }
    };

    private foundEnterpriseIndexById (id:number): number {
        return this.enterprises.findIndex(ent => ent.id === id); //если не найдет вернет -1
    };

    //получить предприятие по id или имени
    public getEnterpriseByIdOrName(idOrName: number | string): Enterprise | undefined {
        return this.enterprises.find(ent => ent.departments.some(dep =>
        (typeof idOrName === 'number' && dep.id === idOrName) || 
        (typeof idOrName === 'string' && dep.name === idOrName)
        ));
    };

    //печать инфо
    public printAll(): void {
        this.enterprises.forEach(ent => {
            const totalEmployees = this.getTotalEmployees(ent);
            console.log(`${ent.name} (${totalEmployees ? totalEmployees + ' сотрудников' : 'нет сотрудников'})`);
            ent.departments.forEach(dep => 
                console.log(`- ${dep.name} (${dep.employees_count ? dep.employees_count + ' сотрудников' : 'нет сотрудников'})`))
        });
    };

    //кол-во сотрудников для 1 предприятия
    private getTotalEmployees (ent : Enterprise) : number {
        return ent.departments.reduce((accum, dep) => dep.employees_count + accum, 0)
    }; 

    // добавлять отдел в предприятие по id
    public addDepartmentById(enterpriseId: number, DepartmentName: string): void {
        const foundedEnterprise = this.foundEnterpriseById(enterpriseId);
        if(foundedEnterprise) {
          foundedEnterprise.addDepartment(DepartmentName);
        }
        else return;
    };

    private foundEnterpriseById (enterpriseId: number): Enterprise | undefined {
      return this.enterprises.find(ent => ent.id === enterpriseId);
    }
  
};
// const newEnt = new EnterprisesManager(enterprises);
// const foundedEnt = newEnt.getEnterpriseByIdOrName('Отдел маркетинга');
// console.log(foundedEnt);
// newEnt.printAll();

