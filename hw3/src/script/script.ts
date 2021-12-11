import {TreeByHtml} from "../binary-search-tree/treeByHtml.js";

window.addEventListener('load', init, false);

let treeNS: TreeByHtml<number, string> =  new TreeByHtml<number, string>();

function init(): void {
    // @ts-ignore
    document.getElementById('add').onclick = onclickAdd;
    // @ts-ignore
    document.getElementById('get').onclick = onclickGet;
    // @ts-ignore
    document.getElementById('remove').onclick = onclickRemove;
}

function onclickAdd(): void {
    // @ts-ignore
    let a1 = Number(document.getElementById('key').value);
    // @ts-ignore
    let a2 = document.getElementById('vvv').value;
    if(!isNaN(a1)) {
        treeNS.insert(a1,a2);
        treeNS.print();
    } else {
        alert("Ключ должен быть числом");
    }
}

function onclickGet(): void {
    // @ts-ignore
    let key = Number(document.getElementById('key').value);
    if(!isNaN(key)){
        let element = treeNS.get(key);
        if(element == null){
            alert("Элемент с таким ключом не найден");
        } else {
            alert(element);
        }
    } else {
        alert("Ключ должен быть числом");
    }
}

function onclickRemove(): void {
    // @ts-ignore
    let key = Number(document.getElementById('key').value);
    if(!isNaN(key)){
        let element = treeNS.get(key);
        if(element == null){
            alert("Элемент с таким ключом не найден");
        } else {
            treeNS.remove(key);
            treeNS.print();
        }
    } else {
        alert("Ключ должен быть числом");
    }

}