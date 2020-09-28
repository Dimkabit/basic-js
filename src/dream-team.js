const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam ( members ) {
  var members = function(original) {
    return original.toLowerCase().split("").sort().join("");
 };
};
