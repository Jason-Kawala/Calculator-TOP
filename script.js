let page = document.querySelector('html');
let numbers = document.querySelectorAll(".number");
let lowField = document.querySelector('.low-screen');
let opField = document.querySelector('.op-screen');
let upField = document.querySelector('.up-screen');
let clearBtn = document.querySelector('.clearbtn');
let deleteBtn = document.querySelector('.delbtn');
let operators = document.querySelectorAll('.operator');
let operatorList = ['+','-','÷','*','/'];
let equal = document.querySelector('.equalbtn');
let equalClick = new Event('click');


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
        alert("Can't do that..");
        clearDisplay();
        return;
    }
    return x/y;
}

function clearDisplay() { // Clear all calculator
    lowField.innerHTML = '';
    upField.innerHTML = '';
    opField.innerHTML = '';
}

function deleteLast() { // Delete last element of the number field
    lowField.innerHTML = lowField.innerHTML.slice(0,-1);
}

function operate(calcul,x,y) {
    return calcul(x,y);
}

function makeCalcul(operator) {
    switch (operator) {
        case '+':
            let result1 = operate(add, parseInt(upField.innerHTML), parseInt(lowField.innerHTML) );
            return result1;
        case '-':
            let result2 = operate(substract, parseInt(upField.innerHTML), parseInt(lowField.innerHTML) );
            return result2;
        case '*':
            let result3 = operate(multiply, parseInt(upField.innerHTML), parseInt(lowField.innerHTML) );
            return result3;
        case '÷':
            let result4 = operate(divide, parseInt(upField.innerHTML), parseInt(lowField.innerHTML) );
            return result4;
        case '/':
            let result5 = operate(divide, parseInt(upField.innerHTML), parseInt(lowField.innerHTML) );
            return result5;
    }
}

function convertInput(keyboardInput) { // Function to handle keyboard input
    switch(keyboardInput) {
        case '/':
            return '÷';
        case '+':
            return '+';
        case '-':
            return '-';
        case '*':
            return '*';
    }
  }

numbers.forEach(button => { // Numbers button listener
    button.addEventListener('click', () => {
        lowField.innerHTML += button.dataset.value;
    });
});

operators.forEach(opBtn => {
    opBtn.addEventListener('click', () => {
        if (upField.innerHTML[upField.innerHTML.length -1] === '=') {
            console.log('testequal');
        } else if (upField.innerHTML != '' && lowField.innerHTML != '') {
            equal.dispatchEvent(equalClick);
        }
        opField.innerHTML = opBtn.dataset.operator;
        upField.innerHTML = lowField.innerHTML;
        lowField.innerHTML = '';
    });
});

equal.addEventListener('click', () => {
    upField.innerHTML += opField.innerHTML + lowField.innerHTML + equal.innerHTML;
    let operator = opField.innerHTML;
    opField.innerHTML = '';
    lowField.innerHTML = Math.round(makeCalcul(operator) * 100) / 100;
});

clearBtn.addEventListener('click', clearDisplay);
deleteBtn.addEventListener('click', deleteLast);

page.addEventListener('keydown', function(event) {
    if (operatorList.includes(event.key) ) {
        opBtn.dispatchEvent('click')
    } else if (event.key === "=") {
        equal.dispatchEvent(equalClick);
    } else {
        lowField.innerHTML += `${event.key}`;
    }
});
