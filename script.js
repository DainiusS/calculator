const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".button");
const operationButtons = document.querySelectorAll(".operation-button");
const outcome = document.querySelector("#result");

const ac = document.querySelector("#ac");
const point = document.querySelector("#point");


let firstOperand = "";
let secondOperand = "";
let operator;

let createdNum = "";

display.textContent = 0;



buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        createdNum = "";
        createdNum = btn.dataset.value;
        firstOperand = firstOperand + createdNum;
        display.textContent = firstOperand;
    });
});

operationButtons.forEach(opBtn => {
    opBtn.addEventListener("click", () => {
        operator = opBtn.dataset.value;
        if (firstOperand == "") return;
        secondOperand = firstOperand;
        display.textContent = secondOperand;
        firstOperand = "";
    });
});

function getResult (b, a, c){
    if (c === "+") return Number(b) + Number(a);
    if (c === "-") return Number(b) - Number(a);
    if (c === "*") return Number(b) * Number(a);
    if (c === "/") return Number(b) / Number(a);
};

outcome.addEventListener("click", () => {
    let tempResult = getResult(secondOperand, firstOperand, operator);
    display.textContent = tempResult;
    firstOperand = tempResult;
});

ac.addEventListener("click", () => {
    firstOperand = "";
    secondOperand = "";
    operator = "";
    createdNum = "";
    display.textContent = 0;
});

point.addEventListener("click", () => {
    if (firstOperand.includes(".")) return;
    createdNum = point.dataset.value;
    firstOperand = firstOperand + createdNum;
    display.textContent = firstOperand;
});
