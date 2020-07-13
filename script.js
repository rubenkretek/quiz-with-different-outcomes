let borrowingAmount = 0;

let amountTextField = document.getElementById("amount-borrowing");

const question1 = document.getElementById("question-1");
const question2 = document.getElementById("question-2");
const question2b = document.getElementById("question-2b");
const question3 = document.getElementById("question-3");
const question4 = document.getElementById("question-4");
const question5 = document.getElementById("question-5");

const anwserSME = document.getElementById("answer-sme");
const anwserExecutive = document.getElementById("answer-executive");
const anwserCorporate = document.getElementById("answer-corporate");
const anwserNA = document.getElementById("answer-na");
const anwserTooLow = document.getElementById("answer-too-low");
const anwserRaiseValuation = document.getElementById("answer-raise-valuation");

// shows answer and disable question
function showAnswer(answer, questionToDisable) {
  answer.classList.add("show");
  disableQuestion(questionToDisable);
}

//Checks amount user wants to borrow and then shows the correct message based on amount
function checkAmount(borrowingAmount, questionToDisable) {
  const SMEMin = 2000000;
  const SMEMax = 5000000;
  const executiveMin = 5000000;
  const executiveMax = 10000000;
  const corporateMin = 10000000;

  if (borrowingAmount < SMEMin) {
    showAnswer(anwserTooLow, questionToDisable);
  } else if (borrowingAmount >= SMEMin && borrowingAmount < SMEMax) {
    showAnswer(anwserSME, questionToDisable);
  } else if (
    borrowingAmount >= executiveMin &&
    borrowingAmount < executiveMax
  ) {
    showAnswer(anwserExecutive, questionToDisable);
  } else if (borrowingAmount >= corporateMin) {
    showAnswer(anwserCorporate, questionToDisable);
  }
}

//disables buttons and adds "disable" class to the question
function disableQuestion(question) {
  var buttons = question.querySelectorAll("button");
  var inputs = question.querySelectorAll("input");
  buttons.forEach((element) => {
    element.disabled = true;
  });
  inputs.forEach((element) => {
    element.disabled = true;
  });
  question.classList.add("disable");
}

// Shows next question and disbles current question
function submitQuestion(questionShow, questionToDisable) {
  questionShow.classList.add("show");
  disableQuestion(questionToDisable);
}

//Question 2 ------
function question2check() {
  let inputField = document.getElementById("2-input").value;
  borrowingAmount = inputField;
  let borrowingAmountPercantage = borrowingAmount * 1.3;
  const validationMessage = document.querySelector(".amount-validation");

  if (inputField === "") {
    validationMessage.classList.add("show");
  } else {
    validationMessage.classList.remove("show");
    if (borrowingAmount < 250000) {
      showAnswer(anwserNA, question2);
    } else if (borrowingAmount >= 250000 && borrowingAmount <= 4000000) {
      // Add 'amount borrowed x 1.3' to next question
      amountTextField.innerHTML = borrowingAmountPercantage;
      submitQuestion(question3, question2);
    } else if (borrowingAmount > 4000000) {
      checkAmount(borrowingAmount, question2);
    }
  }
}

//Question 2b -----
function question2bcheck() {
  let inputField = document.getElementById("2b-input").value;
  let borrowingAmount = inputField;
  const validationMessage = document.querySelector(
    "#question-2b .amount-validation"
  );

  if (inputField === "") {
    validationMessage.classList.add("show");
  } else {
    validationMessage.classList.remove("show");
    checkAmount(borrowingAmount, question2b);
  }
}
