// startsWith(), endsWith(), includes(), repeat()

const person = "Peter Smith";
const employee = "23456-EMP-PETER-SMITH";
const manager = "23456-MAN-JOHN-DOE";

// startsWith(substring, starting Position/index i.e. from where to start checking the string = optional) = case sensetive
console.log(person.startsWith("Pe"));
console.log(person.startsWith("p"));
console.log(employee.startsWith("EMP", 6));
console.log();

// endsWith(substring, ending Position/index i.e. till where we have to check the string = optional) = case sensetive
console.log(person.endsWith("th"));
console.log(person.endsWith("H"));
console.log(manager.endsWith("AN", 9));
console.log();

// includes(substring)
console.log(person.includes("Smi"));
console.log(employee.includes("-"));
console.log(manager.includes("man"));

// repeat(amount) = how many times do we want to repeat that string
console.log(person.repeat(5));
