// Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true, 
// если пароль соответствует следующим правилам:
//   - Пароль должен содержать хотя бы одну заглавную букву.
//   - Пароль должен содержать хотя бы одну букву в нижнем регистре.
//   - Пароль должен содержать хотя бы одну цифру.
//   - Пароль должен быть не менее 8 символов.
//   - Пароль не должен состоять из одних пробелов
// Функция должна возвращать false, если хотя бы одно из условий не выполнено.

function validatePassword(password: string): boolean {
    if (!/\p{Lu}/u.test(password)) {
        return false;
    }
    if (!/\p{Ll}/u.test(password)) {
        return false;
    }
    if (!/\p{Nd}/u.test(password)) {
        return false;
    }
    if (password.length < 8) {
        return false;
    }
    if (password.trim() === "") {
        return false;
    }
    return true;
}

console.log(validatePassword("password"));
console.log(validatePassword("pAssword1"));
console.log(validatePassword("Pas1"));
console.log(validatePassword("Pусский1"));