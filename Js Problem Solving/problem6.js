// problem: count vowels in a string

// let str = "hello world";
// let vowels = 'aeiou';

// for(let i = 0; i<= str.length; i++){
//     let letter = str[i];
//     console.log('i , -> letter ->>>', i, letter);
//     if (vowels.includes(letter)){
//     console.log('vowel')
//    }
// }




// with function

function VowelCount(str){
    let vowels = 'aeiou';
    let count = 0;
    for(let i = 0; i < str.length; i++){
        let letter = str[i];
        console.log("i, -> letter ->>> ", i , letter)

        if(vowels.includes(letter)){
            console.log("vowel");
            count++;
           
        }
    }
     return count;
}

console.log(VowelCount("programming hero"))