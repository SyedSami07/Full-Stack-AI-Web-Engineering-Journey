// problem: reverse a string

// let arr = [1,2,3]
// console.log(arr.reverse())

//Without function

// let str = "Sami"
// let reverseWord = "";

// for(let i = str.length - 1; i>= 0; i--){
//     let letter = str[i]
//     reverseWord = reverseWord + letter;
// }
// console.log(reverseWord)

// with function
function reverseWord(word){
let reverseWord = "";

for(let i = word.length - 1; i>= 0; i--){
    let letter = word[i]
    reverseWord = reverseWord + letter;
}
    return reverseWord;
}
console.log(reverseWord("sami"))
