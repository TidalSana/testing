const calculator = require("../code/calculator");

test("add 1 + 2", () => {
  expect(calculator.add(1, 2)).toBe(3);
});
test("subtract 1 - 2", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});
test("multiply 1 * 2", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});
test("divide 4 / 2", () => {
  expect(calculator.divide(4, 2)).toBe(2);
});
