let testArrayOne = ["Hello","!","Name","John","!"];
let testArrayTwo = ["World","My","Is","Adams","?"];

function combineTwoArrays(arr1,arr2){
    let combinedArray= [];
    for (let i =0; i<arr1.length;i++){
        combinedArray.push(arr1[i]);
        combinedArray.push(arr2[i])
    }   return combinedArray;

}


console.log(combineTwoArrays(testArrayOne,testArrayTwo).join(" "))
console.log(combineTwoArrays(testArrayOne,testArrayTwo).toString().replace(/,/g, " "))