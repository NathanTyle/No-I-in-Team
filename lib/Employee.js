class Employee {
    constructor(name, id, email, Role = 'Employee') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.Role=Role;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}
module.exports = Employee;