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

const isFasterUnique = (str) => {
  const hashStr = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (hashStr[char]) {
      return false;
    } else {
      hashStr[char] = true;
    }
  }
  console.log(hashStr)
  return true;
}

const uniTest = 'abcdefghijklmnop';
const dupTest = 'abcdefghijka';

console.log(isFasterUnique(uniTest));
console.log(isFasterUnique(dupTest));