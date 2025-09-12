/**Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
   Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
   После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
   Преобразуйте респонс из JSON в объект
   Проверьте, что айди в респонсе === 201
   Функция должна возвращать полученный объект из респонса
   Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена
   */

   async function createTodo(body) {
      try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body), // {} -> в строку
    });

    if(response.status !== 201) {
        throw new Error(`Invalid status code`);
    }
    const data = await response.json(); //парсим json (из строки -> в {})
    if(data.id !== 201) {
        throw new Error(`Invalid response id`);
    }
    return data;
    }

    catch (error) {
        console.error('Error', error.message);
    }
    finally {
        console.log('The function completed');
    }
   };

  const body = {
  userId: 1,
  title: "Сделать домашку",
  completed: true,
};

createTodo(body).then(todo => console.log('created todo:', todo));