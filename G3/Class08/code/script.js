let container = document.getElementById("main");
let clearButton = document.getElementById("clearBtn");
let numOfExcercises = document.getElementById("numOfExcercises");
let submitButton = document.getElementById("sbmBtnForNumOfEx");

console.log(container);

let vezbi = {
  vezba1:
    "Declare and initialize a variables of every type that we learned so far. Print each of them in a console or alert()!",
  vezba2:
    "Read 5 variables as user input and then print each of the variable types in the console.",
  vezba3:
    "Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 double the difference as a result.Make sure you use a function! Ex. Input: 20 ==> Output: 14",
  vezba4:
    "Write a JavaScript program that will find out which of two inserted integers is closer to 100. Make sure to alert the user if a negative number is inserted!Make sure you use a function!Ex. Input1: 20Input2: 80Output: 80 is closer to 100",
  vezba5:
    "Bob's salary is 1000 eur per month. He has expenses that has to cover during the month. He has to pay rent for his apartment 375 eur. He should pay 250 eur for his bills in total. Print on screen what is the amount left that Bob has for the rest of the month, and what is the total amount of his expenses.",
  vezba6:
    "One student has 5 exams in the first semester. Student name is Bob Bobsky. His/Her grades for all of the exams are Math = 10, English = 6, Science = 8, Sport = 9, Chemistry = 6 respectively. The professor told the students that for passing the first semester they must have average of 8. The student needs to know whether they have passed the semester or not. Alert on screen if the student pass or not! Print on the screen all of the subjects and the student name aswell.",
    vezba7: "Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7. If the number is divisible by 3, then write 'Fizz' in the console, if the number is divisible by 7, then write 'Buzz' in the console, and if the number is divisible by 3 and 7, write 'FizzBuzz' in the console.",
    vezba8: "Write a simple JavaScript program to join all elements of the an array into a string. The array should have at least 5 elements",
  vezba9:
    "Make an array of ten elements. Make sure four of them to be: Null, undefined, NaN, “” and false (JavaScript falsy values). Create a function that will work for every array in the world :) and it will remove all the falsy values from the array.",
  vezba10:
    "Write a JavaScript function called storyTeller(), that will take as an input parameters the input fields values from the html! ex: storyTeller(who, what, when) In the function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like Example: Lancelot was a really strong knight in the middle age! )"
};
console.log(typeof vezbi);
console.log(vezbi);

function PrintExcercises(inputObject, numOfProps) {
    //see google for Object.Values => advanced JS subject will cover this in full details along with many other things
    values = Object.values(inputObject);
    for (let i = 0; i < Math.min(numOfProps, values.length); i++) {
        console.log(values[i]);
        container.innerHTML += `<p> Vezba ${i + 1}: ${values[i]}</p>`
        container.innerHTML += `---------------------------------------------------`
    }
}

function ClearHtml(inputElement) {
    inputElement.innerHTML = "";
}

clearButton.addEventListener("click", function() {
    ClearHtml(container);
})

submitButton.addEventListener("click", function () {
    let numberOfExcercises = numOfExcercises.value;
    PrintExcercises(vezbi, numberOfExcercises);
    numOfExcercises.value = "";
});

//FOR HOMEWORK!!!!!!!!!!!!
//1.TRY Extending our application so it has a other HTML elements and logic in JS that will giv us just a given excercise(also handle errors if there is no such exercise in our object)

//2 Try to make a validation in the function that will handle errors if we put more excercises for showing and we dont have that much in our object, we want an alert to be shown for it that will print "too much excercises, give the students some time to learn!!". Same can be for negative number aswell ass for strings

//3. Add some dynamic style to our elements, but do it in JS!

//-----------------FOR THE BOLDEST!----------------

//4. Try Change the theme of the main view so the background is black and the text is white - Do this via a button and if you click the button, the theme should reset and be in its original white screen and black text colour

// Remember to NOOOOOOOOOOTTTT use google or something similar, think for yourself and see references from our previous material and presentations!!!

//HAPPY CODING!!!!!!!!!!!!
