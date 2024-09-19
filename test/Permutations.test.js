import { expect } from "chai";
import { generatePermutationsService } from "../src/services/Permutations.service.js";

describe("generatePermutationsService", () => {
  it('should return ["a"] for the input "a"', () => {
    const result = generatePermutationsService("a");
    expect(result).to.deep.equal(["a"]);
  });

  it('should return ["ab", "ba"] for the input "ab"', () => {
    const result = generatePermutationsService("ab");
    expect(result).to.have.members(["ab", "ba"]);
  });

  it('should return ["abc", "acb", "bac", "bca", "cab", "cba"] for the input "abc"', () => {
    const result = generatePermutationsService("abc");
    expect(result).to.have.members(["abc", "acb", "bac", "bca", "cab", "cba"]);
  });

  it('should return ["aabb", "abab", "abba", "baab", "baba", "bbaa"] for the input "aabb"', () => {
    const result = generatePermutationsService("aabb");
    expect(result).to.have.members([
      "aabb",
      "abab",
      "abba",
      "baab",
      "baba",
      "bbaa",
    ]);
  });

  it("should handle an empty string correctly", () => {
    const result = generatePermutationsService("");
    expect(result).to.deep.equal([""]);
  });

  it("should handle a string with all identical characters correctly", () => {
    const result = generatePermutationsService("aaaa");
    expect(result).to.deep.equal(["aaaa"]);
  });
});
