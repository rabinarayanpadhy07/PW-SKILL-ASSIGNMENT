/*
5. You are given a JavaScript object representing a student's information. Your task is to use the 'for.„in' loop
to iterate over the properties of the object and perform various operations.
a. Create a function displayStudentInfo that takes the student object as a parameter. Inside this function, use a
'for...in' loop to iterate over the properties of the student object and print each property and its corresponding
value to the console. The output should look something like this:
*/
const student = {
	name: 'Silu',
	age: 20,
	major: 'Computer Science',
	GPA: 9.8,
	isEnrolled: true
}

for (let property in student) {
	console.log('Property: ' + property + ', Value: ' + student[property]);
}


/* Output: 

Property: name, Value: Silu
Property: age, Value: 20
Property: major, Value: Computer Science
Property: GPA, Value: 9.8
Property: isEnrolled, Value: true

*/
