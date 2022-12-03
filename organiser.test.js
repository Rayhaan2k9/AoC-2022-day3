const { organiser, groupOrganiser } = require("./organiser.js");
const fs = require("fs");

const input = fs.readFileSync("./input.txt", "utf8");
const testInput = fs.readFileSync("./testInput.txt", "utf8");

describe("organiser", () => {
  test("returns a number", () => {
    expect(typeof organiser(testInput)).toBe("number");
  });

  test("returns correct sum for array of 6 rucksacks", () => {
    expect(organiser(testInput)).toBe(157);
  });

  test("final result", () => {
    expect(organiser(input)).toBe(7908);
  });
});

describe("groupOrganiser", () => {
  test("returns correct sum for 2 groups of 3", () => {
    expect(groupOrganiser(testInput)).toBe(70);
  });

  test("final result", () => {
    expect(groupOrganiser(input)).toBe(33455);
  });
});
