/**
 * Date: 17th March, 2026
 * Problem Statement:
 *      Create a custom data structure with following operations having time complexity: O(1)
 *      Operations:
 *          a. add(item),   b. get(item),   c. delete(item)
 *          d. contains(item)   e. random()
 *      Note: Duplicate items should be allowed in the list
 */
class SkdDataStructure {
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
    return this.indexMap.get(item);
  }

  delete(item) {
    const itemIndexeSet = this.indexMap.get(item);
    if (!itemIndexeSet) {
      return false;
    }

    const listLength = this.list.length;
    // If element present at last index, remove from last index
    if (itemIndexeSet.has(listLength - 1)) {
      this.list.pop();
      itemIndexeSet.delete(listLength - 1);
    } else {
      // pick last element & its positions
      const lastItem = this.list[listLength - 1];
      const lastItemIndexeSet = this.indexMap.get(lastItem);
      // get first index of target element
      const firstIndex = itemIndexeSet.values().next().value;
      this.list[firstIndex] = this.list[listLength - 1];
      // remove target item from list & its first index from map
      this.list.pop();
      itemIndexeSet.delete(firstIndex);
      // reset last item index
      lastItemIndexeSet.delete(listLength - 1);
      lastItemIndexeSet.add(firstIndex);
    }

    return true;
  }

  contains(item) {
    return this.indexMap.has(item);
  }

  random() {
    const randomIndex = Math.floor(Math.random() * (this.list.length - 1));
    return this.list[randomIndex];
  }

  getList() {
    return this.list.join("-->");
  }
}

const myStruct = new SkdDataStructure();
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

myStruct.delete(70);
console.log(`After deletion, List Becomes: ${myStruct.getList()}`);
console.log(`Element ${70} locations: ${[...myStruct.get(70)]}`);

console.log(`Picking a lucky element from list: ${myStruct.random()}`);

deleteSuccess = myStruct.delete(30);
console.log(`Is delete successful: ${deleteSuccess}`);

console.log(
  `Post delete, is element ${30} exists in list: ${myStruct.contains(30)}`,
);
console.log(`After deletion, List Becomes: ${myStruct.getList()}`);
console.log(`Element ${30} locations: ${[...myStruct.get(30)]}`);
