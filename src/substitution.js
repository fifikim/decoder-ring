const substitutionModule = (function () {

  const aToZ = 'abcdefghijklmnopqrstuvwxyz';
  
  function substitution(input, alphabet, encode = true) {
    // early return if alphabet undefined or not 26 chars
    if (!alphabet || alphabet.length != 26) return false;
    
    // sets to encode/decode
    let [originAZ, targetAZ] = [aToZ, alphabet]; 
    if (!encode) [originAZ, targetAZ] = [alphabet, aToZ]; 
    
    let result = '';
    for (let i = 0; i < input.length; i++) {
      
      // early return if alphabet contains dupe chars
      let arr = alphabet.split(alphabet[i]);
      if (arr.length > 2) return false;
      
      let char = input[i].toLowerCase(); // caps to lowercase
      
      if (char === ' ') { // maintains spaces
        result += char;     
        continue;
      }
      
      // adds encoded/decoded char to result string
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
