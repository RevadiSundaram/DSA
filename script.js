//Finding number of occurence of a string
// let string = "Renu";
// function countOccurence(str){
//     let obj = {};
//     let maxEl = 0;
//     let keyEl = '';
//     for(let i=0; i<str.length; i++){
//         if(str[i] in obj){
//             obj[str[i]] ++;
//             // if(maxEl < obj[str[i]]){
//             //     maxEl = obj[str[i]]
//             //     keyEl = str[i]
//             // }
//         }
//         else{
//             obj[str[i]] = 1
//         }
//         if(maxEl < obj[str[i]]){
//             maxEl = obj[str[i]]
//             keyEl = str[i]
//         }
//     }
//     return [maxEl, keyEl]
//     // let arr =  findMax(obj);
//     // return arr
// }
// console.log(countOccurence(string));
// function findMax(obj){
//     let maxEl = 0;
//     let keyEl = '';
//     for(let key in obj){
//         console.log(key, obj[key]);
//         if(maxEl < obj[key]){
//             maxEl = obj[key]
//             keyEl = key
            
//         }
//     }
//     // console.log("Max Element and key" , maxEl, keyEl);
//     return [maxEl,keyEl]
// }