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

//ИЛИ через Object.keys(obj)
function getKeyByValue2<T extends object>(obj: T, value: T[keyof T]): keyof T | undefined {
    return (Object.keys(obj) as (keyof T)[]).find(key => obj[key] === value);
}
//ИЛИ через Object.entries(obj)
function getKeyByValue3<T extends object>(obj: T, value: T[keyof T]): keyof T | undefined {
    const entry = Object.entries(obj).find(([key,val])=> val === value);
    return entry ? entry[0] as keyof T : undefined;
}