const polybiusModule = (function () {

  const encodeKey = {
    a: '11', b: '21', c: '31', d: '41', e: '51', f: '12', 
    g: '22', h: '32', i: '42', j: '42', k: '52', l: '13', 
    m: '23', n: '33', o: '43', p: '53', q: '14', r: '24', 
    s: '34', t: '44', u: '54', v: '15', w: '25', x: '35', 
    y: '45', z: '55'
  };
  const decodeKey = {
    11: 'a', 21: 'b', 31: 'c', 41: 'd', 51: 'e', 12: 'f', 
    22: 'g', 32: 'h', 42: '(i/j)', 52: 'k', 13: 'l', 
    23: 'm', 33: 'n', 43: 'o', 53: 'p', 14: 'q', 24: 'r', 
    34: 's', 44: 't', 54: 'u', 15: 'v', 25: 'w', 35: 'x', 
    45: 'y', 55: 'z'
  };

  /**
   * Substitutes each letter in a string with a 
   * corresponding number pair.
   * @param {string} input - The string to translate
   * @param {boolean} encode - The translation mode
   * @return {string} - The translated string
   */
  function polybius(input, encode = true) {
    input = input.toLowerCase(); // treats caps as lowercase
    
    /**
     * @type {object} - sets mode to encoding as default
     */
    let key = encodeKey; 

    let inputArray = input.split('');
    
    if (!encode) { // sets to decode
      key = decodeKey; 
      inputArray = [];
      
      // early return if input excl. spaces has odd length
      let noSpaces = input.split(' ').join('');
      if (noSpaces.length % 2 != 0) return false;
      
      while (input) { // parses each space or num pair
        if (input[0] === ' ') { 
          inputArray.push(' ');
          input = input.slice(1, input.length);
          continue;
        } 
        inputArray.push(input.slice(0, 2));
        input = input.slice(2, input.length);   
      }
    }
    
    // adds space/encoded num/decoded char to result string
    let result = ''; 
    for (let item of inputArray) { 
      item === ' ' ? result += item : result += key[item];
    }
    return result;
  }
  
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };


