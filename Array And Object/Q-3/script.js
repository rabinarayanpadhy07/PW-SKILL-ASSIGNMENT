/*
3. Object Extensibility and Sealing
a) Use the Object.preventExtensions method to prevent any further additions of properties to the student object.
b) Use the Object.isExtensible method to check if the student object is extensible. Store the result in a variable
called extensibleStatus.
c) Create a new object called teacher with a •subject' property set to 'Math'.
d) Use the Object.seal method to seal the teacher object, preventing any additions or deletions of properties.
e) Use the Object.isSealed method to check if the teacher object is sealed. Store the result in a variable called
sealedStatus.
f) Print the extensibleStatus and sealedStatus to the console.
*/
// Ans
const student = {
	name: 'Silu',
	age: 20,
	major: 'Computer Science',
	GPA: 9.8,
	isEnrolled: true
}

Object.preventExtensions(student)

const extensibleStatus = Object.isExtensible(student)

const teacher = {
    subject:'Math'
}

Object.seal(teacher)

const sealedStatus = Object.isSealed(teacher)

console.log('extensibleStatus:',extensibleStatus,'sealedStatus:',sealedStatus) // extensibleStatus: false sealedStatus: true