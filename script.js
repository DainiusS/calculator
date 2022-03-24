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
let operator = "";
let createdNum = "";
let tempResult = "";

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        if(firstOperand.length >= 20) return;
        createdNum = "";
        createdNum = btn.dataset.value;
        if(firstOperand == "0") {
            firstOperand = createdNum;
            display.textContent = firstOperand;
            return;
        }
        firstOperand = firstOperand + createdNum;
        display.textContent = firstOperand;
    });
});

operationButtons.forEach(opBtn => {
    opBtn.addEventListener("click", () =>{
        if (secondOperand !== "" && firstOperand !== "") {
            tempResult = getResult(secondOperand, firstOperand, operator);
            firstOperand = tempResult.toString();
            secondOperand = firstOperand;
            display.textContent = firstOperand;
            operator = opBtn.dataset.value;
            firstOperand = "";
            tempResult = "";
            return;
        }

        if (operator !== "" && secondOperand !== ""){
            operator = opBtn.dataset.value;
            return;
        }

        operator = opBtn.dataset.value;
        if (firstOperand === "") firstOperand = "0";
        secondOperand = firstOperand;
        display.textContent = firstOperand;
        firstOperand = "";
    });
});

function getResult (b, a, c){
    if (c === "+") return Math.round((Number(b) + Number(a)) * 100000) / 100000;
    if (c === "-") return Math.round((Number(b) - Number(a)) * 100000) / 100000;
    if (c === "*") return Math.round(Number(b) * Number(a) * 100000) / 100000;
    if (c === "/") {
        if (a == 0){
            return display.textContent = "You can't divide by 0, press AC or delete";
        } else {
            return Math.round(Number(b) / Number(a) * 100000) / 100000;
        }
    }
};

outcome.addEventListener("click", () => {
    if (firstOperand === "") return;
    if (secondOperand === "") return;
    if (tempResult !== "") return;
    tempResult = getResult(secondOperand, firstOperand, operator);
    firstOperand = tempResult.toString();
    display.textContent = firstOperand;
    operator = "";
    secondOperand = "";
    tempResult = "";
});

ac.addEventListener("click", () => {
    firstOperand = "";
    secondOperand = "";
    operator = "";
    createdNum = "";
    tempResult = "";
    display.textContent = "0";
});

point.addEventListener("click", () => {
    if (firstOperand === "") firstOperand = "0";
    if (firstOperand.includes(".")) return;
    createdNum = point.dataset.value;
    firstOperand = firstOperand + createdNum;
    display.textContent = firstOperand;
});

plusMinus.addEventListener("click", () => {
    if (firstOperand === "") return;
    firstOperand = -(firstOperand);
    display.textContent = firstOperand;
});

function percentage(a, b) {
    return Math.round(Number(a) * Number(b) * 100000) / 100000 / 100;
}

percent.addEventListener("click", () => {
    if (firstOperand === "") return;
    if (tempResult !== "") return;
    if (secondOperand == "") secondOperand = "1";
    operator = "";
    tempResult = percentage(firstOperand, secondOperand);
    firstOperand = tempResult.toString();
    display.textContent = firstOperand;
    secondOperand = "";
    operator = "";
    createdNum = "";
    tempResult = "";
});

document.addEventListener("keydown", (e) => {
    if (e.code == "Backspace"){
        if (firstOperand.length >= 2){
            let newFirstOperand = firstOperand.slice(0, -1);
            firstOperand = newFirstOperand;
            display.textContent = firstOperand;
        } else if (firstOperand.length = 1) {
            firstOperand = "0";
            display.textContent = firstOperand;;
        };
    };
});

document.addEventListener("keydown", (e) => {
    if (e.key == "0" || e.key == "1" || e.key == "2" || e.key == "3" || e.key == "4" || e.key == "5" || e.key == "6" || e.key == "7" || e.key == "8" || e.key == "9"){        
        if(firstOperand.length >= 20) return;
        createdNum = "";
        createdNum = e.key;
        if(firstOperand == "0") {
            firstOperand = createdNum;
            display.textContent = firstOperand;
            return;
        }
        firstOperand = firstOperand + createdNum;
        display.textContent = firstOperand;
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key == "=" || e.key == "Enter"){
        if (firstOperand === "") return;
        if (secondOperand === "") return;
        if (tempResult !== "") return;
        tempResult = getResult(secondOperand, firstOperand, operator);
        firstOperand = tempResult.toString();
        display.textContent = firstOperand;
        operator = "";
        secondOperand = "";
        tempResult = "";
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key == "Delete"){
    firstOperand = "";
    secondOperand = "";
    operator = "";
    createdNum = "";
    tempResult = "";
    display.textContent = 0; 
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key == "%"){
        if (firstOperand === "") return;
        if (tempResult !== "") return;
        if (secondOperand == "") secondOperand = "1";
        operator = "";
        tempResult = percentage(firstOperand, secondOperand);
        firstOperand = tempResult.toString();
        display.textContent = firstOperand;
        secondOperand = "";
        operator = "";
        createdNum = "";
        tempResult = ""; 
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key == "*" || e.key == "-" || e.key == "+" || e.key == "/"){
        if (secondOperand !== "" && firstOperand !== "") {
            tempResult = getResult(secondOperand, firstOperand, operator);
            firstOperand = tempResult.toString();
            secondOperand = firstOperand;
            display.textContent = firstOperand;
            operator = opBtn.dataset.value;
            firstOperand = "";
            tempResult = "";
            return;
        }

        if (operator !== "" && secondOperand !== ""){
            operator = e.key;
            return;

        }
        operator = e.key;
        if (firstOperand === "") firstOperand = "0";
        secondOperand = firstOperand;
        display.textContent = firstOperand;
        firstOperand = "";
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key == "." || e.key == ","){
        if (firstOperand === "") firstOperand = "0";
        if (firstOperand.includes(".")) return;
        createdNum = ".";
        firstOperand = firstOperand + createdNum;
        display.textContent = firstOperand;
    }
});