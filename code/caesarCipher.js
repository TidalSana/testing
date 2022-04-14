const caesarCipher = function (string, shift) {
  // where we store results
  let results = [];
  let array = string.split("");

  for (let i = 0; i < array.length; i++) {
    // letter we are on in ascii
    let initial = array[i].charCodeAt(0);

    // if letter is greater than a or less than z
    if (initial >= 97 && initial <= 122) {
      // modulo
      initial = ((initial - 97 + shift) % 26) + 97;
      results.push(String.fromCharCode(initial));

      // if letter is greater than A or less than Z
    } else if (initial >= 65 && initial <= 90) {
      // modulo
      initial = ((initial - 65 + shift) % 26) + 65;
      results.push(String.fromCharCode(initial));

      //   here we listen for a white space & characters
    } else if (initial >= 32 && initial <= 63) {
      results.push(String.fromCharCode(initial));
    }
  }

  return results.join("");
};

module.exports = caesarCipher;
