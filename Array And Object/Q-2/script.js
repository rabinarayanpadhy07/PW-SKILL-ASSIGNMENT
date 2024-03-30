/*
Q-2. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
-Sort the array and find the min and max age.
 -Find the median age(one middle item or two middle items divided by two)
-Find the average age(all items divided by number of items)
-Find the range of the ages(max minus min)
- Compare the value of (min - average) and (max - average), use abs() method
*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// -Sort the array and find the min and max age.
const length = ages.length;
ages.sort()
const Min = ages[0]  //Find Minimum
const Max = ages[length-1]  //Find Maximum
console.log( 'Min:', Min , 'Max:',Max) // Min:19, Max:26
// -Find the median age(one middle item or two middle items divided by two)
let medianAge = null
if(length % 2 == 0){
    medianAge = (ages[length/2-1] + ages[length/2])/2 //median if length is even
}else{
    medianAge = ages[length/2-1] // median if length is odd
}
console.log('median:',medianAge) // median: 24
// -Find the average age(all items divided by number of items)
let totalSum = ages.reduce((acc,result)=> acc + result , 0) // find sum of the all age
const average = totalSum / length 
console.log('average:',average) // average: 22.8
// -Find the range of the ages(max minus min)
const range = max - min 
console.log('range:', range) // range: 7

// - Compare the value of (min - average) and (max - average), use abs() method
const valueMin = Math.abs(min-average)
const valueMax = Math.abs(max-average)
console.log('valueMax:', valueMax) //valuemax: 3.1999
console.log('valueMin:', valueMin) //valuemin: 3.80

