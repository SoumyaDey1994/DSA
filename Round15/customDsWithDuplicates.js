/**
 * Date: 30th August, 2026
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
        if(!this.indexMap.has(item)) {
            this.indexMap.set(item, new Set());
        }
        this.indexMap.set(item, this.indexMap.get(item).add(itemIndex));
        return this;
    }

    get(item) {
        if(!this.indexMap.has(item)) return null;
        return this.indexMap.get(item);
    }

    contains(item) {
        return this.indexMap.has(item);
    }

    delete(item) {
        if(!this.indexMap.has(item)) {
            console.log(`Element ${item} doesn't exists`);
            return false;
        }

        const itemIndexSet = this.indexMap.get(item);
        const indexToBeRemoved = [...itemIndexSet][0];
        const lastIndexOfListItem = this.container.length - 1;
        const lastItemIndexSet = this.indexMap.get(this.container[lastIndexOfListItem]);
        // replace last item with indexToBeRemoved
        this.container[indexToBeRemoved] = this.container[lastIndexOfListItem];
        //remove the last element & index from index set
        this.container.pop();
        itemIndexSet.delete(indexToBeRemoved);
        // reset index of last item which swapped
        lastItemIndexSet.add(indexToBeRemoved);
        lastItemIndexSet.delete(lastIndexOfListItem);
        return true;
    }

    random() {
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
console.log(`Is delete ${20} successful: ${deleteSuccess}`);

console.log(
  `Post delete 20, is element ${20} exists in list: ${myStruct.contains(20)}`,
);
console.log(`Element ${20} locations: ${[...myStruct.get(20)]}`);

myStruct.delete(70);
console.log(`After deletion 70, List Becomes: ${myStruct.getList()}`);
console.log(`Element ${70} locations: ${[...myStruct.get(70)]}`);

console.log(`Picking a lucky element from list: ${myStruct.random()}`);

deleteSuccess = myStruct.delete(30);
console.log(`Is delete ${30} successful: ${deleteSuccess}`);

console.log(
  `Post delete, is element ${30} exists in list: ${myStruct.contains(30)}`,
);
console.log(`After deletion, List Becomes: ${myStruct.getList()}`);
console.log(`Element ${30} locations: ${[...myStruct.get(30)]}`);
