const letsSee = require("../src/letsSee");
describe("letsSee function", () => {
test("Case 1", () => {
    expect(letsSee(1)).toBeTruthy();
  });

test("Case 2", () => {
    expect(letsSee(1)).toBeFalsy();
  });

test("Case 3", () => {
    const expected = 'expected!';
    expect(letsSee(1)).toBe(expected);
  });

});
