# DSA
# Finding number of occurence of a string
- Hello - l 2 times
```js
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