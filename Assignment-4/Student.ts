type Student = {
  name: string;
  email: string;
  id: number;
  address: {
    state: string;
    city: string;
  };
};

var student: Student = {
  name: "Anjali",
  email: "anjali.gogu@gmail.com",
  id: 21,
  address: {
    state: "telangana",
    city: "karimnagar",
  },
};

type UpdateStudentInfo = Pick<Student, "name" | "email">;

function updateStudentProperties(
  student: Student,
  updatedProperties: Partial<Student>
) {
  return { ...student, ...updatedProperties };
}

student = updateStudentProperties(student, {
  name: "naruto",
  email: "naruto@gmail.com",
});

var firstName: string = "hinata";
var age: number = 21;
var isfemail: boolean = true;

// Type to check if a type is a string or not
type IsString<T> = T extends string ? "Yes" : "No";

// third

interface Employee {
  name: string;
  role: string;
  age: number;
  email: string;
  phNumber: number;
  employLead?: Employee;
}

var employees: Employee[] = [];

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

function employeeIsLead(employee: Employee) {
  for (let i = 0; i < employees.length; i++) {
    let lead = employees[i];
    if (lead.employLead != null && lead.employLead === employee) {
      return true;
    }
  }
  return false;
}

function printLeadStatus(employees1: Employee[]) {
  employees1.forEach((employee) => {
    if (employeeIsLead(employee)) {
      console.log(`${employee.name} is Lead`);
    } else {
      console.log(`${employee.name} is not lead`);
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
