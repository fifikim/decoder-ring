const caesarModule = (function () {

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
  function caesar(input, shift, encode = true) {
    
    // early return if shift value undefined or invalid
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    };
    
    if (!encode) shift *= -1; // reverses shift to decode
    
    let result = '';  
    for (let i = 0; i < input.length; i++) {
      
      let char = input[i].toLowerCase(); 
      let index = alphabet.indexOf(char);
      
      if (index === -1) { // maintains nonalphabetic chars
        result += char;
        continue;
      } 
      
      let newIndex = index + shift; // shifts index 
      
      // shifts out-of-range index to valid index
      if (newIndex < 0) newIndex += 26;
      if (newIndex > 25) newIndex %= 26;

      // adds shifted char to result string
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