/**
 * Date: 1st Mar, 2026
 * Problem Statement:
 *      Create a custom data structure with following operations having time complexity: O(1)
 *      Operations:
 *          a. add(item),   b. get(item),   c. delete(item)
 *          d. contains(item)   e. random()
 *      Note: Duplicate items should be allowed in the list
 */
class MyCustomStructure {
  constructor() {
    this.list = [];
    this.indexMap = new Map();
  }

  add(item) {
    if (!this.indexMap.has(item)) {
      this.indexMap.set(item, new Set());
    }

    this.list.push(item);
    const indexSet = this.indexMap.get(item);
    indexSet.add(this.list.length - 1);

    return this;
  }

  get(item) {
    if (!this.indexMap.has(item) || this.indexMap.get(item).size === 0)
      return -1;

    return this.indexMap.get(item);
  }

  delete(item) {
    if (!this.contains(item)) return false;

    const indexSet = this.indexMap.get(item);
    const targetIndex = indexSet.values().next().value;

    if (!targetIndex) return false;
    // place last element to targetIndex
    this.list[targetIndex] = this.list[this.list.length - 1];
    // remove last element from list
    this.list.pop();
    indexSet.delete(targetIndex);
    return true;
  }

  contains(item) {
    if (!this.indexMap.has(item)) return false;

    const indexSet = this.indexMap.get(item);
    return indexSet.size > 0;
  }

  random() {
    const randomIndex = Math.floor(Math.random() * this.list.length);
    return this.list[randomIndex];
  }

  getList() {
    return this.list.join("-->");
  }
}

const myStruct = new MyCustomStructure();
myStruct
  .add(10)
  .add(20)
  .add(30)
  .add(40)
  .add(60)
  .add(70)
  .add(20)
  .add(30)
  .add(20);

console.log(`After initial inserts, List Becomes: ${myStruct.getList()}`);
console.log(`Picking a lucky element from list: ${myStruct.random()}`);

let element = 20;
console.log(
  `Is element ${element} exists in list: ${myStruct.contains(element)}`,
);
console.log(`Element ${element} locations: ${[...myStruct.get(element)]}`);
element = 99;
console.log(
  `Is element ${element} exists in list: ${myStruct.contains(element)}`,
);

const deleteSuccess = myStruct.delete(20);
console.log(`Is delete successful: ${deleteSuccess}`);

console.log(
  `Post delete, is element ${20} exists in list: ${myStruct.contains(20)}`,
);
console.log(`Element ${20} locations: ${[...myStruct.get(20)]}`);

myStruct.delete(70);
console.log(`After deletion, List Becomes: ${myStruct.getList()}`);
console.log(`Element ${70} locations: ${myStruct.get(70)}`);

console.log(`Picking a lucky element from list: ${myStruct.random()}`);
