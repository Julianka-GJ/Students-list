
let numberStudents = function() {  // функция ввода числа студентов
    let number;
    let cacheIsNan;
    do {
        number = +prompt('How many students are in your class?');
        cacheIsNan = isNaN(number); 
        console.log(`Number of students ${number}`);
    } while (cacheIsNan);

    return number;
  }

//--------------------------------------------------------------------------------------

let randomArray = function(lengthArray) {  // функция генерации массива random от 1 до 12
    let primeList = new Array(lengthArray);
    for (let i=0; i<primeList.length; i++) {
        primeList[i] = Math.floor(Math.random()*12)+1;
    }

    return primeList; 
}

//--------------------------------------------------------------------------------------

let generatingList = function(n) {    // функция генерации массива студентов  
    let listStudentsArray = new Array(n);
    let marks = 10;
    let numbering = 1;
    for (let i = 0; i<listStudentsArray.length; i++) { 
        listStudentsArray[i] = {
            studentName: prompt(`Please, enter ${numbering} student name`),
            marks: randomArray(marks)
        };

        numbering++;
    }

    return listStudentsArray;
}

//--------------------------------------------------------------------------------------

let searchBestStudent = function(arrayStudents) {  //лучший студент 
    let bestStudent = arrayStudents[0];
    for (let i = 1; i<arrayStudents.length; i++) {
        if(bestStudent.average < arrayStudents[i].average); {
            bestStudent = arrayStudents[i];
        }
    }
    
    document.write('  ' + `Best student` + '  ' + `${bestStudent.studentName}` + '<br>' + `Average score` + '  ' + `${bestStudent.average}`);
    console.log(bestStudent);
    return bestStudent;
}

//--------------------------------------------------------------------------------------

function averageMark (averageList) {               //Средняя оценка 
    for (let i = 0; i<averageList.length; i++) {
        let sum = 0;
        let listMarks = averageList[i]['marks'];
        for (let j = 0; j<listMarks.length; j++) {
            sum += averageList[i]['marks'][j];
            averageList[i].average = sum/listMarks.length;
        }
    }

    getFullList(averageList);
    console.log(averageList);
    return averageList;
}

//--------------------------------------------------------------------------------------

function searchDebtors(listDebtors) {   //Список должников 
    let newListDebtors = [];
    for (let i = 0; i<listDebtors.length; i++) {
        if(listDebtors[i].average < 7) {
            let debtors = listDebtors[i];
            newListDebtors.push(debtors);
        }
    }

    getFullList(newListDebtors);
    console.log(newListDebtors);
    return newListDebtors;
}

//--------------------------------------------------------------------------------------

function progressSorting(progressList) {   // список успеваемости
    for (let i = 0, endI = progressList.length - 1; i < endI; i++) {
        let wasSwap = false;
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (progressList[j].average < progressList[j + 1].average) {
                [progressList[j], progressList[j + 1]] = [progressList[j + 1], progressList[j]];
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }

    getFullList(progressList);
    console.log(progressList);
    return progressList;
}

//--------------------------------------------------------------------------------------

function addNewStudent(students) {    //Добавление нового студента 
    let marks = 10;
    let newStudent = {
        studentName: prompt('Please, enter new student name'),
        marks: randomArray(marks)
    };
    students.push(newStudent);

    getFullList(students);
    
    console.log(students);
    return students;
}

//--------------------------------------------------------------------------------------

function main() {
    let listStudents = generatingList(numberStudents());
    console.log(listStudents);
    let listAverageMark = averageMark(listStudents);
    
    do {
        let operation = +prompt(`What do you want to do? Choose a number of operation:
        1. Best student
        2. Grade list
        3. Average score
        4. List of debtors
        5. Add new student`);

    switch(operation) {
        case 1: searchBestStudent(listStudents); break;
        case 2: progressSorting(listAverageMark); break;
        case 3: averageMark(listStudents); break;
        case 4: searchDebtors(listAverageMark); break;
        case 5: addNewStudent(listAverageMark); break;
        default: alert(`Wrong operation!`); break;
    }
        console.log(`Number of operation ${operation}`);

    } while (confirm(`Do you want to repeat the operation selection?`));
}

main()

function getFullParam(userName) {    // Вывод студентов в список 
    return '<li>' + `Student's name` + '  ' + `${userName.studentName}` + '  ' + '-' + '  ' + `Average score:` + '  ' + `${userName.average}` + '</li>';
}

function getFullList(user) {
    let content = '';
    for (let i=0; i<user.length; i++) {
        content = content + getFullParam(user[i]);
    }
    document.write('<ul>' + content + '</ul>');
}






