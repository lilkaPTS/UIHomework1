import {Tree} from "./binary-search-tree/tree.js";

export function printTree(): void {
    let tree: Tree<number,string> = new Tree<number, string>();
    tree.insert(7,"7");
    tree.insert(3,"3");
    tree.insert(9,"9");
    tree.insert(2,"2");
    tree.insert(5,"5");
    tree.insert(8,"8");
    tree.insert(10,"10");
    tree.insert(1,"1");
    tree.insert(6,"6");
    tree.print("h");
}
//printTree();