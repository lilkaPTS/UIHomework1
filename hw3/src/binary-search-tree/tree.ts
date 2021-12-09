import {Node} from "./node.js";

export abstract class Tree<K, E> {
    protected _root: Node<K, E>  | null;

    protected constructor() {
        this._root = null;
    }

    protected get(key: K): E | null {
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

    protected remove(key:K): void {
        //Удаление листа
        let currentNode: Node<K, E> | null = this._root;
        let parentNode: Node<K, E> | null = null;
        while (currentNode?.key != key) { //поиск
            parentNode = currentNode;
            if(currentNode == null){
                return;
            } else if (key < currentNode.key) {
                currentNode = currentNode.lChild;
            } else {
                currentNode = currentNode.rChild;
            }
        }
        if(currentNode.lChild == null && currentNode.rChild == null) {
            if(currentNode == this._root) {
                this._root = null;
            } else {
                if(parentNode)
                    if(currentNode == parentNode.lChild){
                        parentNode.lChild = null;
                    } else {
                        parentNode.rChild = null;
                    }
            }
        }
    }

    protected insert(key: K, data: E): void {
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

    protected getLevel(node: Node<K, E>): number {
        if(node!= null){
            // @ts-ignore
            return 1+Math.max(this.getLevel(node.lChild), this.getLevel(node.rChild))
        } else {
            return 0;
        }
    }

    protected isNull(node: Array<Node<K, E>|null>): boolean {
        for (let i = 0; i < node.length; i++) {
            if(node[i] != null) {
                return true;
            }
        }
        return false;
    }
}