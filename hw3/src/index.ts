import {Tree} from "./binary-search-tree/tree.js";
import {Key} from "readline";

let tree: Tree<number,string> = new Tree<number, string>();
tree.insert(7,"H");
tree.insert(3,"E");
tree.insert(9,"L");
tree.insert(2,"L");
tree.insert(5,"O");
tree.insert(8,"T");
tree.insert(1,"R");
tree.insert(4,"E");
tree.insert(6,"E");
console.log(tree.get(7));
console.log(tree.get(3));
console.log(tree.get(9));
console.log(tree.get(2));
console.log(tree.get(5));
console.log(tree.get(8));
console.log(tree.get(1));
console.log(tree.get(4));
console.log(tree.get(6));

