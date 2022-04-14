const caesarCipher = require("../code/caesarCipher");

test("apple to fuuqj with shift of 5", () => {
  expect(caesarCipher("apple", 5)).toBe("fuuqj");
});
test("handling spaces", () => {
  expect(caesarCipher("man purse", 5)).toBe("rfs uzwxj");
});
test("ApPlE to FuUqJ", () => {
  expect(caesarCipher("ApPlE", 5)).toBe("FuUqJ");
});
test("spider!! to xunijw!!", () => {
  expect(caesarCipher("spider!!", 5)).toBe("xunijw!!");
});
