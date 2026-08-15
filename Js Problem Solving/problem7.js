// problem: check palindrome or not

// without function

// let str = "madam"
// let reverseStr = ""

// for ( let i = str.length -1; i >= 0; i--){
//     let letter = str[i];
//     reverseStr+=letter
// }
// console.log(reverseStr)

// if(str === reverseStr){
//     console.log("palindrome");
// }
// else{
//     console.log('not a palindrome')
// }

// with function

function isPalindrome(str){
    // revers logic
    let reverseStr = "";
    for(let i=str.length-1; i>=0; i--){
        let letter = str[i];
        reverseStr+=letter;
    }
    console.log(reverseStr)

    // palindrome logic
    if(str === reverseStr){
        return true;
    }
    else{
        return false;
    }
}

console.log(isPalindrome("bdb"))