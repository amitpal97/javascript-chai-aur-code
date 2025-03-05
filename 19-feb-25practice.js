// find non first repeating character


// input str= "abcdeabcdef"
// output = f 

// function firstNonRepeatingChar(str) {
//     let objCount = {};
//     for (let strVal of str) {
//         if (objCount[strVal]) {
//             objCount[strVal]++
//         }
//         else {
//             objCount[strVal] = 1
//         }
//     }

//     for (let char of str) {
//         if (objCount[char] === 1) {
//             return char
//         }
//     }
//     return objCount

// }

// console.log(firstNonRepeatingChar("abcdeabcddef"));


// find the missing number form array 

// input arr= [1,2,4,5]
// output=[3]



// find the maxnumber and minnumberF form arr
// input = [1, 2, 3, 4, 5]
// output = [5]


// function maxNumber(arr) {
//     let maxVal = arr[0];
//     for (let arrVal of arr) {
//         if (maxVal > arrVal) {
//             maxVal = arrVal
//         }
//     }
//     return maxVal
// }

// console.log(maxNumber([10, 222, 13, 4, 51]));


// find the longest substring without repeating character

// input = "amitpal"

function longestSubsting(str) {
    let obj = {};
    let left = 0;
    let maxLength = 0;

    // for (let strVal of str) {
    for (let right = 0; right < str.length; right++) {

        while (obj.hasOwnProperty(str[right])) {
            delete obj[str[right]];
            left++
        }

        obj[str[right]] = "";
        maxLength = Math.max(maxLength, right - left + 1);


    }

    return maxLength;
}






// console.log(longestSubsting("amitpal"));


// var str = "We are Working in Dept";
// let vowals = ["a", "e", "i", "o", "u"]


// let obj = {}
// count = 0

// for (vol.towercase() of str) {

//     if (vowals.includes(vol)) {

//         count++
//     }

// }
// console.log(count);

// asending order using bubble sort
function assendingOrder(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
            }
        }
    }
    return arr


}

// console.log(assendingOrder([10, 3, 15, 9])); 


// find missing number
function missingNumber(arr) {
    let n = arr.length + 1
    expectedSum = (n * (n + 1)) / 2
    actualSum = 0


    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i]
    }
    return expectedSum - actualSum
}
// console.log(missingNumber([1, 2, 3, 4, 5, 6, 8]));

function missingAllNumber(arr) {
    let min = arr[0];
    let max = arr[0];
    MissingVal = [];

    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]
        }
        else if (max < arr[i]) {
            max = arr[i]
        }
    }


    for (let i = min; i < max; i++) {
        let found = false;


        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === i) {
                found = true;
                break
            }
        }

        if (!found) {
            MissingVal.push(i)
        }

    }
    return MissingVal

}
// console.log(missingAllNumber([1, 3, 4, 5, 6, 8]));


// function longestSubstingPrac(str) {

//     let obj = {};
//     let maxLength = 0;
//     let left = 0

//     for (let i = 0; i < str.length; i++) {
//         while (obj.hasOwnProperty(str[i])) {
//             delete obj[str[i]];
//             left++
//         }

//         obj[str[i]] = "";
//         maxLength = Math.max(maxLength, i - left + 1)
//     }
//     return obj
// }

// console.log(longestSubstingPrac("amitapal"));


function targerNum(target, arr) {
    let left = 0;
    let right = 0;
    let expetedTarger



    while (left < arr.length) {
        expetedTarger = arr[left] + arr[right]
        if (expetedTarger === target) {
            return [left, right]
        }
        else {
            return "not found"
        }
    }
}
console.log(targerNum(2, [1, 3, 4, 5, 1]));
