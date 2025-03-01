// find non first repeating character


function nonRepeatingStr(str) {
    let countObj = {};
    let countNewObj = {};
    let arr = [countObj, countNewObj]
    for (let char of str) {
        if (countObj[char]) {
            countObj[char]++
        }
        else {
            countObj[char] = 1
        }
    }

    for (let char of str) {
        if (countObj[char] === 1) {

            countNewObj[char] = countObj[char];
        } 
    }

    return arr

}

console.log(nonRepeatingStr("abcgdgddjhdh"));


// logest substring


// function logestSubstring(str) {
//     let setObj = new Set();
//     let left = 0;
//     let maxLength = 0;


//     for (let right = 0; right < str.length; right++) {
//         while (setObj.has(str[right])) {
//             setObj.delete(str[right]);
//             left++;
//         }

//         setObj.add(str[right]);
//         maxLength = Math.max(maxLength, right - left + 1);

//     }
//     return maxLength;


// }
// logestSubstring("amit")


// function reverseStr(str) {
//     let arr = [];
//     for (let char of str) {
//         arr.unshift(char)
//     }
//     return arr

// }

// reverseStr("AMIT")