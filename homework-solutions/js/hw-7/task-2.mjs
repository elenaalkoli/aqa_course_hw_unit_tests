/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== 'string') {
    return false;
  }
  if (word.length <= 1) { //если пустая или 1 символ в строке
    return true;  
  }
  let wordToLowerCase = word.toLowerCase();
  return wordToLowerCase === wordToLowerCase.split('').reverse().join('');
}
console.log(isPalindrom('MadAm')); //true


/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (!sentence || typeof sentence !== 'string') {
    return [];
  }
  const sentenceInArr = sentence.trim().split(/\s+/); 
  // return console.log(sentenceInArr);
  const maxLengthWord = Math.max(...sentenceInArr.map((el) => el.length)); // spread, тк. Math.max работает только с отд. арг., не c []
  return sentenceInArr.filter((el) => el.length === maxLengthWord);
}

console.log(findLongestWords('I am qa     engineer engineer'))
export { isPalindrom, findLongestWords };
