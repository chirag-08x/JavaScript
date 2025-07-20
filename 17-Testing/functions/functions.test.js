const { addNums, checkEven, isNull, createUser } = require("./functions");

// toBe -> value should be equal to provided value
// toBe -> use for primitive data type
test("Adds 2 + 2 to equal 4", () => {
  expect(addNums(2, 2)).toBe(4);
});

// .not.toBe() -> value should not be equal to provided value
test("Adds 2 + 2 to not equal 5", () => {
  expect(addNums(2, 2)).not.toBe(5);
});

// toBeTruthy -> must be a truthy value
test("Check if 4 is an even number", () => {
  expect(checkEven(4)).toBeTruthy();
});

// toBeFalsy -> must be falsy value
test("Check if 5 is an even number", () => {
  expect(checkEven(5)).toBeFalsy();
});

// toBeDefined -> must be anything other than undefined
test("Check if 5 is an even number", () => {
  expect(checkEven(5)).toBeDefined();
});

// toBeNull -> must be a nullable value
test("Check for is null", () => {
  expect(isNull()).toBeNull();
});

// toEqual - works for non-primitve data types as well
// toStrictEqual - for non-primitive data type(enforces strict type checking and also consider different in obejct prototype )
test("Check for user", () => {
  expect(createUser()).toStrictEqual({
    firstName: "chirag",
    lastName: "Agrawal",
    age: 24,
  });
});

// Regex
test("There should be an I in team", () => {
  expect("teamI").toMatch(/I/);
});

test("There should not be an I in team", () => {
  expect("team").not.toMatch(/I/);
});

test("Admin should be in usernames", () => {
  expect(["chirag", "yash", "admin"]).toContain("admin");
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false
// toBeLessThan -> should be less than provided value
// toBeLessThanOrEqual -> should be less than to equal to provided value
// toBeGreaterThan -> should be greater than provide value
// toBeGreaterThanOrEqual -> should be greater than or equal to provide value
