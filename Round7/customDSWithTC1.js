/**
 * Date: 18th Feb, 2026
 * Problem Statement:
 *      Create a custom data structure with following operations having time complexity: O(1)
 *      Operations:
 *          a. add(item),   b. get(item),   c. delete(item)
 *          d. contains(item)   e. random()
 */
class MyCustomStructure {
  constructor() {
    this.list = [];
    this.map = new Map();
  }

  // O(1)
  add(item) {
    this.list.push(item); // save value to list
    this.map.set(item, this.list.length - 1); // save value:index to map
    return this;
  }

  // O(1)
  delete(item) {
    const index = this.map.get(item);
    if (!index) return false;

    this.map.delete(item); // remove item from map
    const lastElement = this.list[this.list.length - 1];
    this.list[index] = lastElement; // replace last element with the target element
    this.list.pop(); // pop last element from list
    this.map.set(lastElement, index); // re-assign the new index of prev last element
    return true;
  }

  // O(1)
  get(item) {
    return this.map.get(item);
  }

  // O(1)
  isExists(item) {
    return this.map.has(item);
  }

  // O(1)
  random() {
    const randomIndex = Math.floor(Math.random() * this.list.length);
    return this.list[randomIndex];
  }
  // O(1)
  getList() {
    return this.list.join("-->");
  }
}

const myStruct = new MyCustomStructure();
myStruct.add(10).add(20).add(30).add(40).add(60).add(70);

console.log(`After initial inserts, List Becomes: ${myStruct.getList()}`);
console.log(`Picking a lucky element from list: ${myStruct.random()}`);

let element = 20;
console.log(`Is element ${element} exists in list: ${myStruct.isExists(element)}`);
element = 99;
console.log(`Is element ${element} exists in list: ${myStruct.isExists(element)}`);

const deleteSuccess = myStruct.delete(20);
console.log(`Is delete successful: ${deleteSuccess}`);

console.log(`Post delete, is element ${20} exists in list: ${myStruct.isExists(20)}`);

myStruct.delete(70);
console.log(`After deletion, List Becomes: ${myStruct.getList()}`);

console.log(`Picking a lucky element from list: ${myStruct.random()}`);