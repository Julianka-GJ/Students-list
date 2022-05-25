"use strict";

var listStudents = generatingList(numberStudents());
console.log(listStudents);
var listAverageMark = averageMark(listStudents);

do {
  var operation = +prompt("What do you want to do? Choose a number of operation:\n        1. Best student\n        2. Grade list\n        3. Average score\n        4. List of debtors\n        5. Add new student\n        6. Random student generation\n        7. Random list of students");

  switch (operation) {
    case 1:
      searchBestStudent(listStudents);
      break;

    case 2:
      progressSorting(listAverageMark);
      break;

    case 3:
      averageMark(listStudents);
      break;

    case 4:
      searchDebtors(listAverageMark);
      break;

    case 5:
      addNewStudent(listAverageMark);
      break;

    case 6:
      searchRandomStudent();
      break;

    case 7:
      randomStudentList(numberStudents());
      break;

    default:
      alert("Wrong operation!");
      break;
  }

  console.log("Number of operation ".concat(operation));
} while (confirm("Do you want to repeat the operation selection?"));