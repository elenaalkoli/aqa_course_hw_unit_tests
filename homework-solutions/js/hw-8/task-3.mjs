/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/


function findMissingNumber(arr = []) { 
  if (!arr || !Array.isArray(arr)) {
    return [];
  }
  const sortedArr = arr.sort((a,b) => a - b);

  if (sortedArr[0] !== 1) { //если вначале
    return 1
  };
  const missingItem = sortedArr.find((el, i, arr) => i > 0 && (el - arr[i-1]) > 1) //find вернет первый truthy-эл-т
  if (missingItem) {
    return missingItem - 1;     //в середине
  } else return sortedArr[sortedArr.length - 1] + 1; //тогда в конце
  };

console.log(findMissingNumber([5,2,7,3,8,1,6]));

export { findMissingNumber };