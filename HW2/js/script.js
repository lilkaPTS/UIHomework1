window.addEventListener('load', init, false);

function init() {
    document.getElementById('Enter').onclick = solution;
}
function computation() {

}
function solution() {
    let elementTable = document.getElementById('table');
    let elementTr = document.createElement('tr');
    let elementTd = document.createElement('td');
    let a = Number(document.getElementById('A').value.replace(/\s/g, '').replace(/,/g, '.'));
    let b = Number(document.getElementById('B').value.replace(/\s/g, '').replace(/,/g, '.'));
    let c = Number(document.getElementById('C').value.replace(/\s/g, '').replace(/,/g, '.'));
    if(!a || !b || !c){
        let str = "";
        if(!a) str += ", первый";
        if(!b) str += ", второй";
        if(!c) str += ", третий";
        str = str[2].toUpperCase() + str.slice(3);
        alert(str + (str.split(' ').length > 1 ? " аргументы должны быть числами!" : " аргумент должен быть числом!"));
        return;
    }
    let discriminant = Math.pow(b, 2) - 4 * a * c;
    if(discriminant<0){
        elementTd.appendChild(document.createTextNode("Нет действительных корней!"));
    } else if(discriminant === 0) {
        let x12 = -b / (2 * a)
        elementTd.appendChild(document.createTextNode("x12 = " + x12));
    } else {
        let x1 = (-b - Math.sqrt(discriminant))/(2 * a);
        let x2 = (-b + Math.sqrt(discriminant))/(2 * a);
        elementTd.appendChild(document.createTextNode("x1 = " + x1 + " x2 = " + x2));
    }
    elementTr.appendChild(elementTd);
    elementTd.onclick = function () {
        document.getElementById('table').removeChild(this.parentNode);
        fillingColor();
    };
    elementTable.appendChild(elementTr);
    fillingColor();
}

function fillingColor() {
    let elementChildren = document.getElementById('table').children;
    for (let i = 1; i < elementChildren.length; i++) {
        if(i%2===0){
            elementChildren[i].setAttribute("class", "attr2");
        } else {
            elementChildren[i].setAttribute("class", "attr1");
        }
    }
}
