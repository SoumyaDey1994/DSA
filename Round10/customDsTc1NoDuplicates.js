/**
 * Date: 14th March, 2026
 * Problem Statement:
 *      Create a custom data structure with following operations having time complexity: O(1)
 *      Operations:
 *          a. add(item),   b. get(item),   c. delete(item)
 *          d. contains(item)   e. random()
 *      Note: Duplicate items should be allowed in the list
 */
class MyDataStructure {
  constructor() {
    this.list = [];
    this.indexMap = new Map();
  }

  add(item) {
    this.list.push(item);
    const itemIndex = this.list.length - 1;
    this.indexMap.set(item, itemIndex);
    return this;
  }

  get(item) {
    return this.indexMap.get(item);
  }

  delete(item) {
    const itemIndex = this.indexMap.get(item);
    if (itemIndex) {
      this.list[itemIndex] = this.list[this.list.length - 1];
      this.list.pop();
      this.indexMap.delete(item);
      return true;
    }
    return false;
  }

  contains(item) {
    return this.indexMap.has(item);
  }

  random() {
    const randomIndex = Math.floor(Math.random() * this.list.length);
    return this.list[randomIndex];
  }

  getList() {
    return this.list.join("-->");
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

myDs.delete(70);
console.log(`After deletion, List Becomes: ${myDs.getList()}`);

console.log(`Picking a lucky element from list: ${myDs.random()}`);
