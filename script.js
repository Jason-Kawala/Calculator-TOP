let numbers = document.querySelectorAll(".number");
let lowField = document.querySelector('.low-screen');
let opField = document.querySelector('.op-screen');
let upField = document.querySelector('.up-screen');
let clearBtn = document.querySelector('.clearbtn');
let deleteBtn = document.querySelector('.delbtn');
let operators = document.querySelectorAll('.operator');
let operatorList = ['+','-','÷','*'];
let equal = document.querySelector('.equalbtn');

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
    lowField.innerHTML = '';
    upField.innerHTML = '';
    opField.innerHTML = '';
}

function deleteLast() {
    lowField.innerHTML = lowField.innerHTML.slice(0,-1);
}

function operate(operator,x,y) {
    return operator(x,y);
}

numbers.forEach(button => {
    button.addEventListener('click', () => {
        lowField.innerHTML += button.dataset.value;
    });
});

operators.forEach(opBtn => {
    opBtn.addEventListener('click', () => {
        opField.innerHTML = opBtn.dataset.operator;
        upField.innerHTML = lowField.innerHTML;
        lowField.innerHTML = '';
    });
});

equal.addEventListener('click', () => {
    upField.innerHTML += opField.innerHTML + lowField.innerHTML + equal.innerHTML;
    let operator = opField.innerHTML
    opField.innerHTML = '';
    switch (operator) {
        case '+':
            let result1 = operate(add, parseInt(upField.innerHTML), parseInt(lowField.innerHTML) );
            lowField.innerHTML = result1;
            break;
        case '-':
            let result2 = operate(substract, parseInt(upField.innerHTML), parseInt(lowField.innerHTML) );
            lowField.innerHTML = result2;
            break;
        case '*':
            let result3 = operate(multiply, parseInt(upField.innerHTML), parseInt(lowField.innerHTML) );
            lowField.innerHTML = result3;
            break;
        case '÷':
            let result4 = operate(divide, parseInt(upField.innerHTML), parseInt(lowField.innerHTML) );
            lowField.innerHTML = result4
            break;
    }
})

clearBtn.addEventListener('click', clearDisplay);
deleteBtn.addEventListener('click', deleteLast);
