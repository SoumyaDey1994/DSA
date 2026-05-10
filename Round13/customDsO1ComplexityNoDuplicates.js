/**
 * Date: 10th May, 2026
 * Problem Statement:
 *      Create a custom data structure with following operations having time complexity: O(1)
 *      Operations:
 *          a. add(item),   b. get(item),   c. delete(item)
 *          d. contains(item)   e. random()
 *      Note: Duplicate items should be allowed in the list
 */
class MyDataStructure {
  constructor() {
    this.container = [];
    this.indexMap = new Map();
  }

  add(item) {
    this.container.push(item);
    const itemIndex = this.container.length - 1;
    this.indexMap.set(item, itemIndex);
    return this;
  }

  get(item) {
    if (!this.indexMap.has(item)) {
      return null;
    }

    return this.indexMap.get(item);
  }

  delete(item) {
    const itemIndex = this.indexMap.get(item);
    if (!itemIndex) {
      return false;
    }
    const lastItemIndex = this.container.length - 1;
    const lastItem = this.container[lastItemIndex];

    this.container[itemIndex] = this.container[lastItemIndex];
    this.container.pop();
    this.indexMap.delete(item);
    this.indexMap.set(lastItem, itemIndex);
    return true;
  }

  contains(item) {
    return this.indexMap.has(item);
  }

  random() {
    const targetIndex = Math.floor(Math.random() * this.container.length);
    return this.container[targetIndex];
  }

  getList() {
    return this.container.join("-->");
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

console.log(
  `Post delete, is element ${20} exists in list: ${myDs.contains(20)}`,
);

console.log(`Post delete 20, list becomes: ${myDs.getList()}`);
console.log(`Post delete 20, Position of 70 is: ${myDs.get(70)}`);

myDs.delete(60);
console.log(`After deletion 60, List Becomes: ${myDs.getList()}`);

console.log(`Picking a lucky element from list: ${myDs.random()}`);
