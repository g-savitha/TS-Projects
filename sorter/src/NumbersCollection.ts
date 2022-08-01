import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
    constructor(public data: number[]) {
        super();
    }
    //convert method to property using getter
    get length(): number {
        return this.data.length;
    }
    public swap(leftIdx: number, rightIdx: number): void {
        const leftHand = this.data[leftIdx];
        this.data[leftIdx] = this.data[rightIdx];
        this.data[rightIdx] = leftHand;
    }
    public compare(leftIdx: number, rightIdx: number): boolean {
        return this.data[leftIdx] > this.data[rightIdx];
    }
}
