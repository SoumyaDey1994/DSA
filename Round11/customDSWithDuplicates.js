/**
 * Date: 14th April, 2026
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

    if (!this.indexMap.has(item)) {
      this.indexMap.set(item, new Set());
    }

    this.indexMap.set(item, this.indexMap.get(item).add(itemIndex));
    return this;
  }

  get(item) {
    const itemIndices = this.indexMap.get(item);
    if (itemIndices && itemIndices.size > 0) {
      return itemIndices;
    }

    return [];
  }

  delete(item) {
    const itemIndices = this.indexMap.get(item);
    if (itemIndices && itemIndices.size > 0) {
      const indexToBeRemoved = [...itemIndices][0];
      const lastIndexOfListItem = this.list.length - 1;
      const lastItem = this.list[lastIndexOfListItem];

      const lastItemIndexSet = this.indexMap.get(lastItem);
      this.list[indexToBeRemoved] = this.list[lastIndexOfListItem];
      // remove last element from list
      this.list.pop();
      // adjust index positions
      itemIndices.delete(indexToBeRemoved);
      lastItemIndexSet.add(indexToBeRemoved);
      lastItemIndexSet.delete(lastIndexOfListItem);
      return true;
    }

    return false;
  }

  contains(item) {
    return !!this.indexMap.get(item);
  }

  random() {
    const randomIndex = Math.floor(Math.random() * this.list.length);
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
  `Post delete 20, is element ${20} exists in list: ${myStruct.contains(20)}`,
);
console.log(`Element ${20} locations: ${[...myStruct.get(20)]}`);

myStruct.delete(70);
console.log(`After deletion 70, List Becomes: ${myStruct.getList()}`);
console.log(`Element ${70} locations: ${[...myStruct.get(70)]}`);

console.log(`Picking a lucky element from list: ${myStruct.random()}`);

deleteSuccess = myStruct.delete(30);
console.log(`Is delete successful: ${deleteSuccess}`);

console.log(
  `Post delete, is element ${30} exists in list: ${myStruct.contains(30)}`,
);
console.log(`After deletion, List Becomes: ${myStruct.getList()}`);
console.log(`Element ${30} locations: ${[...myStruct.get(30)]}`);
