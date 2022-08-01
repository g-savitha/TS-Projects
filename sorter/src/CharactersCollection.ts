import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
    constructor(public data: string) {
        super();
    }

    get length() {
        return this.data.length;
    }

    swap(leftIdx: number, rightIdx: number): void {
        const characters = this.data.split('');
        const leftHand = characters[leftIdx];
        characters[leftIdx] = characters[rightIdx];
        characters[rightIdx] = leftHand;
        this.data = characters.join('');
    }
    compare(leftIdx: number, rightIdx: number): boolean {
        return (
            this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase()
        );
    }
}
