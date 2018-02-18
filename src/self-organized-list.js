class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class SelfOrganizedList {

    size = 0;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    insert(data) {
        if (this.head === null) {
            this.head = new Node(data);
            this.tail = new Node(data);
        }
        let newElem = new Node(data);
        newElem.next = this.head;
        this.head.prev = newElem;
        this.head = newElem;
    }

    size() {
        return this.size;
    }

    at(index) {
        if (index < 0 || index >= size) {
            return false;
        }
        for (let p = this.head; p.next !== null; p = p.next) {
            if (index-- == 0) {
                return p.data;
            }
        }
        return false;
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

    }

    removeAt(index) {
        if (index >= 0 || index < size) {

            for (let p = this.head; p.next !== null; p = p.next) {
                
                if (index-- == 0) {
                    return p.data;
                }
            }
        }
    }

    moveToFront(node) {

    }

    reorganize(data) {

    }

}

module.exports = {
    SelfOrganizedList,
    Node
};
