console.log("assignment js");

// mymap
let nums = [2, 4, 6, 8];
Array.prototype.myMap = function(){
    let result =[];
    for(let i = 0; i < this.length; i++){
        result.push(myFunction(this[i]))
    }
    return result;
}

function myFunction(i){
    return i * 2;
}

console.log(nums.myMap(myFunction()));// result: [4, 8, 12, 16]


// myraduce 
Array.prototype.myReduce = function(myFunc){
    let total= 0;
    for (let i = 0; i < this.length; i++){
        total += this[i]
    }
    return total;
}

function myFunc(i){
    sum = 0;
    return sum += i;
}
let nums2 = [1, 2, 3, 4, 5];
console.log(nums2.myReduce(myFunc())); // result: 15
console.log(nums2.myMap(myFunction()));// result: [2,4,6,8,10]
console.log(nums.myReduce(myFunc));//20


