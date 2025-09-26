// 1. Создайте интерфейс IEmployee {name: string, salary: number, isManager: boolean } и 
// объект QA: IEmployee
interface IEmployee {
    name: string, 
    salary: number, 
    isManager: boolean,
}

const QA:IEmployee = {
    name: "Elena", 
    salary: 5000, 
    isManager: true,
}

// 2. Создайте тип EmployeeKeys, который будет юнионом названий ключей IEmployee (использовать keyof)
type EmployeeKeys = keyof IEmployee; //тип - это названия ключей "name" | "salary" | "isManager"
// const k: EmployeeKeys = "name"; // ок
// const k2: EmployeeKeys = "age"; // ошибка — такого ключа нет

// 3. Создайте тип QaKeys, который будет содержать лишь ключи объекта QA(использовать keyof и typeof)
type QaKeys =  keyof typeof QA;
const testKey: QaKeys = "name";

// 4. Создайте тип UserType из объекта QA (используйте typeof)
type UserType = typeof QA; // получим тип из значений объекта === IEmployee. НО если {} as const -> 
// все поля будут readonly и литеральные 

// 5. Создайте тип, в котором все поля интерфейса IEmployee будут необязательными
type PartialKeys = Partial<IEmployee>;

// 6. Создайте тип, который будет содержать поля name и salary из интерфейса IEmployee
type NameAndSalary = Pick<IEmployee, "name" | "salary">;

// 7. Создайте тип, который будет держать все поля из интерфейса IEmployee, кроме isManager
type WithoutManager = Omit<IEmployee, "isManager">;

// 8. Создайте тип, который будет содержать все поля из интерфейса IEmployee и сделает их 
// неизменяемыми (readonly)
type RequiredReadonlyKeys = Required<IEmployee>;

// 9. Создайте объект с помощью Record, в ключах которого будут строки, а в значениях - 
// ключи объекта QA (Используйте Record, keyof, typeof)
const object: Record<string, keyof typeof QA> = {
    name: "name", 
    salary: "salary",
    isManager: "isManager",
}