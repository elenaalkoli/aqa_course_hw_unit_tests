/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arr) { // принимаем все массивы на вход -> ...rest
  const newArr = [];
  for (const innerArr of arr) { //перебираем каждый пришедший массив
    if (Array.isArray(innerArr)){ //проверим каждый эл-т массив или нет
      newArr.push(...innerArr); // разворачиваем его в новый массив
    }
    else console.log(`${innerArr} — не массив, пропущен`);
  }
  return newArr;
}
console.log(mergeArrays([1,2], [3,4], [5,6]));

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  if (!sentence || typeof sentence !== 'string') {
    console.log('please provide a valid string');
    return ''; //если придет пустая строка, ф-ция вернет undefined
  }
    const newString = sentence.split(" ").filter((el) => el !== ''); //делим строку по пробелу и убираем пустые строки-элементы сразу - получаем массив из слов
    for (let i = 0; i < newString.length; i++) {
      if (newString[i] === '') continue; //пропустим пустые строки 
      if (i === 0){
        newString[i] = newString[i][0].toLowerCase() + newString[i].slice(1).toLowerCase(); //меняем изнач. массив
      }
      else { 
        newString[i] = newString[i][0].toUpperCase() + newString[i].slice(1).toLowerCase();
      }
    }
    return newString.join('_'); //обратно в строку
}
 

console.log(devideBy('    Hello World'));
/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  if (n <= 1) return n; //остановим цикл для 0 или 1
  let [a,b] = [0,1];
  for (let i = 0; i < n; i++){
    [a,b] = [b,  a + b];
  }
return a;
}
console.log(fibonacci(8))

export { mergeArrays, fibonacci, devideBy };
