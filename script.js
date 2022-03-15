let numbers = document.querySelectorAll(".number");
let field = document.querySelector('.screen');
let clearBtn = document.querySelector('.clearbtn');
let deleteBtn = document.querySelector('.delbtn')

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

function display(e) {
    let screen = document.querySelector('.screen');
    field.innerHTML += e.dataset.value;
    return Number(field.innerHTML);
}

numbers.forEach(button => {
    button.addEventListener('click', () => {
        field.innerHTML += button.dataset.value;
    });
});

clearBtn.addEventListener('click', clearDisplay);
deleteBtn.addEventListener('click', deleteLast);

