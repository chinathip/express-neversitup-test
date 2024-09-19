import { expect } from "chai";
import { countSmileysService } from "../src/services/CountSmileys.service.js"; // Adjust the import path as necessary

describe("countSmileysService", () => {
  it('should return 2 for the input [":)", ";(", ";}", ":-D"]', () => {
    const result = countSmileysService([":)", ";(", ";}", ":-D"]);
    expect(result).to.equal(2);
  });

  it('should return 3 for the input [";D", ":-(", ":-)", ";~)"]', () => {
    const result = countSmileysService([";D", ":-(", ":-)", ";~)"]);
    expect(result).to.equal(3);
  });

  it('should return 1 for the input [";]", ":[", ";*", ":$", ";-D"]', () => {
    const result = countSmileysService([";]", ":[", ";*", ":$", ";-D"]);
    expect(result).to.equal(1);
  });

  it("should return 0 for an empty array", () => {
    const result = countSmileysService([]);
    expect(result).to.equal(0);
  });

  it("should return 0 for an array with no valid smiley faces", () => {
    const result = countSmileysService(["abc", "123", "!@#"]);
    expect(result).to.equal(0);
  });

  it("should handle arrays with mixed content correctly", () => {
    const result = countSmileysService([":)", ";-D", ":-(", "invalid", ":~D"]);
    expect(result).to.equal(3);
  });
});
