const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".button");
const operationButtons = document.querySelectorAll(".operation-button");
const outcome = document.querySelector("#result");


let firstOperand = 0;
let secondOperand = 0;
let operator;

const createdNum = [];

display.textContent = 0;



buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        display.textContent = firstOperand;
        createdNum.push(btn.dataset.value);
        firstOperand = Number(createdNum.join(""));
        display.textContent = firstOperand;
    });
});

operationButtons.forEach(opBtn => {
    opBtn.addEventListener("click", () => {
        operator = opBtn.dataset.value;
        secondOperand = firstOperand;
        firstOperand = 0;
        createdNum.length =  0;
        display.textContent = secondOperand;
    });
});

function getResult (b, a, c){
    if (c === "+") return b + a;
    if (c === "-") return b - a;
    if (c === "*") return b * a;
    if (c === "/") return b / a;
};

outcome.addEventListener("click", () => {
    display.textContent = getResult(secondOperand, firstOperand, operator);
    console.log(firstOperand);
    console.log(secondOperand);
    console.log(operator);
});
