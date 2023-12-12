console.log("CONNECTED");


/**
 * Write javascript code that will get an input from the user and calculate which Chinese Zodiac a given year is in
 * 
 * 1. The formula is: (year - 4) % 12. DONE.
 * 2. Ask the user for his/hers birthday year DONE.
 * 3. Create a function with name generateChineseZodiac DONE
 * 4. This function will accept one parameter,
 *  which is, the user's input DONE.
 * 5. Parse the user input to be number DONE
 * 6. Validate the user input DONE
 * 7. calculate with the formula and for the given result return the correct value. (if result is 0 return Rat etc.) DONE
 */

// let currentYear = new Date().getFullYear();

let userBirthYear = prompt("Please enter you birthyear");


function generateChineseZodiac(birthYear){
    let parsedBirthYear = parseInt(birthYear);
    console.log(parsedBirthYear)

    if(isNaN(parsedBirthYear)){
        // console.log('The input is invalid, try again')

        return 'The input is invalid, try again';
    }

    let zodiacCalculation = (parsedBirthYear - 4) % 12;
    
    if(zodiacCalculation === 0){
        return "Rat"
    }else if(zodiacCalculation === 1){
        return "Ox"
    }else if(zodiacCalculation === 2){
        return "Tiger"
    }else if(zodiacCalculation === 3){
        return "Rabbit"
    }else if(zodiacCalculation === 4){
        return "Dragon"
    }else if(zodiacCalculation === 5){
        return "Snake"
    }else if(zodiacCalculation === 6){
        return "Horse"
    }else if(zodiacCalculation === 7){
        return "Goat"
    }else if(zodiacCalculation === 8){
        return "Monkey"
    }else if(zodiacCalculation === 9){
        return "Rooster"
    }else if(zodiacCalculation === 10){
        return "Dog"
    }else {
        return "Pig"
    }

    
}

let chineseZodiac =  generateChineseZodiac(userBirthYear);

console.log(chineseZodiac)