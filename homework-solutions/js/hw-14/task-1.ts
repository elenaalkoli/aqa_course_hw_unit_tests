
// 1. Создайте дженерик функцию wrapInArray, которая принимает значение любого типа и возвращает его в 
// виде массива этого типа.
    function wrapInArray<T>(value: T): T[]{
      return [value];
    }

    const numberArray = console.log(wrapInArray(5)); // [5]
    const stringArray = console.log(wrapInArray('Hello')); // ['Hello']

// 2. Создайте дженерик функцию getLastElement, которая принимает массив элементов типа T,
// и возвращает последний элемент (типа T).

    function getLastItem<T> (array: T[]): T | undefined { //undefined на случай пустого []
      if (array.length) {
        return array[array.length -1];
      }
      else {
        return undefined;
      }
    }

    console.log(getLastItem([1, 2, 3, 4])); // 4
    console.log(getLastItem(['a', 'b', 'c'])); // 'c'
    console.log(getLastItem([]));


// 3. Создайте дженерик интерфейс IPair, который принимает два типа T и U и содержит поля first: T и second: U. 
//    Реализуйте функцию, принимающую IPair и возвращающую строку, описывающую пару.

    interface IPair<T, U> {
        first: T;
        second: U;
    }

    function describePair<T, U> ({first, second}: IPair<T, U>): string {
      return `${first} and ${second}`
    }

    console.log(describePair({ first: 'Alice', second: 30 })); // "Alice and 30"
    console.log(describePair({ first: 10, second: true }));