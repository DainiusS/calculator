const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".button");
const operationButtons = document.querySelectorAll(".operation-button");
const outcome = document.querySelector("#result");
const percent = document.querySelector("#percent");
const plusMinus = document.querySelector("#plus-minus");
const ac = document.querySelector("#ac");
const point = document.querySelector("#point");


let firstOperand = "";
let secondOperand = "";
let operator;
let createdNum = "";
let tempResult = "";

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
        tempResult = "";
        operator = opBtn.dataset.value;
        if (firstOperand == "") return;
        secondOperand = firstOperand;
        display.textContent = firstOperand;
        firstOperand = "";
    });
});

function getResult (b, a, c){
    if (c === "+") return Number(b) + Number(a);
    if (c === "-") return Number(b) - Number(a);
    if (c === "*") return Number(b) * Number(a);
    if (c === "/") {
        if (a == 0){
            return display.textContent = "LOL :)";
        } else {
            return Number(b) / Number(a);
        }
    }
};

outcome.addEventListener("click", () => {
    if (tempResult !== "") return;
    tempResult = getResult(secondOperand, firstOperand, operator);
    firstOperand = tempResult;
    display.textContent = firstOperand;    
});

ac.addEventListener("click", () => {
    firstOperand = "";
    secondOperand = "";
    operator = "";
    createdNum = "";
    tempResult = "";
    display.textContent = 0;
});

point.addEventListener("click", () => {
    if (firstOperand.includes(".")) return;
    createdNum = point.dataset.value;
    firstOperand = firstOperand + createdNum;
    display.textContent = firstOperand;
});

plusMinus.addEventListener("click", () => {
    firstOperand = -(firstOperand);
    display.textContent = firstOperand;
});

function percentage(a, b) {
    return Number(a) * Number(b) / 100;
}

percent.addEventListener("click", () => {
    if (tempResult !== "") return;
    operator = "";
    tempResult = percentage(firstOperand, secondOperand);
    firstOperand = tempResult;
    display.textContent = firstOperand;
});


document.addEventListener("keydown", (e) => {
    if (e.code == "Backspace"){
        if (firstOperand.length >= 2){
            let newFirstOperand = firstOperand.slice(0, -1);
            firstOperand = newFirstOperand;
            display.textContent = firstOperand;
        } else if (firstOperand.length = 1) {
            firstOperand = 0;
            display.textContent = firstOperand;;
        };
    };
});

//round numbers, fix bugs, enable keyboard