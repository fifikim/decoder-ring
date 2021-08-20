const expect = require("chai").expect;
const {caesar} = require("../src/caesar");

describe("Caesar", () => {

    it("should return false if shift is equal to 0", () => {
      const expected = false;
      const actual = caesar("secret message", 0);
      expect(actual).to.equal(expected);
    });

    it("should return false if shift value is not defined", () => {
      const expected = false;
      const actual = caesar("secret message");
      expect(actual).to.equal(expected);
    });

    it("should return false if shift value is less than -25", () => {
      const expected = false;
      const actual = caesar("secret message", -26);
      expect(actual).to.equal(expected);
    });

    it("should return false if shift value is greater than 25", () => {
      const expected = false;
      const actual = caesar("secret message", 26);
      expect(actual).to.equal(expected);
    });

    it("should treat capital letters as lower case letters", () => {
      const upperCase = caesar("SECRET MESSAGE", 4);
      const lowerCase = caesar("secret message", 4);
      expect(upperCase).to.equal(lowerCase);
    }); 
  
    it("should handle letters shifted beyond the end of the alphabet", () => {
      const expected = "aa upq";
      const actual = caesar("zz top", 1);
      expect(actual).to.equal(expected);     
    });
  
    it("should handle letters shifted before the start of the alphabet", () => {
      const expected = "zmx zcdkd zkatl";
      const actual = caesar("any adele album", -1);
      expect(actual).to.equal(expected);      
    });
  
    it("Encoding: should maintain spaces and special symbols", () => {
      const expected = "bpqa qa i amkzmb umaaiom!";
      const actual = caesar("This is a secret message!", 8);
      expect(actual).to.equal(expected);
    });

    it("Decoding: should maintain spaces and special symbols", () => {
      const expected = "this is a secret message!";
      const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
      expect(actual).to.equal(expected);
    });
}); 




















