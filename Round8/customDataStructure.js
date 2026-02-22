/**
 * Date: 22nd Feb, 2026
 * Problem Statement:
 *      Create a custom data structure with following operations having time complexity: O(1)
 *      Operations:
 *          a. add(item),   b. get(item),   c. delete(item)
 *          d. contains(item)   e. random()
 */
class SkdDataStructure {
    constructor() {
        this.list = [];
        this.indexMap = new Map();
    }

    // add item to list & save index to map
    add(item) {
        this.list.push(item);
        this.indexMap.set(item, this.list.length - 1);
        return this;
    }

    get(item) {
        return this.indexMap.get(item);
    }

    contains(item) {
        return this.indexMap.has(item)
    }

    delete(item) {
        if(!this.indexMap.has(item)) return false;

        const itemIndex = this.indexMap.get(item);
        // put last element of list to itemIndex
        this.list[itemIndex] = this.list[this.list.length - 1];
        this.list.pop();

        this.indexMap.delete(item);
        return true;
    }

    random() {
        // generate a random number denoting index & return that index element
        const randomIndex = Math.floor(Math.random() * this.list.length);
        return this.list[randomIndex];
    }

    getList() {
        return this.list.join("-->");
    }
}

const myStruct = new SkdDataStructure();
myStruct.add(10).add(20).add(30).add(40).add(60).add(70);

console.log(`After initial inserts, List Becomes: ${myStruct.getList()}`);
console.log(`Picking a lucky element from list: ${myStruct.random()}`);

let element = 20;
console.log(`Is element ${element} exists in list: ${myStruct.contains(element)}`);
element = 99;
console.log(`Is element ${element} exists in list: ${myStruct.contains(element)}`);

const deleteSuccess = myStruct.delete(20);
console.log(`Is delete successful: ${deleteSuccess}`);

console.log(`Post delete, is element ${20} exists in list: ${myStruct.contains(20)}`);

myStruct.delete(70);
console.log(`After deletion, List Becomes: ${myStruct.getList()}`);

console.log(`Picking a lucky element from list: ${myStruct.random()}`);