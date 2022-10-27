const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

test("Can instantiate Intern instance", () => {
    const e = new Intern();
    expect(typeof(e)).toBe("object");
});

test('set school with constructor', () => {
    const testValue = 'school';
    const e = new Intern('Foo', 1, 'email@email.com', testValue);
    expect(e.school).toBe(testValue);
});

test("Can set github via constructor argument and access through getSchool()", () => {
    const testValue = "school";
    const e = new Intern("Foo", 1, 'email@email.com', testValue);
    expect(e.getSchool()).toBe(testValue);
});

test('getRole() return Intern', () => {
    const testValue = 'Intern';
    const e = new Intern('Foo', 1, 'intern@email.com', 'hs');
    expect(e.getRole()).toBe(testValue);
});