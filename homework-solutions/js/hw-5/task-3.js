/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

let vowelsCount = 0;
let consonantsCount = 0; //счетчики букв

const vowels = 'aeiou';
const consonants = 'bcdfghjklmnpqrstvwxyz';

let vowelsAndConsonantsResult = '';
if (!word || typeof word !== "string" || !/[a-zA-Z]/.test(word)) { // RegEx - содержит ли строка хотя бы одну англ.букву (если в строке нет ни одной буквы — false)
    console.log('Please provide a valid string with letters')
} else {
for (let i = 0; i < word.length; i++){ // word.length всегда +1 индекс, то есть последний индекс length-1, а значит i < word.length 
    let char = word[i].toLowerCase();
    if(vowels.includes(char)){
        vowelsCount++;
    } else if (consonants.includes(char)) {
        consonantsCount++;
    }
}
vowelsAndConsonantsResult = `${word} contains ${vowelsCount} vowels and ${consonantsCount} consonants`;
console.log(vowelsAndConsonantsResult)
}

export { vowelsAndConsonantsResult }; 
