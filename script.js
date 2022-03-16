let numbers = document.querySelectorAll(".number");
let nbField = document.querySelector('.screen');
let opField = document.querySelector('.op-screen');
let clearBtn = document.querySelector('.clearbtn');
let deleteBtn = document.querySelector('.delbtn')
let operators = document.querySelectorAll('.operator');
let operatorList = ['+','-','÷','*'];
let buttons = document.querySelectorAll('.btn');

// Basic operating functions
function add(x,y) {
    return x+y;
}

function substract(x,y) {
    return x-y;
}

function multiply(x,y) {
    return x*y;
}

function divide(x,y) {
    if (y === 0) {
        return "Nope";
    }
    return x/y;
}

function clearDisplay() {
    nbField.innerHTML = '';
}

function deleteLast() {
    nbField.innerHTML = nbField.innerHTML.slice(0,-1);
}

function operate(operator,x,y) {
    return operator(x,y);
}

numbers.forEach(button => {
    button.addEventListener('click', () => {
        nbField.innerHTML += button.dataset.value;
    });
});

operators.forEach(button => {
    button.addEventListener('click', () => {
        if ( operatorList.includes(nbField.innerHTML[nbField.innerHTML.length -1]) ) {
            deleteLast();
        }
        nbField.innerHTML += button.dataset.operator;
    });
});

clearBtn.addEventListener('click', clearDisplay);
deleteBtn.addEventListener('click', deleteLast);
