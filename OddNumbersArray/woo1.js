/*
Given an array containing numbers, write a function that returns an array of odd numbers (bonus points if they are sorted):
i.e
    input:
	let testArray = [24, 47, 87, 109, 6, 19];
output:
    [19, 47, 87, 109]

*/


let testArray = [24,47,109,6,19];

function sortOddNumbers(arr){

    let newArray = [];

    arr.sort(function(a, b){return b - a});

    for (let i = 0 ; i < arr.length; i++){
        if ((arr[i] % 2) != 0){
           newArray.push(arr[i])
        }
    }
    return newArray    

}

console.log(sortOddNumbers(testArray));