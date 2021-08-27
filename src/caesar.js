const caesarModule = (function () {

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
  /**
   * Shifts each letter in a string by a specified number of places.
   * 
   * @param {string} input - String to translate
   * @param {number} shift - Number of places to shift 
   * @param {boolean} encode - Translation mode
   * @return {string} - Translated string
   */
  function caesar(input, shift, encode = true) {
    
    // early return if shift value is undefined or invalid
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    };
    
    if (!encode) shift *= -1; // reverses shift direction for decoding
    
    let result = '';  
    for (let i = 0; i < input.length; i++) {
      
      let char = input[i].toLowerCase(); 
      let index = alphabet.indexOf(char);
      
      if (index === -1) { // maintains nonalphabetic characters
        result += char;
        continue;
      } 
      
      let newIndex = index + shift; // finds index at shifted value
      
      // shifts out-of-range index to valid index
      if (newIndex < 0) newIndex += 26;
      if (newIndex > 25) newIndex %= 26;

      // adds shifted character to result string
      let newChar = alphabet.charAt(newIndex);
      result += newChar;
    }
    return result;
  }

  return {
    caesar,
  };
})();

// module.exports = caesarModule.caesar;
module.exports = { caesar: caesarModule.caesar };