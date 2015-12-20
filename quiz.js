var numberCorrect = 0 ;//Determines how many problems the user got correct
var numberWrong = 0; //Determines how many the user got wrong
var numOfProblems = 0; //Collects how many problems the user is going to solve in the quiz
var Operations = []; //Creates an array that holds the operations the user wants to use
var OperationsArraySize; //Holds the size of the Operations array to randomize math operations in the quiz
var divisionArray = []; //Holds all the numbers divisable

getNumOfProblems();
getOperations();
quiz();
results();

//Forces user to enter a value greater than 0
function getNumOfProblems() {
  while (numOfProblems === 0) {
    numOfProblems = Number(prompt('Please enter how many problems do you want to solve?'));
    if (isNaN(numOfProblems)) {numOfProblems = 0}
  }
}

//Gets operations to be randomized/used during the quiz
function getOperations() {
  var operationsInput = '';

  while (operationsInput !== 'done') {
    if (Operations.length === 4) {break;} //Breaks out once user has an full array
    operationsInput = prompt('Please enter an operation').toLowerCase();
    switch (operationsInput) {
      case 'addition':
      case 'add':
        if (Operations.indexOf('addition') > -1) {break;} //Checks if addition is already in the array
        console.log('a'); //DEBUG
        Operations.push('addition');
        break;
      case 'subtraction':
      case 'sub':
        if (Operations.indexOf('subtraction') > -1) {break;} //Checks if subtraction is already in the array
        console.log('s'); //DEBUG
        Operations.push('subtraction');
        break;
      case 'multiplication':
      case 'mul':
        if (Operations.indexOf('multiplication') > -1) {break;} //Checks if 'multiplication is already in the array
        console.log('m'); //DEBUG
        Operations.push('multiplication');
        break;
      case 'division':
      case 'div':
        if (Operations.indexOf('division') > -1) {break;} //Checks if division is already in the array
        console.log('d'); //DEBUG
        Operations.push('division');
        break;
      case 'all':
        //Checks which operations are already added to add the array to add remaining opertations
        if (Operations.indexOf('addition') > -1) {} else {Operations.push('addition')}
        if (Operations.indexOf('subtraction') > -1) {} else {Operations.push('subtraction')}
        if (Operations.indexOf('multiplication') > -1) {} else {Operations.push('multiplication')}
        if (Operations.indexOf('division') > -1) {} else {Operations.push('division')}
        break;
      case 'done':
        break;
      default:
        alert('Please give a valid operation');
    }
    OperationsArraySize = Operations.length;

    //Fail safe, resets operationsInput if user doesnt enter a value
    if (Operations.length < 1) {
      operationsInput = '';
    }
  }
}

//Randomizes math operations during quiz
function getRandomOperation() {
  return getRandomInt(0, OperationsArraySize - 1);
  console.log('random operator ' + randomOperator); //DEBUG
}

//Randomizer for math problems
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//Forloop will run for how ever many problems the user entered
//User can enter exit to finish the quiz early
function quiz() {
  console.log('op length ' + Operations.length); //DEBUG
  for (var x = 1; x <= numOfProblems; x++) {
    var numOne = getRandomInt(1, 10);
    var numTwo = getRandomInt(1, 10)
    var answer;
    var userAnswer;
    var operator = getRandomOperation();
    console.log(operator);
    //Addition
    if (operator == Operations.indexOf('addition')) {
      var userAnswer = Number(prompt(`What is ${numOne} + ${numTwo}`))
      answer = numOne + numTwo;
      if (userAnswer === answer) {
        alert('Correct!');
        numberCorrect++;
      }
      else {
        alert('Wrong!');
        numberWrong++;
      }
    }

    //Subtraction
    if (operator == Operations.indexOf('subtraction')) {
      var userAnswer = Number(prompt(`What is ${numOne} - ${numTwo}`))
      answer = numOne - numTwo;
      if (userAnswer === answer) {
        alert('Correct!');
        numberCorrect++;
      }
      else {
        alert('Wrong!');
        numberWrong++;
      }
    }

    //Multiplication
    if (operator == Operations.indexOf('multiplication')) {
      var userAnswer = Number(prompt(`What is ${numOne} * ${numTwo}`))
      answer = numOne * numTwo;
      if (userAnswer === answer) {
        alert('Correct!');
        numberCorrect++;
      }
      else {
        alert('Wrong!');
        numberWrong++;
      }
    }

    //Division sends it own values to getRandomInt
    if (operator == Operations.indexOf('division')) {
      var divisor = getRandomInt(2, 20);
      var dividend = getDividend(100, divisor)
      var userAnswer = Number(prompt(`What is ${dividend} / ${divisor}`))
      answer = dividend / divisor;
      if (userAnswer === answer) {
        alert('Correct!');
        numberCorrect++;
      }
      else {
        alert('Wrong!');
        numberWrong++;
      }
    }
  }
}

//Grabs a divisable divdend for division
function getDividend(maxNum, divisor) {
  for (var i = 1; i < maxNum; i++) {
    if ((i % divisor) === 0) {
      divisionArray.push(i)
      console.log(`${i} is divisable ` + divisor); //DEBUG
    }
  }
  var finalDiv = divisionArray[getRandomInt(0, divisionArray.length - 1)];
  return finalDiv;
}


//Prints results at the end of the quiz
function results() {
  alert('Results: \n' +
        `Total problems: ${numOfProblems}\n` +
        `Total correct: ${numberCorrect}\n` +
        `Total wrong: ${numberWrong}\n`);
}
