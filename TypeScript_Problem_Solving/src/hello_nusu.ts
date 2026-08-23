const Give_chocolate_and_fixNusuMood = (chocolate: number): string => {
    
    if(chocolate >= 32){
        return "I love you"
    } 
    
    else if(chocolate >= 0 && chocolate <=5){
        return "Ar mattam nay"
    }

    else if(chocolate >= 6 && chocolate <= 31){
        return "Mood swing still roise"
    }
}

console.log(Give_chocolate_and_fixNusuMood(32))