import {TreeByConsole} from "./binary-search-tree/treeByConsole.js";

let tree: TreeByConsole<number,string> = new TreeByConsole<number, string>();
tree.insert(8, "8");
tree.insert(4, "4");
tree.insert(2, "2");
tree.insert(5, "5");
tree.insert(12, "12");
tree.insert(9, "9");
tree.insert(10, "10");
tree.insert(14, "14");
tree.insert(3, "3");
tree.insert(7, "7");
tree.print();

