console.log("CONNECTED");

let userNumberInput =  prompt("Hey, enter a number");
console.log('user wrote:', userNumberInput);

let parsedUserInput = parseFloat(userNumberInput);
console.log('parsed user input:', parsedUserInput)

if(parsedUserInput === 5){
    console.log('Okay, you wrote 5.');
}else if(parsedUserInput > 10 && parsedUserInput < 15){
    console.log('The input is between 10 and 15')
}else if(parsedUserInput === 22 || parsedUserInput === 32){
    console.log('The input is 22 or 32')
}else {
    console.log('We entered the else')
};

// Same as if-statement but using switch
console.log('**** SWITCH STATEMENT ****');

console.log(parsedUserInput > 10 && parsedUserInput < 15) // true / false

switch(parsedUserInput){
    // case 5: the condition that we are checking
    // if the condition is fullfiled 
    case 5:
        console.log('Okay, you wrote 5');
        break
    case 10:
    case 11:
    case 12:
        // multiple chained case means that if one of them happens
        // we gonna execute the following code =)
        console.log('The input is between 10 and 12')
        break
    case 20:
        console.log('You entered 20');
        break
    default:
        console.log('The number did not match, we enter default');
        break
};

// Second example
console.log("**** SECOND EXAMPLE ****");

let petInput = prompt('What kind of pet do you want');
console.log('pet input: ', petInput);
console.log('lower cased input', petInput.toLowerCase());
console.log('upper cased input', petInput.toUpperCase());

let loweredPetInput = petInput.toLowerCase();

switch(loweredPetInput){
    case "dog":
    case 'puppy':
        console.log('Dogs are really friendly');
        break;
    case "cat":
        console.log("Cats are awesome");
        break;
    case "fish":
        console.log('Fishes are good');
        break;
    default:
        console.log("The pet you want, is not available yet")
        break;
}
