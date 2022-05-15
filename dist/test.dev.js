"use strict";

var numberStudents = function numberStudents(number) {
  // функция ввода числа студентов
  var i = 1;

  do {
    cacheIsNan = isNaN(number);
    console.log("Number of students ".concat(number));
    i++;
  } while (cacheIsNan);

  return number;
}; //numberStudents(+prompt('How many students are in your class?'))


var randomArray = function randomArray(lengthArray) {
  // функция генерации массива random 
  PrimeList = new Array(lengthArray);

  for (var _i = 0; _i < PrimeList.length; _i++) {
    PrimeList[_i] = Math.floor(Math.random() * 13);
  }

  return PrimeList;
};

var generatingList = function generatingList(n) {
  listStudents = new Array(n);

  for (var _i2 = 0; _i2 < listStudents.length; _i2++) {
    listStudents[_i2] = {
      studentName: prompt('Please, enter student name'),
      marks: randomArray(10)
    };
  } // console.log(listStudents);


  return listStudents;
}; //generatingList(3)
//лучший студент - функция принимает список студентов и возвращает одного с лучшей средней оценкой.


function searchBestStudent(value) {
  for (var _i3 = 0; _i3 < value.length; _i3++) {
    var sum = 0;
    console.log(value[_i3].marks);
    var listMarks = value[_i3]['marks'];

    for (var j = 0; j < listMarks.length; j++) {
      sum += value[_i3]['marks'][j];
      value[_i3].average = sum / 4;
    }
  }

  console.log(value);
}

var averageMark = function averageMark(value) {
  SumArr = [];

  for (var _i4 = 0; _i4 < value.length; _i4++) {
    var sum = 0;
    console.log(value[_i4].marks);

    for (var j = 0; j < 4; j++) {
      sum += value[_i4]['marks'][j];
    }

    SumArr.push(sum);
    console.log(SumArr);
  }
};

var aaab = [{
  studentName: 'ghhh',
  marks: [1, 1, 1, 1]
}, {
  studentName: 'ghhh',
  marks: [2, 1, 1, 1]
}, {
  studentName: 'ghhh',
  marks: [3, 1, 1, 1]
}]; //averageMark(aaab)
//searchBestStudent(generatingList(3))
//--------------------------------------------------------------------------

function main() {
  var listStudents = generatingList(numberStudents(+prompt('How many students are in your class?')));
}

var i = 1;

do {
  var operation = +prompt("What do you want to do? Choose a number of operation:\n    1. Best student\n    2. Grade list\n    3. Average score\n    4. List of debtors\n    5. Add new student");

  var _cacheIsNan = isNaN(operation);

  if (_cacheIsNan || operation > 5 || operation <= 0) {
    alert("Wrong operation!");
  }

  console.log("Number of operation ".concat(operation));
  i++;
} while (confirm("Do you want to repeat the operation selection?")); //--------------------------------------------------------------------