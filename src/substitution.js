const substitutionModule = (function () {

  const aToZ = 'abcdefghijklmnopqrstuvwxyz';
  
  /**
   * Replaces each letter of the alphabet with an equally-indexed letter from 
   * a given substitute alphabet.
   * 
   * @param {string} input - String to translate
   * @param {string} alphabet - Substitution alphabet
   * @param {boolean} encode - Translation mode
   * @returns {string} - Translated string
   */
  function substitution(input, alphabet, encode = true) {
    // early return if alphabet undefined or not exactly 26 characters long
    if (!alphabet || alphabet.length != 26) return false;
    
    // sets to encode/decode
    let [originAZ, targetAZ] = [aToZ, alphabet]; 
    if (!encode) [originAZ, targetAZ] = [alphabet, aToZ]; 
    
    let result = '';
    for (let i = 0; i < input.length; i++) {
      
      // early return if alphabet contains duplicate characters
      let arr = alphabet.split(alphabet[i]);
      if (arr.length > 2) return false;
      
      let char = input[i].toLowerCase(); // treats capitals as lowercase
      
      if (char === ' ') { // maintains spaces
        result += char;     
        continue;
      }
      
      // adds encoded/decoded character to result string
      let index = originAZ.indexOf(char);
      let newChar = targetAZ[index];
      result += newChar;
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
