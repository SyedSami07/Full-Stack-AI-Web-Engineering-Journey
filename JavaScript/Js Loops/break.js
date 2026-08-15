for (let index = 0; index <= 100; index++) {
   if(index > 5){
       break;
   }
console.log("i has been stopped after a break: ",index)
}

let count = 0;
while (count < 10){

    if(count > 4){
        break;
    }
    console.log('value of count: ', count)
    count++;
}