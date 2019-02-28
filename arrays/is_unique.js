/* Determine if a string has all unique characters. 
What if you can't use additonal data structure? */

const isUnique = (str) => {

  for (let i = 0; i < str.length - 1; i++) {
    for (let c = i + 1; c < str.length; c++) {
      if (str[c] === str[i]) {
        return false;
      }
    }
  }

  return true;
}

const uniTest = 'abcdefghijklmnop';
const dupTest = 'abcdefghijka';

console.log(isUnique(uniTest));
console.log(isUnique(dupTest));