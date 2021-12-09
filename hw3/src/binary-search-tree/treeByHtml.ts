import {Node} from "./node.js";
import {Tree} from "./tree.js";

export class TreeByHtml<K, E> extends Tree<K, E>{

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

    print(ui: string): void {
        this.clearTable();
        let elementTable = document.createElement('table');
        elementTable.setAttribute("id", "table");
        // @ts-ignore
        document.getElementById('tableHere').appendChild(elementTable);
        let currentArray: Array<Node<K, E>|null> = [];
        currentArray[0] = this._root;
        this.htmlPrinter(currentArray, 0);
        let level: number = 0;
        while (true) {
            let printArray: Array<Node<K, E>|null> = [];
            for (let i = 0; i < currentArray.length; i++) {
                printArray[printArray.length] = currentArray[i]?.lChild || null;
                printArray[printArray.length] = currentArray[i]?.rChild || null;
            }
            level++;
            if(this.isNull(printArray)){
                this.htmlPrinter(printArray, level);
                currentArray = printArray;
            } else {
                break;
            }
        }
    }


    private clearTable(): void {
        /*
        Массив создаётся корректно, но удаляются не все элементы
        let elements = document.getElementById('table').children;
        for (let i = 0; i < elements.length; i++) {
            elements[i].remove();
        }
         */
        // @ts-ignore
        let elementT = document.getElementById('table');
        if(elementT != null) {
            elementT.remove();
        }
    }

    private getLevel(node: Node<K, E>): number {
        if(node!= null){
            // @ts-ignore
            return 1+Math.max(this.getLevel(node.lChild), this.getLevel(node.rChild))
        } else {
            return 0;
        }
    }

    private htmlPrinter(node: Array<Node<K, E>|null>, level: number): void {
        let elementTable = document.getElementById('table');
        let elementTr = document.createElement('tr');
        for (let i = 0; i < node.length; i++) {
            if(node[i]== null){
                let elementTd = document.createElement('td');
                elementTd.appendChild(document.createTextNode(" "));
                if(this._root)
                    elementTd.setAttribute("colspan", String(Math.pow(2, ((this.getLevel(this._root)-1)-level))));
                elementTr.appendChild(elementTd);
            } else {
                let elementTd = document.createElement('td');
                elementTd.appendChild(document.createTextNode("(" + <string><unknown>node[i]?.key + ";" + <string><unknown>node[i]?.data + ")"));
                if(this._root)
                    elementTd.setAttribute("colspan", String(Math.pow(2, ((this.getLevel(this._root)-1)-level))));
                elementTr.appendChild(elementTd);
            }
        }
        // @ts-ignore
        elementTable.appendChild(elementTr);
    }

}
