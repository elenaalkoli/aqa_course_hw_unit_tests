/*
Перед вами массив чисел [7, 8, 2, 30, 85, 95, 77, 94, 37, 31], используя методы массивов сделайте следующее:
  1. forEach - присвойте массив в котором все числа делящиеся без остатка на 3 // [30]
  2. map - присвойте массив в котором из каждого элемента изначального массива вычли длину изначального массива 
     // [-3, -2, -8, 20, 75, 85, 67, 84, 27, 21]
  3. filter - создайте новый массив, в который войдут лишь значения, которые больше предыдущего
     // [8, 30, 85, 95, 94]
  4. find - присвойте элемент, равный своему индексу //2
  5. sort - отсортируйте массив по возрастанию, не изменив изначальный 
     // [2, 7, 8, 30, 31, 37, 77, 85, 94, 95]
  6. reduce - получите сумму всех чисел массива //466
  7. some - проверьте, есть ли в массиве элементы больше 90 //true
  8. every - проверьте, что все элементы массива двухзначные //false
*/
const numbers = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31];

let forEach;
forEach = [];
numbers.forEach((el) => {
   if (!(el % 3)) 
      forEach.push(el); {
   }
   });
console.log(forEach);

let map;
map = numbers.map((el, i, arr) => el - arr.length);
console.log(map);

let filter;
filter = numbers.filter((el, i, arr) => i > 0 && (el > arr[i - 1]));
console.log(filter);

let find;
find = numbers.find((el, i, arr) => el === arr.indexOf(el));
console.log(find);

let sort;
sort = numbers.sort((a,b) => a - b);
console.log(sort);

let reduce;
reduce = numbers.reduce((res, el, i, arr) => res + el ,0)
console.log(reduce);

let some;
some = numbers.some(el => el > 90);
console.log(some);

let every;
every = numbers.every(el => el >= 10 && el <= 99);
console.log(every);

export { forEach, map, filter, find, sort, reduce, some, every };
