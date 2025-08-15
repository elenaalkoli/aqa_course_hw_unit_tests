/*
  digitalRoot
  Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры.
  И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число.
  Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

*/

function digitalRoot(number) {
 if (typeof number !== 'number') {
    return console.log(`${number} is not a number`);
  }
  if (number < 10) {
    return number;
  };
  const sum = number.toString().split('').reduce((res, el) => res + Number(el), 0);
  return digitalRoot(sum);
}

console.log(digitalRoot(1199)); //2

export { digitalRoot };
