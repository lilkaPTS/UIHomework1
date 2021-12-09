import {Node} from "./node.js";
import {Tree} from "./tree.js";

export class TreeByConsole<K, E> extends Tree<K, E>{

    constructor() {
        super();
    }


    get(key: K): E | null {
        return super.get(key);
    }

    remove(key: K) {
        super.remove(key);
    }

    insert(key: K, data: E) {
        super.insert(key, data);
    }

    print(): void {
        let currentArray: Array<Node<K, E>|null> = [];
        currentArray[0] = this._root;
        if(this._root)
        console.log(`\t${this._root.key}`);
        while (true) {
            let printArray: Array<Node<K, E>|null> = [];
            for (let i = 0; i < currentArray.length; i++) {
                printArray[printArray.length] = currentArray[i]?.lChild || null;
                printArray[printArray.length] = currentArray[i]?.rChild || null;
            }
            if(this.isNull(printArray)){
                this.consolePrinter(printArray);
                currentArray = printArray;
            } else {
                break;
            }
        }
    }

    private consolePrinter(node: Array<Node<K, E>|null>): void {
        let str: string = "";
        for (let i = 0; i < node.length; i++) {
            if(node[i]== null){
                str+= "0\t";
            } else {
                str += node[i]?.key + "\t";
            }
        }
        console.log(str);
    }

}