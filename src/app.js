const age = parseInt(prompt("write your Number"));

console.log(isNaN(age));

if (isNaN(age)) {
  console.log("Please write your Number");
} else {
  console.log("Thank you for write your Number");
}
