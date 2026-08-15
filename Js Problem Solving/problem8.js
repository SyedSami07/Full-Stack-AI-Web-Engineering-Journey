// problem: count words in a sentance

// with forloop
// let str = "i love myself haha haaland";
// let count = 0;

// let split = str.split(" ");

// for (let i = 0; i < split.length; i++) {
//     count++;
// }

// console.log(split)

// console.log(count)

// normal method
// let str = "hello world haha";
// let strSplitArr = str.split(" ");

// console.log(strSplitArr.length)

// with function
function wordCount(str){
    let strSplitArr = str.split(" ");
    return strSplitArr.length;
} 

console.log(wordCount("hello world haha"))