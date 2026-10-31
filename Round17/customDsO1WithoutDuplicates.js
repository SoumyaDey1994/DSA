/**
 * Date: 31st October, 2026
 * Problem Statement:
 *      Create a custom data structure with following operations having time complexity: O(1)
 *      Operations:
 *          a. add(item),   b. get(item),   c. delete(item)
 *          d. contains(item)   e. random()
 *      Note: Duplicate items should be allowed in the list
 */
class MyDataStructure {
  constructor() {
    this.items = [];
    this.indexMap = new Map();
  }

  add(item) {
    this.items.push(item);
    const itemIndex = this.items.length - 1;
    this.indexMap.set(item, itemIndex);
    return this;
  }

  get(item) {
    if (!this.indexMap.has(item)) {
      return -1;
    }

    return this.indexMap.get(item);
  }

  contains(item) {
    return this.indexMap.has(item);
  }

  delete(item) {
    const itemIndex = this.indexMap.get(item);
    if (!itemIndex) return false;

    const lastItemIndex = this.items.length - 1;
    const lastItem = this.items[lastItemIndex];

    this.items[itemIndex] = lastItem;
    this.items.pop();

    this.indexMap.set(lastItem, itemIndex);
    this.indexMap.delete(item);
    return true;
  }

  random() {
    const randomIndex = Math.floor(Math.random() * this.items.length);
    return this.items[randomIndex];
  }

  getList() {
    return this.items.join("-->");
  }
}

const myDs = new MyDataStructure();
myDs.add(10).add(20).add(30).add(40).add(60).add(70);

console.log(`After initial inserts, List Becomes: ${myDs.getList()}`);
console.log(`Picking a lucky element from list: ${myDs.random()}`);

let element = 20;
console.log(`Is element ${element} exists in list: ${myDs.contains(element)}`);
element = 99;
console.log(`Is element ${element} exists in list: ${myDs.contains(element)}`);

const deleteSuccess = myDs.delete(20);
console.log(`Is delete(20) successful: ${deleteSuccess}`);

console.log(`After deletion, List Becomes: ${myDs.getList()}`);

console.log(
  `Post delete, is element ${20} exists in list: ${myDs.contains(20)}`,
);

myDs.delete(70);
console.log(`After deletion (70), List Becomes: ${myDs.getList()}`);

console.log(`Picking a lucky element from list: ${myDs.random()}`);
