//Collects how many problems the user is going to solve in the quiz
var numOfProblems = Number(prompt('How many problems do you want to solve?'));

//Forces user to enter a value greater than 0
while (numOfProblems === 0) {
  console.log('try again');
  numOfProblems = Number(prompt('Please enter how many problems do you want to solve?'));
}

console.log(typeof numOfProblems);

//Forloop will the quiz. Will run for how ever many problems the user entered
//User can enter exit to finish the quiz early
for(var x = 1; x <= numOfProblems; x++) {
  var numOne = Math.floor((Math.random() * 10) + 1);
  var numTwo = Math.floor((Math.random() * 10) + 1);
  var answer = numOne + numTwo;

  var userAnswer = Number(prompt(`What is ${numOne} + ${numTwo}`))
  if (userAnswer === answer) {
    alert('Correct!');
  }
  else {
    alert('Wrong!');
  }
}
