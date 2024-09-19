import { expect } from "chai";
import { countOddNumberService } from "../src/services/Odd.service.js";

describe("countOddNumberService", () => {
  it("should return 7 for the input [7]", () => {
    const result = countOddNumberService([7]);
    expect(result).to.equal(7);
  });

  it("should return 0 for the input [0]", () => {
    const result = countOddNumberService([0]);
    expect(result).to.equal(0);
  });

  it("should return 2 for the input [1,1,2]", () => {
    const result = countOddNumberService([1, 1, 2]);
    expect(result).to.equal(2);
  });

  it("should return 0 for the input [0,1,0,1,0]", () => {
    const result = countOddNumberService([0, 1, 0, 1, 0]);
    expect(result).to.equal(0);
  });

  it("should return 4 for the input [1,2,2,3,3,3,4,3,3,3,2,2,1]", () => {
    const result = countOddNumberService([
      1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1,
    ]);
    expect(result).to.equal(4);
  });
});
