let numbers = document.querySelectorAll(".number");
let field = document.querySelector('.screen');
let clearBtn = document.querySelector('.clearbtn');
let deleteBtn = document.querySelector('.delbtn')
let operators = document.querySelectorAll('.operator');
let operatorList = ['+','-','÷','*'];

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
    field.innerHTML = '';
}

function deleteLast() {
    field.innerHTML = field.innerHTML.slice(0,-1);
}

function operate(operator,x,y) {
    return operator(x,y);
}

numbers.forEach(button => {
    button.addEventListener('click', () => {
        field.innerHTML += button.dataset.value;
    });
});

operators.forEach(button => {
    button.addEventListener('click', () => {
        if ( operatorList.includes(field.innerHTML[field.innerHTML.length -1]) ) {
            deleteLast();
        }
        field.innerHTML += button.dataset.operator;
    });
});

clearBtn.addEventListener('click', clearDisplay);
deleteBtn.addEventListener('click', deleteLast);

