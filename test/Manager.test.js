const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test("Can instantiate Manager instance", () => {
    const e = new Manager();
    expect(typeof(e)).toBe("object");
});

test("Can set github via constructor argument and access through getOfficeNumber()", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, 'email@email.com', testValue);
    expect(e.officeNumber).toBe(testValue);
});

test('get office number with getOfficeNumber()', () => {
    const testValue = 100;
    const e = new Manager('Foo', 1, 'email@email.com', testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});

test('getRole() return Manager', () => {
    const testValue = 'Manager';
    const e = new Manager('Foo', 1, 'email@email.com', 100);
    expect(e.getRole()).toBe(testValue);
});