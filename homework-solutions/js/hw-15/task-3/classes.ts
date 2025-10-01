import { IEnterprise } from "./types";
import { IDepartment } from "./types";

export class Enterprise implements IEnterprise { //1 предприятие
    public id: number;
    public name: string;
    public departments: Department[] = [];

    constructor ({id, name, departments} : IEnterprise) {
        this.id = id;
        this.name = name;
        this.departments = departments.map(dep => new Department(dep));//новый [] с объектами из класса Department
    };
      
      //добавить отдел
    public addDepartment(departmentName: string ): void {
      if (!departmentName.trim()) return;
      const newDepId = this.getNewDepertmentId();
      this.departments.push(new Department({id: newDepId, name: departmentName, employees_count: 0}))
    };

     private getNewDepertmentId():number {
      return this.departments.length ? Math.max(...this.departments.map(ent => ent.id)) + 1 : 1;
    };
    
    public editEnterpriseName(newName: string): void {
      this.name = newName;
    };
    
    public deleteDepartment(departmentId: number): void {
      const foundedDepartmentIndex = this.getDepartmentIndexById(departmentId);
        if(foundedDepartmentIndex === -1) {
          throw new Error("Отдел не найден");
        }
        if(this.departments[foundedDepartmentIndex].employees_count > 0) {
          throw new Error("Нельзя удалить отдел с сотрудниками");
        }
        this.departments.splice(foundedDepartmentIndex, 1);
      };

    private getDepartmentIndexById(departmentId: number): number {
      return this.departments.findIndex(dep => dep.id === departmentId);
    }

    public moveEmployees(fromId: number, toId: number): void {
      if (fromId === toId) return;
      const fromDep = this.getDepartmentById(fromId);
      const toDep = this.getDepartmentById(toId);
      if (!fromDep || !toDep) return;
      if (fromDep.employees_count === 0) return;

      toDep.addEmployeesCount(fromDep.employees_count);
      fromDep.removeEmployeesCount(fromDep.employees_count);
    };

    private getDepartmentById(departmentId: number): Department | undefined {
      return this.departments.find(dep => dep.id === departmentId);
    }

};

export class Department implements IDepartment { //1 отдел
    public id: number;
    public name: string;
    public employees_count: number;

    constructor({id, name, employees_count}: IDepartment) {
        this.id = id;
        this.name = name;
        this.employees_count = employees_count;
    }

    public addEmployeesCount(count: number): void {
      if (count > 0) {
      this.employees_count += count;
      }
    };
  
    public removeEmployeesCount(count: number): void {
      if (count > 0) {
        this.employees_count -= count;
      }
    };

    public editName(newName: string): void {
      this.name = newName;
    };
};

export class EnterprisesManager { //каталог компании, методы работают с [] предприятий
    public enterprises: Enterprise[] = [];

       constructor(newEnterprises: IEnterprise[] = []) {
        this.enterprises = newEnterprises.map(ent => new Enterprise(ent));
    }

    //добавить новое предприятие 
    public addEnterprise(newName: string):void {
        if(!newName.trim()) return;
        const newId = this.getNewEnterpriseId();
        const newEnterprise = new Enterprise({id: newId, name: newName, departments: []});
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
        typeof idOrName === 'number' ? dep.id === idOrName : dep.name === idOrName
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