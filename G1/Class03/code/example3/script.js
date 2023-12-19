// let firstName = 'Pero';
// let lastName = 'Nikolov';

// function sayMyName() {
//     firstName = 'Ivo';
//     let age = 20;
//     console.log('Inside the function', firstName, lastName)
// }

// // sayMyName('Ivo')
// sayMyName()

// console.log('Outside the function', firstName)

// Global scope
// let dog = 'Murdzo';

function exampleA() {
    let cat = 'Mache';
    // func exampleA scope
    console.log('Dog in A', dog)
    console.log('Cat in A', cat)
    function exampleB() {
        let parrot = 'Dzivdzi';
        // func exampleB scope
        console.log('Dog in B', dog)
        console.log('Cat in B', cat)
        console.log('Parrot in B', parrot)
        function exampleC() {
            let mouse = "Micky";
            // func exampleC scope
            console.log('Dog in C', dog)
            console.log('Cat in C', cat)
            console.log('Parrot in C', parrot)
            console.log('Mouse in C', mouse)
        }
        exampleC()
    }
    exampleB()
}

// exampleA()
// exampleB()
// exampleC()

// console.log('Dog in Global', dog)
// These are not accessible in global scope
// console.log('Cat in global', cat)
// console.log('Parrot in global', parrot)
// console.log('Mouse in global', mouse)

// Var VS Let (regarding scope)

// printHello()

// function printHello() {
//     console.log('Hello')
// }

// console.log(name1)

// var name1 = 'Pero'

// message = 'Outside the func';

// function warning() {
//     message = 'Inside the func';

//     console.log(message);
// }
// warning()
// console.log(message)

// function getIsMature(age) {
//     let fName = 'Petar';

//     if (age <= 18) {
//         console.log(`${fName} is underage`)
//     } else {
//         console.log(`${fName} is mature`)
//     }
// }

// getIsMature(16)
// getIsMature(30)

// function calculateAge(birthYear) {
//     let currentYear = new Date().getFullYear()
//     let age = currentYear - birthYear;
//     console.log(`You are ${age} years old!`)
// }

// calculateAge(1989)
// calculateAge(1945)
// calculateAge(2010)

function convertCelsiusToFahrenheit(celsius) {
    let result = celsius * 1.8 + 32;
    return result
}

function convertFahrenheitToCelsius(fahrenheit) {
    let result = (5/9) * (fahrenheit - 32);
    return result
}

// console.log(convertCelsiusToFahrenheit(10))
// console.log(convertFahrenheitToCelsius(100))

const tempUnit = prompt('Enter the unit for temperature (F or C)')
const tempValue = prompt('Enter the value for temperature')

function calculateTemperature(value, unit) {
    let parsedValue = parseInt(value);

    if (unit === 'C') {
        return convertCelsiusToFahrenheit(parsedValue)
    } else if (unit === 'F') {
        return convertFahrenheitToCelsius(parsedValue)
    } else {
        return 'Invalid value'
    }
}

console.log(calculateTemperature(tempValue, tempUnit))

