/**
 * Date: 17th July, 2026
 * Problem Statement:
 *      Create a custom data structure with following operations having time complexity: O(1)
 *      Operations:
 *          a. add(item),   b. get(item),   c. delete(item)
 *          d. contains(item)   e. random() f. getList()
 *      Note: Duplicate items should be allowed in the list
 */
class CustomDataStructure {
  constructor() {
    this.container = [];
    this.indexMap = new Map();
  }

  add(item) {
    this.container.push(item);
    if (!this.indexMap.has(item)) {
      this.indexMap.set(item, new Set());
    }

    const itemIndex = this.container.length - 1;
    const indexSet = this.indexMap.get(item);
    this.indexMap.set(item, indexSet.add(itemIndex));
    return this;
  }

  get(item) {
    if (!this.indexMap.has(item)) return null;
    return this.indexMap.get(item);
  }

  delete(item) {
    if (!this.indexMap.has(item)) return false;

    const indexSet = this.indexMap.get(item);
    if (indexSet.size === 0) return false;

    const indexOfElementToBeRemoved = [...indexSet][0];
    const lastIndex = this.container.length - 1;
    const lastIndexItem = this.container[lastIndex];

    this.container[indexOfElementToBeRemoved] = this.container[lastIndex];
    this.container.pop();

    indexSet.delete(indexOfElementToBeRemoved);
    this.indexMap.set(item, indexSet);

    const lastIndexItemIndexSet = this.indexMap.get(lastIndexItem);
    lastIndexItemIndexSet.delete(lastIndex);
    lastIndexItemIndexSet.add(indexOfElementToBeRemoved);
    return true;
  }

  contains(item) {
    return this.indexMap.has(item);
  }

  random() {
    const length = this.container.length;
    const randomIndex = Math.floor(Math.random() * length);
    return this.container[randomIndex];
  }

  getList() {
    return this.container.join("-->");
  }
}


const myStruct = new CustomDataStructure();
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

