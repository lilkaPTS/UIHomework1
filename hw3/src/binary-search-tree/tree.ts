class Node<T> {
    private _data: T;
    private _lChild: Node<T> | null;
    private _rChild: Node<T> | null;

    constructor(data: T, lChild: Node<T> | null, rChild: Node<T> | null) {
        this._data = data;
        this._lChild = lChild;
        this._rChild = rChild;
    }

    get data(): T {
        return this._data;
    }

    set data(value: T) {
        this._data = value;
    }

    get lChild(): Node<T> | null {
        return this._lChild;
    }

    set lChild(value: Node<T> | null) {
        this._lChild = value;
    }

    get rChild(): Node<T> | null {
        return this._rChild;
    }

    set rChild(value: Node<T> | null) {
        this._rChild = value;
    }
}

export class Tree<T> {
    private _root: Node<T> | null;

    constructor() {
        this._root = null;
    }

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

    print(): void {
        if(this._root != null)
        this.printHelper(this._root);
        else return;
    }

    private printHelper(node : Node<T>): void {
        console.log("\t%s\n%s\t\t%s", node.data, node.lChild?.data, node.rChild?.data);

        if(node.lChild != null && node.rChild != null) {
            this.printHelper(node.lChild);
            this.printHelper(node.rChild);
        }
    }
}
