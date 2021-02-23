module.exports = function check(str, bracketsConfig) {
  const parsedBracketsConfig = bracketsConfig.map(el => `${el[0]}${el[1]}`);
  let strLength = str.length;

  while (str !== '') {
    parsedBracketsConfig.forEach(r => (str = str.replace(r, '')));
    if (strLength === str.length) {
      return false;
    }
    strLength = str.length;
  }
  return true;
  // your solution
};
