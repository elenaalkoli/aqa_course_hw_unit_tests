/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 40 },
  { name: 'Fred', age: 39 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  if(!(character && typeof character.name === 'string' && typeof character.age === 'number')){
        throw new Error('Invalid character object');
  }
  characters.push(character)
}

function getCharacter(name) {
  return characters.find(object => object.name === name);

}
// console.log(getCharacter('Fred'));

function getCharactersByAge(minAge) {
  if (isNaN(minAge) || typeof minAge !== 'number') {
    throw new Error('Invalid type of minAge');
  }
  return characters.filter(object => object.age >= minAge);
}
// console.log(getCharactersByAge(5));

function updateCharacter(name, newCharacter) {
  const foundedCharacter = characters.find(object => object.name === name); // найдет {}
   if (!foundedCharacter) {
    throw new Error('Character not found');
  }
  foundedCharacter.name = newCharacter.name; // или Object.assign(character, { name: newCharacter.name, age: newCharacter.age });
  foundedCharacter.age = newCharacter.age;
  return foundedCharacter;
}
console.log(updateCharacter("Fred", { name: 'Fred2', age: 41}));

function removeCharacter(name) {
  if(!name || typeof name !== 'string') {
    throw new Error('Invalid type of name');
  }
  const foundedIndex = characters.findIndex(object => object.name === name);
  if (foundedIndex === -1) {
    throw new Error('Character not found');
  }
  characters.splice(foundedIndex, 1);
  return characters;
}
console.log(removeCharacter('Jack'))

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };

