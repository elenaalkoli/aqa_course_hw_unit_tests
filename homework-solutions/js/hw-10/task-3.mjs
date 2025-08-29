/*
  Создайте функцию, принимающую число n, которая при каждом вызове будет
  генерировать случайное число [1 - n] включительно. 
  Условие - каждый следующий вызов должен давать новое число (не встречавшееся в прошлых вызовах). 
  И так пока не переберутся все n чисел. На n + 1 вызов и
  далее функция должна возвращать 'All numbers were received'. 
  Задачу решить через замыкания
  Например n = 5, функция выведет 5 чисел 1-5, а после будет выводить сугубо 'All numbers were received'

  Рекоммендации:
   - Для генерации числа в границах воспользуйтесь методом:
      function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }

*/

// генерировать случайный индекс массива с числами от 1 до n.
// взять число из массива, удалить его, чтобы больше не повторялось.
// если массив пустой - вернуть "All numbers were received".

// function createGenerator(numberOfValues = 0) {
//   //хранить либо:
//   //1. уже вернутые значения (смотреть сюда, если сгенерированное число уже возвращалось - генерируем снова)
//   //2. создаем все числа, а при возврате - выбираем рандомное, возвращаем его, и удаляем из нашего сохраненного списка
//   return () => {
//     return; //new value
//   };
// }

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function uniqueRandomGenerator(n) {
  let arr = [];
  for (let i = 1; i <= n; i++){
    arr.push(i);
  }
  return function(){
    if(arr.length === 0){
      return "All numbers were received";
    }
    const randomIndex = getRandomArbitrary(0, arr.length);//случайный индекс из массива
    const randomNumber = arr[randomIndex];
    arr.splice(randomIndex, 1);
    return randomNumber; //вернем удаленный эл-т
  }
}
//анонимная function() помнит про переменную arr, и каждый вызов использует тот же массив

// const generator = uniqueRandomGenerator(5);
// console.log(generator()); 
// console.log(generator()); 
// console.log(generator()); 
// console.log(generator()); 
// console.log(generator()); 
// console.log(generator()); 

export { uniqueRandomGenerator };
