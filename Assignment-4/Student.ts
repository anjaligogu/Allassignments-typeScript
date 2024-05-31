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
  updatedProperties: Partial<UpdateStudentInfo>
): Student {
  return { ...student, ...updatedProperties };
}

student = updateStudentProperties(student, {
  name: "naruto",
  email: "naruto@gmail.com",
});

// Type to check if a type is a string or not
type IsString<T> = T extends string ? "Yes" : "No";

// Employee-Lead
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
  // employLead: employees[0],
};
employees[2] = {
  name: "Naro",
  role: " sr. CraftPerson",
  age: 22,
  email: "naru@123",
  phNumber: 12343434,
  employLead: employees[0],
};

employees[3] = {
  name: "kakashi",
  role: "developer",
  age: 30,
  email: "kakashi@123",
  phNumber: 123433434,
  // employLead: employees[0],
};

function printLeadStatus(employees: Employee[]) {
  employees.forEach((employee) => {
    if (employee.employLead) {
      console.log(`${employee.name} is Lead`);
    } else {
      console.log(`${employee.name} is not lead`);
    }
  });
}

printLeadStatus(employees);

type TestString = IsString<string>; // Output: "Yes"
type TestNumber = IsString<number>; // Output: "No"
