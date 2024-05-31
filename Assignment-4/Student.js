var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var student = {
    name: "Anjali",
    email: "anjali.gogu@gmail.com",
    id: 21,
    address: {
        state: "telangana",
        city: "karimnagar",
    },
};
function updateStudentProperties(student, updatedProperties) {
    return __assign(__assign({}, student), updatedProperties);
}
student = updateStudentProperties(student, {
    name: "naruto",
    email: "naruto@gmail.com",
});
var firstName = "hinata";
var age = 21;
var isfemail = true;
var employees = [];
employees[0] = {
    name: "Anji",
    role: "jr.CraftPerson",
    age: 21,
    email: "anji@123",
    phNumber: 12343434,
    // employLead: employees[0],
};
employees[1] = {
    name: "Hina",
    role: "developer",
    age: 20,
    email: "hina@123",
    phNumber: 12343434,
    employLead: employees[0],
};
employees[2] = {
    name: "Naro",
    role: " sr. CraftPerson",
    age: 22,
    email: "naru@123",
    phNumber: 12343434,
    // employLead: employees[0],
};
employees[3] = {
    name: "kakashi",
    role: "developer",
    age: 30,
    email: "kakashi@123",
    phNumber: 123433434,
    // employLead: employees[0],
};
function employeeIsLead(employee) {
    for (var i = 0; i < employees.length; i++) {
        var lead = employees[i];
        if (lead.employLead != null && lead.employLead === employee) {
            return true;
        }
    }
    return false;
}
function printLeadStatus(employees1) {
    employees1.forEach(function (employee) {
        if (employeeIsLead(employee)) {
            console.log("".concat(employee.name, " is Lead"));
        }
        else {
            console.log("".concat(employee.name, " is not lead"));
        }
    });
}
printLeadStatus(employees);
// function printLeadStatus(employees: (Employee | Lead)[]): void {
// const student: Student = { name: "Anji", email: "anji@123.com" };
// updateStudentProperties(student, { name: "Anjali" });
// console.log(student);
// type TestString = IsString<string>;
// type TestNumber = IsString<number>;
// printLeadStatus(employees);
