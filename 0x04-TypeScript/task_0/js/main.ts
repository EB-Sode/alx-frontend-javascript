interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 22,
  location: "Lagos",
};

const student2: Student = {
  firstName: "Mary",
  lastName: "Smith",
  age: 24,
  location: "Abuja",
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Render a table using Vanilla JavaScript
const table = document.createElement("table");
const tableBody = document.createElement("tbody");

// Add table header
const headerRow = document.createElement("tr");
const header1 = document.createElement("th");
header1.textContent = "First Name";
const header2 = document.createElement("th");
header2.textContent = "Location";
headerRow.appendChild(header1);
headerRow.appendChild(header2);
tableBody.appendChild(headerRow);

// Loop through studentsList and append rows
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
