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
        if(currentNode.lChild == null && currentNode.rChild == null) { //лист
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
        } else if(currentNode.lChild != null && currentNode.rChild == null) { //узел с левым ребёнком
            if(currentNode == this._root){
                this._root = currentNode.lChild;
            }
            if(parentNode) {
                if(currentNode == parentNode.lChild){
                    parentNode.lChild = currentNode.lChild;
                }else {
                    parentNode.rChild = currentNode.lChild;
                }
            }
        } else if(currentNode.lChild == null && currentNode.rChild != null) { //узел с правым ребёнком
            if(currentNode == this._root){
                this._root = currentNode.rChild;
            }
            if(parentNode) {
                if(currentNode == parentNode.lChild){
                    parentNode.lChild = currentNode.rChild;
                }else {
                    parentNode.rChild = currentNode.rChild;
                }
            }
        } else {                                                               //узел с двумя дочерними узлами
            let descendantNode: Node<K, E> | null = this.searchDescendant(currentNode);
            if(currentNode == this._root) {
                this._root = descendantNode;
                return;
            }
            let parentDescendantNode: Node<K, E> | null = null;
            if(descendantNode) {
                parentDescendantNode = this.searchParent(descendantNode.key);
                if(parentDescendantNode) {
                    parentDescendantNode.lChild = null;                        //Зануляем левого ребёнка родителя потомка
                    descendantNode.lChild = currentNode.lChild;
                    descendantNode.rChild = currentNode.rChild;
                    if(parentNode?.lChild == currentNode) {
                        parentNode.lChild = descendantNode;
                    } else if(parentNode?.rChild == currentNode) {
                        parentNode.rChild = descendantNode;
                    }
                }
            }
        }
    }

    private searchDescendant(node: Node<K, E>): Node<K, E> | null{
        let currentNode: Node<K, E> | null = node.rChild;
        while (true) { // поиск потомка
            if(currentNode?.lChild == null) {
                return currentNode;
            } else  {
                currentNode = currentNode.lChild;
            }
        }
    }

    private searchParent(key: K): Node<K, E> | null {
        let currentNode: Node<K, E> | null = this._root;
        let parentNode: Node<K, E> | null = null;
        while (currentNode?.key != key) {
            parentNode = currentNode;
            if(currentNode == null){
                return null;
            } else if (key < currentNode.key) {
                currentNode = currentNode.lChild;
            } else {
                currentNode = currentNode.rChild;
            }
        }
        return parentNode;
    }


    protected insert(key: K, data: E): void {
        let newNode: Node<K, E> = new Node(key, data,null,null); //создали новый элемент
        if(this._root == null) {
            this._root = newNode;
        } else {
            let currentNode: Node<K, E> | null = this._root;
            let parentNode: Node<K, E> = this._root;
            while (true) {
                if(currentNode!= null) {
                    if(key == currentNode.key){ //такой элемент уже есть
                        return;
                    } else if(key<currentNode.key) { //двигаемся влево
                        parentNode = currentNode;
                        currentNode = currentNode.lChild;
                    }  else {// двигаемся вправо
                        parentNode = currentNode;
                        currentNode = currentNode.rChild;
                    }
                } else {
                    if(parentNode?.lChild == null && key < parentNode.key) {
                        parentNode.lChild = newNode;
                        return;
                    } else {
                        parentNode.rChild = newNode;
                        return;
                    }
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