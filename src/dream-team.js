const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam ( members ) {
  var members = function(test, original) {
    return original.toLowerCase().split("").sort().join("") === test.toLowerCase().split("").sort().join("");
 };
};
