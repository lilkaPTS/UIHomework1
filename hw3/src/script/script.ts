import {TreeByHtml} from "../binary-search-tree/treeByHtml.js";

window.addEventListener('load', init, false);

let vertexArray: Array<string> = []; //

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
    let a1 = document.getElementById('key').value;
    // @ts-ignore
    let a2 = document.getElementById('vvv').value;
    vertexArray[vertexArray.length] = String(a1 + "~" + a2);
    let tree: TreeByHtml<number, string> = new TreeByHtml<number,string>();
    for (let i = 0; i < vertexArray.length; i++) {
        tree.insert(Number(vertexArray[i].split('~')[0]), vertexArray[i].split('~')[1])
    }
    //tree.insert(a1,a2); ломается
    tree.print("h");
}
function onclickGet(): void {
    let tree: TreeByHtml<number, string> = new TreeByHtml<number,string>();
    for (let i = 0; i < vertexArray.length; i++) {
        tree.insert(Number(vertexArray[i].split('~')[0]), vertexArray[i].split('~')[1])
    }

    // @ts-ignore
    let message: string | null = tree.get(document.getElementById('key').value);
    if(message == null) {
        message = "Элемент с таким ключом не найден!"
    }
    alert(message);
}
function onclickRemove(): void {
    alert("проверка связи");
}