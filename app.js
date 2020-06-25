let a;
let b;
let c;
let h;
let temp;
let k;
let x1;
let x2;
let checkOp;

const form = document.querySelector('form');
const feedback = document.querySelector('.feedback');

form.addEventListener('submit', e => {
    e.preventDefault();
    feedback.innerHTML = '';
    
    a = parseFloat(form.a.value);
    b = parseFloat(form.b.value);
    c = parseFloat(form.c.value);

    checkOp = form.op.value;
    if(checkOp === 'qf'){
        quadFormula();
        feedback.innerHTML = 'The x-intercept(s) of the equation are<br>';
        if(x1 === x2){
            feedback.innerHTML += `x = ${x1}<br>`;
            feedback.innerHTML += `(${x1} , 0)`;
        } else {
            feedback.innerHTML += `x = ${x1}, x = ${x2}<br>`;
            feedback.innerHTML += `(${x1} , 0)    (${x2} , 0)`;
        }
    } else if(checkOp === 'cs'){
        completeSquare();
        feedback.innerHTML = 'The vertex of the equation is<br>';
        feedback.innerHTML += `(${h} , ${k})`
    }
});

const quadFormula = function() {
    x1 = (-b + Math.sqrt((b)**2 - 4 * a * c)) / (2 * a);
    x2 = (-b - Math.sqrt((b)**2 - 4 * a * c)) / (2 * a);
};

const completeSquare = function() {
    c *= -1;
    if(a < 0){
        a /= -a;
    } else {
        a /= a;
    }
    b /= a;
    h = b / 2;
    h*= -1;
    temp = h**2;
    k = c + (a * temp);
    k *= -1;
};