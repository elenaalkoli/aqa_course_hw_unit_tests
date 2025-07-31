/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number

*/

  const minAge = 18;
  const maxAge = 60;
  let age = '100';
  if (isNaN(age)){
    console.log('Incorrect data type')
  }
  else if (age < minAge){ //при сравнении итак идет приведение типов - в числа, а потом в boolean
    console.log(`You don't have access cause your age is ${age}, it's less then ${minAge}`)
  }
  else if (age >= minAge && age < maxAge){
    console.log('Welcome!')
  }
  else if (age > maxAge){
    console.log('Keep calm and look Culture channel!')
  } else console.log('Technical work');
