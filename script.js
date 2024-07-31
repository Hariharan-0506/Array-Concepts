// 1. Implementing a Queue with Arrays
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }
}

// 2. Implementing a Stack with Arrays
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }
}

// 3. Array of Objects Sorting with Multiple Properties
let people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Alice', age: 22 },
];

people.sort((a, b) => {
    if (a.name === b.name) {
        return a.age - b.age;
    }
    return a.name.localeCompare(b.name);
});
console.log('Sorted People:', people);

// 4. Creating an Array of Arrays
let arrayOfArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log('Array of Arrays:', arrayOfArrays);

// 5. Comparing Two Arrays for Equality
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

let array1 = [1, 2, 3];
let array2 = [1, 2, 3];
let array3 = [1, 2, 4];

console.log('Array1 equals Array2:', arraysEqual(array1, array2)); // true
console.log('Array1 equals Array3:', arraysEqual(array1, array3)); // false

// 6. Converting Array of Objects
let arrayOfObjects = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Joe' }
];

let convertedArray = arrayOfObjects.map(obj => [obj.id, obj.name]);
console.log('Converted Array:', convertedArray);