# Big O Notation
# Time Complexity 
- Constant Operations like 3,4 = O(1)
```js
function operation(){
    return n/(n*5+3)   
}
//O(1)
```
```js
function some(n){
    for(let i=0; i<n; i++){
        console.log(i)
    }
}
//O(n)
//Output changes with respect to n
```
```js
function some(n){
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            console.log(i, j)
        }
    }
}
// n*n operations (increases exponentially)
//O(n^2)
```

# Space Complexity
- if input size and return increases then space also increases
- it also increases according to the data structure we are using
```js
function sum(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i]
    }
    return sum;
}
let array = [520, 490, 220, 130]
console.log(sum(array)); 
//O(1) space
``` 
```js
function other(n){
    const arr = [];
    for(let i=0; i<n.length; i++){
        arr.push(i*69)
    }
    return arr;
}
console.log(other(5)); //output is array of 5 values
// output array differs according to the input value
//O(n) space complexity
```

# Primitive Types
- Boolean, number, undefined, null = constant space complexity
- String, array, object = dynamic space complexity

# Array
- Array Declaration
```js
const arr = new Array();
//or
const arr = [];
```
# Array Method
- arr.push(element) - add elements to the last
- arr.pop() - remove last element
- arr.unshift(element) - add element to the first
- arr.shift() - remove the first element

# In-built Loop
- Map, Filter, Reduce
- some() - returns true/false if any satisfies the given condition
```js
const arr = [1,2,3,4,5]
const result = arr.some(item =>  item < 3)
console.log(result); //true
```
- every() - returns true/false if all satisfies the given condition
```js
const arr = [1,2,3,4,5]
const result = arr.every(item =>  item > 3)
console.log(result); //false
```
- find() - returns the value of the first element which statisfies the condition
```js
const arr = [1,2,3,4,5]
const result = arr.find(item =>  item > 3)
console.log(result); //4
```

# Spread and Rest Operators
```js
const num1 = [1,2,3]
const num2 = [4,5,6]
const finalNum = [...num1, ...num2]; //[1,2,3,4,5,6] //spread operator
```
- Rest operator we use while using with functions
```js
const num1 = [1,2,3]
const num2 = [4,5,6]

function sum(...num){  //if you dont know how many arguments will be passed while calling
    return num;
}
console.log(sum(num1, num2)); //[[1,2,3], [4,5,6]]
```
# concat()
```js
const num1 = [1,2,3]
const num2 = [4,5,6]
console.log(num1.concat(num2)); //[1,2,3,4,5,6]
```
# Slice()
```js
const arr = ["apple", "banana","orange","cherry"]
console.log(arr.slice(0,2)); //apple, banana 
//prints start and between the range
console.log(arr.slice(-2)); 
//negative means the last, -1 means cherry
console.log(arr.slice(1)); 
//if we dont specify the end index, then it will print starting index till end
```

# Splice()
```js
const arr = ["apple", "banana","orange","cherry"]
arr.splice(1,2,"kiwi")
console.log(arr); //["apple","kiwi","cherry"]
//starting from 1st index, remove 2 elements and add kiwi
//it doesn't return a new array, it modifies the original array
```
# Fill()
```js
const dummy = [1,2,3,4,5]
dummy.fill(0); //[0,0,0,0,0]
dummy.fill(0,2); //[1,2,0,0,0]
//it doesn't return a new array, it modifies the original array
```
# Flat()
```js
const arr = [1,2,[3,4],5,[[6,7],8],9,10];
console.log(arr.flat()) //[ 1, 2, 3, 4, 5, [ 6, 7 ], 8, 9, 10 ]
console.log(arr.flat(2)) //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
//it will remove the brackets and flats it to the same level
//if we want to flat inner and inner to the same level, then we need to give the depth flat(2)
```
# Reverse()
- arr.reverse()

# Sort()
```js
const arr = [5,7,3,4,1]
console.log(arr.sort((a,b)=>b-a))
console.log(arr)
```