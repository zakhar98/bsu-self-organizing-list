class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class SelfOrganizedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    insert(data) {
        if (!this.head) {
            this.head = new Node(data);
            this.tail = new Node(data);
            return;
        }
        let newElem = new Node(data);
        this.tail.next = newElem;
        newElem.prev = this.tail;
        this.tail = newElem;
        this.count++;
    }

    size() {
        return this.count;
    }

    at(index) {
        if (index < 0 || index >= count) {
            return null;
        }
        for (let p = this.head; p.next !== null; p = p.next) {
            if (index-- === 0) {
                return p.data;
            }
        }
        return null;
    }

    findNode(data) {

        for (let p = this.head; p.next !== null; p = p.next) {
            if (p.data = data) {
                return p;
            }
        }
        return false;
    }

    toArray() {
        let arr = [this.count];
        let i = 0;
        for (let p = this.head; p.next !== null; p = p.next) {
            arr[i++] = p.data;
        }
        return arr;
    }

    removeAt(index) {
        if (index < 0 || index >= count) {
            return null;
        }
        del = this.findNode(at(index));
        if (del === null) {
            return;
        }
        this.count--;
        if (this.head === del) {
            this.head = del.next;
            this.head.prev = null;
            del.next = null;
            return;
        }
        if (this.tail === del) {
            this.tail = del.prev;
            this.tail.next = null;
            del.prev = null;
            return;
        }
        let a = del.prev;
        let b = del.next;
        a.next = b;
        b.prev = a;
        del.prev = del.next = null;
    }

    moveToFront(node) {
        if (this.head === node) {
            return;
        }
        else if (this.tail === node) {
            this.tail = node.prev;
            this.tail.next = null;
            node.prev = null;
            node.next = this.head;
            this.head = null;
            return;
        } else {
            let a = node.prev;
            let b = node.next;
            a.next = b;
            b.prev = a;
            node.prev = null;
            node.next = this.head;
        }
    }

    reorganize(data) {
        popular = this.findNode(data);
        if(!curr){
            return;
        }
        this.moveToFront(popular);
    }

}

module.exports = {
    SelfOrganizedList,
    Node
};
