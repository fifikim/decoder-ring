const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("Polybius", () => {
  
  it("should translate the letters i and j to 42 when encoding", () => {
    const expected = "424222221351";
    const actual = polybius("jiggle");
    expect(actual).to.equal(expected);
  });
  
  it("should translate '42' to '(i/j)' when decoding", () => {
    const expected = "th(i/j)nkful";
    const actual = polybius("4432423352125413", false);
    expect(actual).to.equal(expected);
  });
  
  it("should ignore capital letters", () => {
    const uppercase = polybius("MEssAge mESsaGE");
    const lowercase = polybius("message message");
    expect(uppercase).to.equal(lowercase);
  });
  
  it("Encoding: should maintain spaces in the message", () => {
    const expected = "23513434112251 23513434112251";
    const actual = polybius("message message");
    expect(actual).to.equal(expected);
  });
  
  it("Decoding: should maintain spaces in the message", () => {
    const expected = "message message";
    const actual = polybius("23513434112251 23513434112251", false);
    expect(actual).to.equal(expected);
  });
})


