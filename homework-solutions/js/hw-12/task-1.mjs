// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после 
// вызова delayTwoSeconds
function delayTwoSeconds(callback){
    setTimeout(callback, 2000)
};

delayTwoSeconds(() => {
  console.log("Прошло 2 секунды!");
});

/**2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом 
 * .then и выведите результат его резолва в консоль */

const promise = new Promise ((resolve, reject) => {
    resolve(1);
});

promise.then((result) => console.log(result));

/*3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
  Обработайте промис методом .catch и выведите результат его резолва в консоль */

  const promise2 = new Promise((resolve, reject) => {
    reject("Promise failed");
  });

  promise2.catch((result) => console.log(result));

/**
4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и 
последовательно выведите в консоль результаты работы каждого промиса через .then
6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты
 и последовательно выведите в консоль статус и результат каждого промиса через .then 
7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch */

function promiseNumber(number) {
    return new Promise ((resolve, reject) => {
        resolve(number)
    })
};

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
.then((result) => {
    result.forEach(res => console.log(res))
});

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
.then((result) => {
    result.forEach(res => console.log(res.status, res.value))
});

//То же самое через async/await с try..catch
async function promiseAll(number){
    try {
        const result = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
        result.forEach(res => console.log(res));
    }
    catch (err) {
        console.log(err);
    }
};

async function promiseAllSettled() {
    const results = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    results.forEach(res => console.log(res.status, res.value))
};

promiseAll();
promiseAllSettled();