"use strict";

var numberStudents = function numberStudents() {
  // функция ввода числа студентов
  var i = 1;

  do {
    number = +prompt('How many students are in your class?');
    cacheIsNan = isNaN(number);
    console.log("Number of students ".concat(number));
    i++;
  } while (cacheIsNan);

  return number;
}; //--------------------------------------------------------------------------------------


var randomArray = function randomArray(lengthArray) {
  // функция генерации массива random от 1 до 12
  PrimeList = new Array(lengthArray);

  for (var i = 0; i < PrimeList.length; i++) {
    PrimeList[i] = Math.floor(Math.random() * 12) + 1;
  }

  return PrimeList;
}; //--------------------------------------------------------------------------------------


var generatingList = function generatingList(n) {
  // функция генерации массива студентов  
  listStudentsArray = new Array(n);
  var marks = 10;
  var numbering = 1;

  for (var i = 0; i < listStudentsArray.length; i++) {
    listStudentsArray[i] = {
      studentName: prompt("Please, enter ".concat(numbering, " student name")),
      marks: randomArray(marks)
    };
    numbering++;
  }

  return listStudentsArray;
}; //--------------------------------------------------------------------------------------


var searchBestStudent = function searchBestStudent(arrayStudents) {
  //лучший студент 
  var BestStudent = arrayStudents[0];

  for (var i = 1; i < arrayStudents.length; i++) {
    if (BestStudent.average < arrayStudents[i].average) {
      BestStudent = arrayStudents[i];
    }
  }

  document.write('  ' + "Best student" + '  ' + "".concat(BestStudent.studentName) + '<br>' + "Average score" + '  ' + "".concat(BestStudent.average));
  console.log(BestStudent);
  return BestStudent;
}; //--------------------------------------------------------------------------------------


function averageMark(averageList) {
  //Средняя оценка 
  for (var i = 0; i < averageList.length; i++) {
    var sum = 0;
    var listMarks = averageList[i]['marks'];

    for (var j = 0; j < listMarks.length; j++) {
      sum += averageList[i]['marks'][j];
      averageList[i].average = sum / listMarks.length;
    }
  }

  GetFullList(averageList);
  console.log(averageList);
  return averageList;
} //--------------------------------------------------------------------------------------


function searchDebtors(listDebtors) {
  //Список должников 
  newListDebtors = [];

  for (var i = 0; i < listDebtors.length; i++) {
    if (listDebtors[i].average < 7) {
      debtors = listDebtors[i];
      newListDebtors.push(debtors);
    }
  }

  GetFullList(newListDebtors);
  console.log(newListDebtors);
  return newListDebtors;
} //--------------------------------------------------------------------------------------


function progressSorting(progressList) {
  // список успеваемости
  for (var i = 0, endI = progressList.length - 1; i < endI; i++) {
    var wasSwap = false;

    for (var j = 0, endJ = endI - i; j < endJ; j++) {
      if (progressList[j].average < progressList[j + 1].average) {
        var _ref = [progressList[j + 1], progressList[j]];
        progressList[j] = _ref[0];
        progressList[j + 1] = _ref[1];
        wasSwap = true;
      }
    }

    if (!wasSwap) break;
  }

  GetFullList(progressList);
  console.log(progressList);
  return progressList;
} //--------------------------------------------------------------------------------------


function addNewStudent(students) {
  //Добавление нового студента 
  var marks = 10;
  var newStudent = {
    studentName: prompt('Please, enter new student name'),
    marks: randomArray(marks)
  };
  students.push(newStudent);
  GetFullList(students);
  console.log(students);
  return students;
} //--------------------------------------------------------------------------------------


function main() {
  var listStudents = generatingList(numberStudents());
  console.log(listStudents);
  var listAverageMark = averageMark(listStudents);
  var i = 1;

  do {
    var operation = +prompt("What do you want to do? Choose a number of operation:\n        1. Best student\n        2. Grade list\n        3. Average score\n        4. List of debtors\n        5. Add new student");

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

      default:
        alert("Wrong operation!");
        break;
    }

    console.log("Number of operation ".concat(operation));
    i++;
  } while (confirm("Do you want to repeat the operation selection?"));
}

main();

function GetFullParam(userName) {
  // Вывод студентов в список 
  return '<li>' + "Student's name" + '  ' + "".concat(userName.studentName) + '  ' + '-' + '  ' + "Average score:" + '  ' + "".concat(userName.average) + '</li>';
}

function GetFullList(user) {
  content = '';

  for (var i = 0; i < user.length; i++) {
    content = content + GetFullParam(user[i]);
  }

  document.write('<ul>' + content + '</ul>');
}