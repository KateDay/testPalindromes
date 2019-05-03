function isPalindrome(s) {
  var removeSpace = s.split(" ").join("");
    console.log(removeSpace);
  var stringReverse = removeSpace.split("").reverse().join("");
    console.log(stringReverse);
  return removeSpace == stringReverse;
}

module.exports = isPalindrome;
