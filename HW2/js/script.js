window.addEventListener('load', init, false);

function init() {
    document.getElementById('Enter').onclick = solution;
}

function solution() {
    let a = Number(document.getElementById('A').value);
    let b = Number(document.getElementById('B').value);
    let c = Number(document.getElementById('C').value);
    let x1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c))/(2 * a);
    let x2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c))/(2 * a);
    alert("x1 = " + x2 + " x2 = " + x1);
}
