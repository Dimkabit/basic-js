const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  let a = 0;
  for (let i = 0; i < matrix.length; i++) {
    const element = matrix[i];
    for (let index = 0; index < element.length; index++) {
      const el = element[index];
      if (el === '^^') {
        a = a + 1;
      }
    }
  }
  return(a);
  console.log(a);
  
};