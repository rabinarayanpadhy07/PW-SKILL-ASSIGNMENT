function factorial(num) {
  if (num < 0) return "Please enter a valid number";
  if (num == 1) return num;
  return num * factorial(num - 1);
}

const result = factorial(7);

console.log(result);
