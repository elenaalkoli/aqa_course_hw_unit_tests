/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/

let n = 2;
let result = +String(n) + +((String(n) + String(n))) + +(String(n) + String(n) + String(n));
console.log(result) // 246

