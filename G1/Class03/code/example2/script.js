// alert('Greetings from QA')
// alert('Happy Holidays!')

// alert('Greetings from QA')
// alert('Happy Holidays!')

// alert('Greetings from QA')
// alert('Happy Holidays!')

// Function declaration
// function alertGreetings() {
//     alert('Greetings from QA')
//     alert('Happy Holidays!')
// }

// Function execution (calling the function)
// alertGreetings()
// alertGreetings()

// Get full name
// function sayFullName(fullName) {
//     console.log(fullName)
// }

// sayFullName('Nikola Nikolovski')
// sayFullName('Petar Petrovski')
// sayFullName() // default value for parameters is always undefined

// function sayFullName(firstName, lastName) {
//     console.log(firstName + " " + lastName)
// }

// sayFullName('Goran', 'Todorovski')

// function sum(num1, num2) {
//   let result = num1 + num2;
//   // console.log(result)
//   return result;
// }

// let sumOfTwoNumbers = sum(1, 2);
// let sumOfAnotherTwoNumbers = sum(3, 4);

// console.log(
//   `Sum of the first two numbers is ${sumOfTwoNumbers}
//   and the sum of the second two numbers is
//   ${sumOfAnotherTwoNumbers}`
// );

// let ultimateSumResult = sum(sum(10, 20), sum(30, 40));

// console.log(ultimateSumResult);

function getFullName(name, surname) {
    return `${name} ${surname}`
}

function getStudentInfo(firstName, lastName, age, academy = 'Code') {
  console.log(
    `Student ${getFullName(firstName, lastName)} is ${age} years old
     and s/he is part of the ${academy} academy within QA.`
  );
}

getStudentInfo('Orce', 'Trajanov', 30, 'Code')
getStudentInfo('Nikola', 'Nikolov', 20)

getStudentInfo('Silvana', 'Stojanovska', 25, 'Design')

