import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const nc = new NumbersCollection([9, 0, 1, 4, 15, -6, -7]);
nc.sort();
console.log(nc.data);

const cc = new CharactersCollection('sdndiewrknsa');
cc.sort();
console.log(cc.data);

const ll = new LinkedList();
ll.add(5);
ll.add(-1);
ll.add(8);
ll.add(0);
ll.sort();
ll.print();
