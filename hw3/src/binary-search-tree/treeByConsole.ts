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
        if(this._root) {
            console.log("preorderTraversal - " + this.consolePrinter(this._root));
            process.stdout.write(`inorderTraversal - `);
            this.consolePrinterV2(this._root);
            console.log("\npostorderTraversal - " + this.consolePrinterV3(this._root));
        }
    }

    private consolePrinter(node: Node<K, E>): string {
        let str: string = `${node.data} `;
        if(node.lChild) {
            str += `${this.consolePrinter(node.lChild)}`;
        }
        if(node.rChild) {
            str += `${this.consolePrinter(node.rChild)}`;
        }
        return str;
    }

    private consolePrinterV2(node: Node<K, E>): void {
        if(node != null) {
            if(node.lChild)
                this.consolePrinterV2(node.lChild);
            process.stdout.write(`${node.data} `);
            if(node.rChild)
                this.consolePrinterV2(node.rChild);
        }
    }
    private consolePrinterV3(node: Node<K, E>): string {
        let str: string = "";
        if(node.lChild) {
            str += `${this.consolePrinter(node.lChild)}`;
        }
        if(node.rChild) {
            str += `${this.consolePrinter(node.rChild)}`;
        }
        str += `${node.data} `;
        return str;
    }


}