const age = parseInt(prompt("write your Number"));

console.log(isNaN(age));
//isNan은 값이 숫자인지 아닌지를 판별해준다. 숫자가 아니라면 true/숫자라면 false를 출력한다.

if (isNaN(age)) {
  console.log("Please write your Number");
} else {
  console.log("Thank you for write your Number");
}
