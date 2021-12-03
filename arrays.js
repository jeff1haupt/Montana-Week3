var arr = [3.14, -10, 123, 456, 4, 5, 6, 7, 0]; 

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[2]);

// console.log(arr.length);
// console.log(arr[arr.length - 1]);

var newArr = arr.map(function (item) {
    return item + 5;
})

// console.log(newArr);
// console.log(arr);

var prices = [5, 8, 11, 23];

var sumOfPrices = prices.reduce(function(accumFirst, curSecond) {
    // console.log(accumFirst);
    return accumFirst + curSecond;
}, 0) // accumlator defaults at 0 to start, but can be changed

// console.log(prices);
// console.log(sumOfPrices);

let filterArr = arr.filter(item => item > 50);

// same thing as what's happening on line 27 
let otherArr = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 50) {
        otherArr.push(arr[i]);
    }
}

console.log(filterArr);
console.log(otherArr);


let oneItem = arr.splice(-1, 1);
console.log(oneItem);
console.log(arr);