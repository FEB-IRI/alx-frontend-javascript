var student1 = {
    firstName: "Felix",
    lastName: "Amponsah",
    age: 21,
    location: "Accra"
};
var student2 = {
    firstName: "John",
    lastName: "Doe",
    age: 37,
    location: "Kumasi"
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var tbody = document.createElement('tbody');
table.style.background = "blue";
table.appendChild(tbody);
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var nameCell = document.createElement('td');
    var locationCell = document.createElement('td');
    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    nameCell.style.border = "1px solid blue";
    locationCell.style.border = "1px solid blue";
    nameCell.style.padding = "5px";
    locationCell.style.padding = "5px";
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
document.body.appendChild(table);
