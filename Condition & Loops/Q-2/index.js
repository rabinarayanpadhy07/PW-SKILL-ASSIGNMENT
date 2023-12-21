let marks = 51;

if (marks > 90) {
  // if marks is more than 90
  console.log("Grade A");
} else {
  if (marks > 70 && marks < 90) {
    //if marks is more than 70 and less than 90
    console.log("Grade B");
  } else {
    if (marks > 50 && marks < 70) {
      //if marks is more than 50 and less than 70
      console.log("Grade C");
    } else {
      //if marks is less than 50
      console.log("Grade F");
    }
  }
}
