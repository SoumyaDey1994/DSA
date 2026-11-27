/**
 * Date: 27th November, 2026
 * Problem Statement:
 *      Create a custom data structure with following operations having time complexity: O(1)
 *      Operations:
 *          a. add(item),   b. get(item),   c. delete(item)
 *          d. contains(item)   e. random()
 *      Note: Duplicate items should be allowed in the list
 */
class CustomDsWithNoDuplicates {
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
    if (!this.indexMap.has(item)) {
      return false;
    }

    return this.indexMap.get(item);
  }

  contains(item) {
    return this.indexMap.has(item);
  }

  delete(item) {
    const targetItemIndex = this.indexMap.get(item);
    if (!targetItemIndex) {
      return false;
    }

    const lastItemIndex = this.list.length - 1;
    const lastItem = this.list[lastItemIndex];

    // swap with last & remove
    const temp = this.list[lastItemIndex];
    this.list[lastItemIndex] = this.list[targetItemIndex];
    this.list[targetItemIndex] = temp;
    this.list.pop();

    // update indexMap
    this.indexMap.set(lastItem, targetItemIndex);
    this.indexMap.delete(item);
    return true;
  }

  random() {
    const randomIndex = Math.floor(Math.random() * this.list.length);
    return this.list[randomIndex];
  }

  getItems() {
    return this.list.join("-->");
  }
}

const myDs = new CustomDsWithNoDuplicates();
myDs.add(10).add(20).add(30).add(40).add(60).add(70);

console.log(`After initial inserts, List Becomes: ${myDs.getItems()}`);
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

console.log(`Post delete 20, list becomes: ${myDs.getItems()}`);
console.log(`Post delete 20, Position of 70 is: ${myDs.get(70)}`);

const luckyElement = myDs.random();
console.log(`Picking a lucky element from list: ${luckyElement}`);

myDs.delete(luckyElement);
console.log(`After deletion ${luckyElement}, List Becomes: ${myDs.getItems()}`);
