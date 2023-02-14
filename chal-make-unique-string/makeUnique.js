// Write your solution below:

//Solution 1 - using Set object
let test1 = "helloworld";
let test2 = "iwanttoclimbamountain";

const uniqueString = string => {
    const uniqueStr = new Set(string);
    let result = "";
    uniqueStr.forEach(value => result += value);
    return result;
}

// console.log(uniqueString(test1));
// console.log(uniqueString(test2));


//Solution 2 - using for loops and conditionals
const uniqueStr = string => {
    let stringArr = string.split('');
    for(let i = 0; i < stringArr.length; i++) {
        for(let j = i + 1; j < stringArr.length; j++) {
            if(stringArr[i] === stringArr[j]) {
                stringArr.splice(j,1);
                j--;
            }
        }
    }
    return stringArr.join('');
}

// console.log(uniqueStr(test1));
// console.log(uniqueStr(test2));

//Solution 3 - using .charCodeAt()

const uniqueChars = string => {
    for(let i = 0; i < string.length; i++){
        console.log(string.charCodeAt(i))
    }
}

console.log(uniqueChars(test1));
console.log(uniqueChars(test2));

//Solution 4 - instructor
const makeUnique = string => {
    let newStr = '';
    for (let i = 0; i < string.length; i++) {
        if(!newStr.includes(string[i])) {
            newStr += string[i];
        }
    }
    return newStr;
}

console.log(makeUnique(test1))
console.log(makeUnique(test2))

//Solution 5 - instructor
const uniqueSet = string => {
    let newSet = new Set(string);
    let newArr = [...newSet]
    return newArr.join('');
}

console.log(uniqueSet(test1))
console.log(uniqueSet(test2))

//Solution 6 - instructor one liner
const uniqueSets = string => [...new Set(string)].join('');