/**
 * Date: 24th May, 2026
 * Problem Statement:
 *      Create a custom data structure with following operations having time complexity: O(1)
 *      Operations:
 *          a. add(item),   b. get(item),   c. delete(item)
 *          d. contains(item)   e. random() f. getList()
 *      Note: Duplicate items should be allowed in the list
 */
class MyDataStructure {
  constructor() {
    this.list = [];
    this.indexMap = new Map();
  }

  add(item) {
    if (!this.indexMap.has(item)) {
      this.indexMap.set(item, new Set());
    }

    const indexSet = this.indexMap.get(item);
    this.list.push(item);
    const itemIndex = this.list.length - 1;
    indexSet.add(itemIndex);
    return this;
  }

  get(item) {
    return this.indexMap.get(item) || [];
  }

  delete(item) {
    const indexSet = this.indexMap.get(item);
    if (!indexSet) return false;

    const lastIndex = this.list.length - 1;
    const lastItem = this.list[lastIndex];

    const indexToRemove = Array.from(indexSet)?.[0];
    this.list[indexToRemove] = this.list[lastIndex];
    this.list.pop();

    indexSet.delete(indexToRemove);
    const lastItemIndexSet = this.indexMap.get(lastItem);
    lastItemIndexSet.delete(lastIndex);
    lastItemIndexSet.add(indexToRemove);

    return true;
  }

  contains(item) {
    return this.indexMap.has(item);
  }

  random() {
    const randomIndex = Math.floor(Math.random() & this.list.length);
    return this.list[randomIndex];
  }

  getList() {
    return this.list.join("-->");
  }
}

const myStruct = new MyDataStructure();
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
console.log(
  `Element ${element} locations: ${[...myStruct.get(element)].toString()}`,
);
element = 99;
console.log(
  `Is element ${element} exists in list: ${myStruct.contains(element)}`,
);

let deleteSuccess = myStruct.delete(20);
console.log(`Is delete successful: ${deleteSuccess}`);

console.log(
  `Post delete, is element ${20} exists in list: ${myStruct.contains(20)}`,
);
console.log(`Element ${20} locations: ${[...myStruct.get(20)]}`);

console.log(`Post delete ${20}, list becomes: ${myStruct.getList()}`);

myStruct.delete(70);
console.log(`After deletion ${70}, List Becomes: ${myStruct.getList()}`);
console.log(`Element ${70} locations: ${[...myStruct.get(70)]}`);

console.log(`Picking a lucky element from list: ${myStruct.random()}`);

console.log(`Element ${30} locations: ${[...myStruct.get(30)]}`);
deleteSuccess = myStruct.delete(30);
console.log(`Is delete successful: ${deleteSuccess}`);

console.log(
  `Post delete, is element ${30} exists in list: ${myStruct.contains(30)}`,
);
console.log(`After deletion, List Becomes: ${myStruct.getList()}`);
console.log(`Element ${30} locations: ${[...myStruct.get(30)]}`);
