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
        this.consolePrinter(currentArray, 0);
        let level: number = 0;
        while (true) {
            let printArray: Array<Node<K, E>|null> = [];
            for (let i = 0; i < currentArray.length; i++) {
                printArray[printArray.length] = currentArray[i]?.lChild || null;
                printArray[printArray.length] = currentArray[i]?.rChild || null;
            }
            level++;
            if(this.isNull(printArray)){
                this.consolePrinter(printArray, level);
                currentArray = printArray;
            } else {
                break;
            }
        }
    }

    private consolePrinter(node: Array<Node<K, E>|null>, level: number): void {
        let str: string = "";
        if(this._root)
        for (let i = 0; i < this.getLevel(this._root)-level; i++) {
            str+="\t";
        }
        for (let i = 0; i < node.length; i++) {
            if(node[i]== null){
                str+= "\t";
            } else {
                str += node[i]?.key + "\t";
            }
        }
        console.log(str);
    }

}