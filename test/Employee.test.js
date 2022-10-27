const Employee = require("../lib/Employee");


test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments and access through getName()", () => {
    const name = "John";
    const e = new Employee(name);
    expect(e.getName()).toBe(name);
});

test("Can set id via construct argument and access through getId()", () => {
    const testValue = 100;
    const e = new Employee("Foo", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Can set email via constructor argument and access through getEmail()", () => {
    const testValue = "email@email.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});
