var numberCorrect = 0 //Determines how many problems the user got correct
var numberWrong = 0 //Determines how many the user got wrong
var numOfProblems = 0//Collects how many problems the user is going to solve in the quiz
var Operations = []; //Creates an array that holds the operations the user wants to use

getOperations();

//Forces user to enter a value greater than 0
while (numOfProblems === 0) {
  console.log('try again');
  numOfProblems = Number(prompt('Please enter how many problems do you want to solve?'));
}

//Will get type of math operations user wants to solve
function getOperations() {
  var operationsInput = "";

  while (operationsInput !== 'done') {
    operationsInput = prompt('Please enter an operation').toLowerCase();
    if ((!operationsInput.match(/^(addition|subtraction|multiplication|division|done)$/))) {
      operationsInput = prompt('Please enter a valid operation');
    }
    Operations.push(operationsInput)
    console.log('ok');
  }
  delete Operations["done"];
  console.log(Operations.length);
}

console.log('got it');

quiz();

//Forloop will the quiz. Will run for how ever many problems the user entered
//User can enter exit to finish the quiz early
function quiz() {
  for(var x = 1; x <= numOfProblems; x++) {
    var numOne = getRandomInt(1, 10);
    var numTwo = getRandomInt(1, 10)
    var answer = numOne + numTwo;

    var userAnswer = Number(prompt(`What is ${numOne} + ${numTwo}`))
    if (userAnswer === answer) {
      alert('Correct!');
      numberCorrect++;
    }
    else {
      alert('Wrong!');
      numberWrong++;
    }
  }
  results();
}

//Randomizer
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function results() {
  alert('Results: \n' +
        `Total problems: ${numOfProblems}\n` +
        `Total correct: ${numberCorrect}\n` +
        `Total wrong: ${numberWrong}\n`);
}
