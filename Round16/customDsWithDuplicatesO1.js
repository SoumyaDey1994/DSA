/**
 * Date: 19th September, 2026
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

    if (!this.indexMap.has(item)) {
      this.indexMap.set(item, new Set());
    }

    this.indexMap.set(item, this.indexMap.get(item).add(itemIndex));
    return this;
  }

  get(item) {
    if (!this.indexMap.has(item)) {
      return false;
    }

    const indexCount = this.indexMap.get(item).size;
    return indexCount > 0 ? [...this.indexMap.get(item)] : [];
  }

  delete(item) {
    if (!this.indexMap.has(item)) {
      console.log(`Item ${item} doesn't exists in list`);
      return false;
    }

    const itemIndexSet = this.indexMap.get(item);
    const firstIndexOfItem = [...itemIndexSet][0];
    const lastIndexOfListItem = this.container.length - 1;
    const lastItemInList = this.container[lastIndexOfListItem];
    const lastItemIndexSet = this.indexMap.get(lastItemInList);
    // replace with last
    this.container[firstIndexOfItem] = this.container[lastIndexOfListItem];
    this.container.pop();
    // remove from indexSet of target item
    itemIndexSet.delete(firstIndexOfItem);
    // update index of prev last item
    lastItemIndexSet.delete(lastIndexOfListItem);
    lastItemIndexSet.add(firstIndexOfItem);
    return true;
  }

  contains(item) {
    return this.indexMap.has(item);
  }

  getRandomItem() {
    const randomIndex = Math.floor(Math.random() * this.container.length);
    return this.container[randomIndex];
  }

  getList() {
    return this.container.join("-->");
  }
}

const myStruct = new MyDataStructure();
myStruct
  .add(10)
  .add(20)
  .add(30)
  .add(40)
  .add(20)
  .add(70)
  .add(20)
  .add(30)
  .add(60);

console.log(`After initial inserts, List Becomes: ${myStruct.getList()}`);
console.log(`Picking a lucky element from list: ${myStruct.getRandomItem()}`);

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
console.log(`Is delete 20 successful: ${deleteSuccess}`);

console.log(
  `Post delete 20, is element ${20} exists in list: ${myStruct.contains(20)}`,
);
console.log(`Element ${20} locations: ${[...myStruct.get(20)]}`);

myStruct.delete(70);
console.log(`After deletion 70, List Becomes: ${myStruct.getList()}`);
console.log(`Element ${70} locations: ${[...myStruct.get(70)]}`);

console.log(`Picking a lucky element from list: ${myStruct.getRandomItem()}`);

deleteSuccess = myStruct.delete(30);
console.log(`Is delete 30 successful: ${deleteSuccess}`);

console.log(
  `Post delete, is element ${30} exists in list: ${myStruct.contains(30)}`,
);
console.log(`After deletion of 30, List Becomes: ${myStruct.getList()}`);
console.log(`Element ${30} locations: ${[...myStruct.get(30)]}`);
