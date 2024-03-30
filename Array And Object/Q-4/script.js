/*
Implement the following functions using pure JavaScript (without any external libraries or frameworks):
a. Add a Student: Create a function to add a new student to the array.
b. Update Student Information: Create a function to update a student's information based on their id.
c. Delete a Student: Create a function to delete a student based on their id.
d. List All Students: Create a function to display a list of all students.
e. Find Students by Grade: Create a function to find all students who have a specific grade.
f. Calculate Average Age: Create a function to calculate the average age of all students using array method.
*/

const students = [
    {id:1, firstName:'John', lastName:'Doe', age:20, grade:'A'},
    {id:2, firstName:'Jane', lastName:'Smith', age:22, grade:'B'},
    {id:3, firstName:'Bob', lastName:'Johnson', age:19, grade:'A'},
    {id:4, firstName:'David', lastName:'Smith', age:23, grade:'C'},
]

function addStudent(id, firstName, lastName, age, grade) {
    students.push({id, firstName, lastName, age, grade});  // Add a new student to the list
}

function updateStudentInfo(id, updatedInfo) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            students[i] = { ...students[i], ...updatedInfo };  // Update student information
            break;
        }
    }
}

function deleteStudent(id) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            students.splice(i, 1);  // Delete a student from the list
            break;
        }
    }
}

function displayAllStudents() {
    for (const student of students) {
        console.log(student.firstName + ' ' + student.lastName);  // Display the first and last name of each student
    }
}

function findStudentsByGrade(grade) {
    const studentsWithGrade = students.filter(student => student.grade === grade);  // Find students with a specific grade
    return studentsWithGrade;
}

function calculateAverageAge() {
    const totalAge = students.reduce((acc, student) => acc + student.age, 0);  // Calculate the total age of all students
    const averageAge = totalAge / students.length;  // Calculate the average age of all students
    return averageAge;
}
