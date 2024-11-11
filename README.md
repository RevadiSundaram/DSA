# DSA
# Finding number of occurence of a string
- Hello - l 2 times
```js
let string = "Renu";
function countOccurence(str){
    let obj = {};
    let maxEl = 0;
    let keyEl = '';
    for(let i=0; i<str.length; i++){
        if(str[i] in obj){
            obj[str[i]] ++;
        }
        else{
            obj[str[i]] = 1
        }
        if(maxEl < obj[str[i]]){
            maxEl = obj[str[i]]
            keyEl = str[i]
        }
    }
    return [maxEl, keyEl]
}
console.log(countOccurence(string));
```
# Find the second largest distinct elements from the array
```js
function secondLargest(arr){
    const unique = [...new Set(arr)]; //O(n)
    unique.sort((a,b) => b-a); //O(nlogn)
    if (unique.length >= 2) {
    return unique[1];
  } else {
    return -1;
  }
}
console.log(secondLargest([34,35,35,2,3,7]));
//O(n logn)
```
- Optimized Approach
```js
function secondLargest(arr){
    let largest = -1;
    let secondLargest = -1;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest
            largest = arr[i]
        }
        else if(arr[i] > secondLargest && arr[i] != largest){
            secondLargest = arr[i]
        }
    }
    return secondLargest
}
console.log(secondLargest([34,35,35,2,3,7]));
//O(n)
```