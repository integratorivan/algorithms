import { expect, test, it, describe } from "vitest";
import { searchSequence } from "./search-sequence";

const input_1 = [2, 3, 1, 2, 3, 5];
const input_2 = [1, 12, 42, -3, 5, 6, 7, 8];

describe("sequence input_1", () => {
  it("should return 3", () => {
    expect(searchSequence(input_1)).toBe(3);
  });
  it("should return 4", () => {
    expect(searchSequence(input_2)).toBe(4);
  });
});
