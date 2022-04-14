const analyzeArray = require("../code/analyzeArray");

test("return array minimum", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});
test("return array maximum", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});
test("return array average", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).avg).toBe(4);
});
test("return array length", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
test("return array minimum", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    avg: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
