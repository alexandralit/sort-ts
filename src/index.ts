import { NumbersCollection } from './numbersCollection';
import { CharactersCollection } from './charactersCollection';
import { LinkedList } from './linkedList';

const numbersCollection = new NumbersCollection([-8, 10, 20, 5]);
numbersCollection.sort()

const charactersCollection = new CharactersCollection('ZcAby');
charactersCollection.sort()

const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(-11);
linkedList.add(8);
linkedList.add(7);

linkedList.sort()
linkedList.print();

console.log(numbersCollection);
console.log(charactersCollection);
console.log(linkedList);