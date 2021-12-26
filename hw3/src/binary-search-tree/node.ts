export class Node<K, E> {
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