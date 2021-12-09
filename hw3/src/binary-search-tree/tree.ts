import {createSocket} from "dgram";

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

    print(): void {
        if(this._root != null)
        this.printHelper(this._root);
        else return;
    }

    private printHelper(node : Node<K,E>): void {
        console.log("\t%s\n%s\t\t%s", node.data, node.lChild?.data, node.rChild?.data);

        if(node.lChild != null && node.rChild != null) {
            this.printHelper(node.lChild);
            this.printHelper(node.rChild);
        }
    }
}
