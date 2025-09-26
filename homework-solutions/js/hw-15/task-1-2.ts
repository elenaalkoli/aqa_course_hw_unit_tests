// Необходимо создать классовую структуру
// 1. Создайте интерфейс IVehicle:
//   Методы:
//     - getDetails(): string — возвращает информацию о транспортном средстве.
//     - start(): string — возвращает строку "The vehicle is starting".

interface IVehicle {
    getDetails(): string; //в интерфейсах нет реализации методов!
    start(): string;
}

// 2. Создайте абстрактный класс Vehicle, который имплементирует IVehicle:
//   Реализуйте конструктор с полями:
//     - make (строка)
//     - model (строка)
//   Добавьте методы:
//     - start, возвращающего строку: "The vehicle {make} {model} is starting.".
//     - Абстрактный метод getDetails, который нужно реализовать в классах-наследниках.

abstract class Vehicle implements IVehicle {
    make: string;
    model: string;

    constructor (make: string, model: string) {
        this.make = make;
        this.model = model;
    }

    start():string {
        return `The vehicle ${this.make} ${this.model} is starting.`
    }
    abstract getDetails():string;

}
// 3. Создайте класс Car, который наследует Vehicle:
//     - Добавляет поле year (число).
//     - Реализует метода getDetails, возвращающего строку: "{make} {model}, {year}".

class Car extends Vehicle {
    year:number;

    constructor (make: string, model: string, year:number) {
        super(make, model);
        this.year = year;
    }
    getDetails():string {
        return `${this.make} ${this.model}, ${this.year}`
    }
    
}
// 4. Создайте объект класса Car и проверьте работоспособность

const newCar = new Car("Ford", "Focus", 1999);
console.log(newCar.getDetails());
console.log(newCar.start());
console.log(newCar.make);