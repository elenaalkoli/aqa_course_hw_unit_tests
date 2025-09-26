// Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, 
// и возвращает ключ, соответствующий этому значению. 
// Если значение не найдено, функция должна возвращать undefined.
// Используйте keyof для типизации ключей объекта

function getKeyByValue <T extends object>(object: T, value: T[keyof T]): keyof T | undefined {
    for (const key in object) {
        if (object[key] === value) {
            return key;
        }
    }
    return undefined;
}

const roles = { 
    admin: "ADMIN", 
    user: "USER", 
    guest: "GUEST" 
};

console.log(getKeyByValue(roles, "GUEST"));