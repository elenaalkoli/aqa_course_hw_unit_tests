/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

const vowels = 'aeiou';

const countVowels = (el) => {
    return el.toLowerCase().split('').filter(el => vowels.includes(el)).length;
  };

function sortedByVowels(wordsArr) {
  if (!wordsArr || !Array.isArray(wordsArr)) {
    return [];
  }
  return wordsArr.sort((a, b) => countVowels(a) - countVowels(b));
}

console.log(sortedByVowels(words));
const count = sortedByVowels(words).forEach(el => console.log(el, countVowels(el)));

export { sortedByVowels };