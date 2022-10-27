const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

test("Can instantiate Engineer instance", () => {
    const e = new Engineer();
    expect(typeof(e)).toBe("object");
});

test("Can set github via constructor argument and access through getGithub()", () => {
    const testValue = "githubUsername";
    const e = new Engineer("Foo", 1, 'email@email.com', testValue);
    expect(e.github).toBe(testValue);
});

test('get github account with getGithub()', () => {
    const testValue = 'githubUsername';
    const e = new Engineer('Foo', 1, 'email@email.com', testValue);
    expect(e.getGithub()).toBe(testValue);
});

test('getRole() return Engineer', () => {
    const testValue = 'Engineer';
    const e = new Engineer('Foo', 1, 'email@email.com', 'githubUsername');
    expect(e.getRole()).toBe(testValue);
});