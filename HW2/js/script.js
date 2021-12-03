window.addEventListener('load', init, false);

function init() {
    document.getElementById('Enter').onclick = validator;
}

function validator() {
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
    let result = computation(a,b,c);
    fillingTable(result);
}

function computation(a,b,c) {
    let discriminant = Math.pow(b, 2) - 4 * a * c;
    let result = [];
    if(discriminant<0){
        result[0] = "Нет действительных корней!";
    } else if(discriminant === 0) {
        result[0] = -b / (2 * a);
    } else {
        result[0] = (-b - Math.sqrt(discriminant))/(2 * a);
        result[1] = (-b + Math.sqrt(discriminant))/(2 * a);
    }
    return result;
}

function fillingTable(result) {
    let elementTable = document.getElementById('table');
    let elementTr = document.createElement('tr');
    let mainElementTd = document.createElement('td');
    let otherElementTd = document.createElement('td');
    if(result.length<2) {
        mainElementTd.appendChild(document.createTextNode(result[0]));
        mainElementTd.setAttribute("colspan","2");
        elementTr.appendChild(mainElementTd);
    } else {
        mainElementTd.appendChild(document.createTextNode(result[0]));
        otherElementTd.appendChild(document.createTextNode(result[1]));
        [mainElementTd,otherElementTd].forEach(el => elementTr.appendChild(el));
    }
    [mainElementTd,otherElementTd].forEach(el => el.onclick=function () {
        document.getElementById('table').removeChild(this.parentNode);
        fillingColor();
    });
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
