const reverseString = function (word) {
  let array = word.split("");
  let reverse = array.reverse();
  let join = reverse.join("");

  return join;
};

module.exports = reverseString;
