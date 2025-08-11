/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
let resultUnique = [];
let resultNull;

//competitorPizzas к нижнему регистру 
const competitorPizzasInLowerCase = [];
for (const item of competitorPizzas){
  competitorPizzasInLowerCase.push(item.toLowerCase())
}

// сравниваю myPizzasT1 в нижнем регистре с competitorPizzasInLowerCase
for (const item of myPizzasT1) {
  if (!competitorPizzasInLowerCase.includes(item.toLowerCase())){
    resultUnique.push(item); // push возвращает новую длину массива! поэтому нельзя тут присваивать сразу в resultUnique
  }
}

// сравниваю myPizzasT2 в нижнем регистре с competitorPizzasInLowerCase
let isUniqueT2 = false;
for (const item of myPizzasT2) {
  if (!competitorPizzasInLowerCase.includes(item.toLowerCase())){
    isUniqueT2 = true;
    break; //хотя бы одно совпадение - выходим из цикла
    }
}

if (!isUniqueT2) { 
  resultNull = null;
}

console.log(resultUnique, resultNull);


export { resultNull, resultUnique };
