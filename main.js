
    let listStudents = generatingList(numberStudents());
    console.log(listStudents);
    let listAverageMark = averageMark(listStudents);
    
    do {
        let operation = +prompt(`What do you want to do? Choose a number of operation:
        1. Best student
        2. Grade list
        3. Average score
        4. List of debtors
        5. Add new student
        6. Random student generation
        7. Random list of students`);

    switch(operation) {
        case 1: searchBestStudent(listStudents); break;
        case 2: progressSorting(listAverageMark); break;
        case 3: averageMark(listStudents); break;
        case 4: searchDebtors(listAverageMark); break;
        case 5: addNewStudent(listAverageMark); break;
        case 6: searchRandomStudent(); break;
        case 7: randomStudentList(numberStudents()); break;
        default: alert(`Wrong operation!`); break;
    }
        console.log(`Number of operation ${operation}`);

    } while (confirm(`Do you want to repeat the operation selection?`));
    








