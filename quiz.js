var numberCorrect = 0 //Determines how many problems the user got correct
var numberWrong = 0 //Determines how many the user got wrong
var numOfProblems = 0 //Collects how many problems the user is going to solve in the quiz
var Operations = []; //Creates an array that holds the operations the user wants to use

getNumOfProblems();
getOperations();
quiz();

//Forces user to enter a value greater than 0
function getNumOfProblems() {
  while (numOfProblems === 0) {
    numOfProblems = Number(prompt('Please enter how many problems do you want to solve?'));
  }
}


function getOperations() {
  var operationsInput = '';

  while (operationsInput !== 'done') {
    operationsInput = prompt('Please enter an operation').toLowerCase();
    switch (operationsInput) {
      case 'addition':
        console.log('a'); //DEBUG
        Operations.push('addition');
        break;
      case 'subtraction':
        console.log('s'); //DEBUG
        Operations.push('subtraction');
        break;
      case 'multiplication':
        console.log('m'); //DEBUG
        Operations.push('multiplication');
        break;
      case 'division':
        console.log('d'); //DEBUG
        Operations.push('division');
        break;
      case 'done':
        break;
      default:
        alert('Please give a valid operation');
    }
    if (Operations.length < 1) {
      operationsInput = '';
    }
  }
}

//Forloop will run for how ever many problems the user entered
//User can enter exit to finish the quiz early
function quiz() {
  for (var x = 1; x <= numOfProblems; x++) {
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

//Randomizer for math problems
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//Prints results at the end of the quiz
function results() {
  alert('Results: \n' +
        `Total problems: ${numOfProblems}\n` +
        `Total correct: ${numberCorrect}\n` +
        `Total wrong: ${numberWrong}\n`);
}
