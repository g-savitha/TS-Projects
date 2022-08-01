import { Sorter } from './Sorter';

class Node {
    next: Node | null = null;
    constructor(public data: number) {}
}

export class LinkedList extends Sorter {
    head: Node | null = null;

    add(data: number): void {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }

        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }

        tail.next = node;
    }

    get length(): number {
        if (!this.head) {
            return 0;
        }

        let length = 1;
        let node = this.head;
        while (node.next) {
            length++;
            node = node.next;
        }
        return length;
    }

    at(idx: number): Node {
        if (!this.head) {
            throw new Error('Index out of bounds');
        }

        let count = 0;
        let node: Node | null = this.head;
        while (node) {
            if (count === idx) {
                return node;
            }
            count++;
            node = node.next;
        }
        throw new Error('Index out of bounds');
    }
    compare(leftIdx: number, rightIdx: number): boolean {
        if (!this.head) throw new Error('List is empty');

        return this.at(leftIdx).data > this.at(rightIdx).data;
    }
    swap(leftIdx: number, rightIdx: number): void {
        const leftNode = this.at(leftIdx);
        const rightNode = this.at(rightIdx);

        const leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    }

    print(): void {
        if (!this.head) {
            return;
        }
        let node: Node | null = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
}
