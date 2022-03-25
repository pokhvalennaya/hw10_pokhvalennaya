class Employee {
  constructor(firstname, lastname, age, jobPosition, salary) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.jobPosition = jobPosition;
    this.salary = salary;
  }
  get fullName() {
    return `${this.firstname} ${this.lastname}`;
  }
  static vacationDays = "18";

  yearSalary() {
    return this.salary * 12;
  }
}

const employee1 = new Employee("Lena", "Pokhvalennaya", 19, "developer", 1000);
const employee2 = new Employee("Sofia", "Serdiuk", 20, "devOps", 2000);

console.log(employee1.fullName);
console.log(employee2.yearSalary());
