// No return

function greeting(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}`);
}

greeting("Danilo", "Borozan");
// greeting("Borozan", "Danilo");

//return

function sum(num1, num2){
    let result = num1 + num2;

    return result;
}

let res = sum(5, 2);
console.log(res);

if(res % 2 === 0 ){
    console.log("Even Number");
}else{
    console.log("Odd number");
}

let anotherResult = sum(6,2);
console.log(anotherResult);

alert(sum(4,5));