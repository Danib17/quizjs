//Collects how many problems the user is going to solve in the quiz
var start = new Date().getTime() / 1000;
var numOfProblems = Number(prompt('How many problems do you want to solve?'));
var end = new Date().getTime() / 1000;

var time = end - start
console.log(`Took you ${time.toFixed(2)} seconds to enter a value`);

//Forces user to enter a value greater than 0
while (numOfProblems === 0) {
  console.log('try again');
  numOfProblems = Number(prompt('Please enter how many problems do you want to solve?'));
}

console.log(typeof numOfProblems);

//Forloop will the quiz. Will run for how ever many problems the user entered
//User can enter exit to finish the quiz early
for(var x = 1; x <= numOfProblems; x++) {
  console.log(x);
}
