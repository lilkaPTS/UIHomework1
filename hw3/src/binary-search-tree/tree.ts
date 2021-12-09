class Node<K, E> {
    private _key: K;
    private _data: E;
    private _lChild: Node<K, E> | null;
    private _rChild: Node<K, E> | null;


    constructor(key: K, data: E, lChild: Node<K, E> | null, rChild: Node<K, E> | null) {
        this._key = key;
        this._data = data;
        this._lChild = lChild;
        this._rChild = rChild;
    }

    get key(): K {
        return this._key;
    }

    set key(value: K) {
        this._key = value;
    }

    get data(): E {
        return this._data;
    }

    set data(value: E) {
        this._data = value;
    }

    get lChild(): Node<K, E> | null {
        return this._lChild;
    }

    set lChild(value: Node<K, E> | null) {
        this._lChild = value;
    }

    get rChild(): Node<K, E> | null {
        return this._rChild;
    }

    set rChild(value: Node<K, E> | null) {
        this._rChild = value;
    }
}

export class Tree<K, E> {
    private _root: Node<K, E>  | null;

    constructor() {
        this._root = null;
    }

    get(key: K): E | null {
        let currentNode: Node<K, E> | null = this._root;
        while (true) {
            if(currentNode == null){
                return null;
            } else if(key == currentNode.key) {
                return currentNode.data;
            } else if (key < currentNode.key) {
                currentNode = currentNode.lChild;
            } else {
                currentNode = currentNode.rChild;
            }
        }
    }

    remove(key:K): void {

    }


    insert(key: K, data: E): void {
        let newNode: Node<K, E> = new Node<K, E>(key, data, null, null);
        if(this._root == null) {
            this._root = newNode;
            return;
        }
        let currentNode: Node<K, E> = this._root;
        while (true) {
            if(key == currentNode.key) {
                return;
            } else if(key < currentNode.key) { //left
                if(currentNode.lChild == null) {
                    currentNode.lChild = newNode;
                    return;
                } else {
                    currentNode = currentNode.lChild;
                }
            } else {                            //right
                if(currentNode.rChild == null) {
                    currentNode.rChild = newNode;
                    return;
                } else {
                    currentNode = currentNode.rChild;
                }
            }
        }
    }
    /*
    insert(data: T): void {
        let newNode: Node<T> = new Node<T>(data, null, null);
        if(this._root == null) {
            this._root = newNode;
            return;
        }
        let currentNode: Node<T> = this._root;
        while (true) {
            if(data == currentNode.data) {
                return;
            } else if(data < currentNode.data) {
                if(currentNode.lChild == null) {
                    currentNode.lChild = newNode;
                    return;
                } else {
                    currentNode = currentNode.lChild;
                }
            } else {
                if(currentNode.rChild == null) {
                    currentNode.rChild = newNode;
                    return;
                } else {
                    currentNode = currentNode.rChild;
                }
            }
        }
    }
    */


    print(ui: string): void {
        if(ui != "c") {
            this.clearTable();
            let elementTable = document.createElement('table');
            elementTable.setAttribute("id", "table");
            // @ts-ignore
            document.getElementById('body').appendChild(elementTable);
        }
        let currentArray: Array<Node<K, E>|null> = [];
        currentArray[0] = this._root;
        if(this._root){
            if(ui == "c"){
                console.log(`\t${this._root.key}`);
            } else {
                this.htmlPrinter(currentArray, 0);
            }
        }
        let level: number = 0;
        while (true) {
            let printArray: Array<Node<K, E>|null> = [];
            for (let i = 0; i < currentArray.length; i++) {
                printArray[printArray.length] = currentArray[i]?.lChild || null;
                printArray[printArray.length] = currentArray[i]?.rChild || null;
            }
            level++;
            if(this.isNull(printArray)){
                if(ui == "c"){
                    this.consolePrinter(printArray);
                } else {
                    this.htmlPrinter(printArray, level);
                }
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
        let elementT = document.getElementById('table');
        if(elementT != null) {
            elementT.remove();
        }
    }

    private isNull(node: Array<Node<K, E>|null>): boolean {
        for (let i = 0; i < node.length; i++) {
            if(node[i] != null) {
                return true;
            }
        }
        return false;
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
