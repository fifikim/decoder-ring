const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

describe("Substitution", () => {
  
  it("should return false if alphabet length isn't 26 characters", () => {
    const expected = false;
    const actual = substitution("thinkful", "abcdefghijklmnopqrstuvwxy");
    expect(actual).to.equal(expected);
  });
  
  it("should translate the given phrase based on alphabet given", () => {
    const expected = "jrufscpw";
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal(expected);
  });
  
  it("should return false if alphabet contains duplicate characters", () => {
    const expected = false;
    const actual = substitution("thinkful", "xoxoxo");
    expect(actual).to.equal(expected);
  });
  
  it("Encoding: should maintain spaces in the message", () => {
    const expected = "elp xhm xf mbymwwmfj dne";
    const actual = substitution("you are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal(expected);  
  });
  
  it("Decoding: should maintain spaces in the message", () => {
    const expected = "you are an excellent spy";
    const actual = substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false);
    expect(actual).to.equal(expected);   
  });
  
  it("should ignore capital letters", () => { 
    const uppercase = substitution("YOU ARE AN EXCELLENT SPY", "xoyqmcgrukswaflnthdjpzibev");
    const lowercase = substitution("you are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    expect(uppercase).to.equal(lowercase);
  });
})
