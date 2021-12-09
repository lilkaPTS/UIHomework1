import {Tree} from "../binary-search-tree/tree.js";
import {printTree} from "../index.js";

window.addEventListener('load', init, false);

let vertexArray: Array<string> = []; //

function init(): void {
    // @ts-ignore
    document.getElementById('add').onclick = onclickAdd;
    // @ts-ignore
    document.getElementById('get').onclick = onclickGet;
    //printTree();
}
function onclickAdd(): void {
    // @ts-ignore
    let a1 = document.getElementById('key').value;
    // @ts-ignore
    let a2 = document.getElementById('vvv').value;
    vertexArray[vertexArray.length] = String(a1 + "~" + a2);
    let tree: Tree<number, string> = new Tree<number,string>();
    for (let i = 0; i < vertexArray.length; i++) {
        tree.insert(Number(vertexArray[i].split('~')[0]), vertexArray[i].split('~')[1])
    }
    //tree.insert(a1,a2); ломается
    tree.print("h");
}
function onclickGet(): void {
    // @ts-ignore
    //console.log(tree.get(document.getElementById('key').value));
}