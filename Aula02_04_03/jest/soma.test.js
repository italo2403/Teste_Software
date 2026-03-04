const soma = require("./soma");

test("soma 2 + 3 deve dar 5", () => {
  expect(soma(2, 3)).toBe(5);
});

test("soma números negativos", () => {
  expect(soma(-2, -3)).toBe(-5);
});