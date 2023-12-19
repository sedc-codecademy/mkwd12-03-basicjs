function calculator(num1,num2,operator){
    switch (operator){
        case "+":
            return num1+num2;
        case "-":
            return num1-num2;
        case "*":
            return num1*num2;
        case "/":
            return num1/num2;
        default:
            return "Invalid operator";
    }
}

let number1=parseInt(prompt("Enter a number"));
let number2=parseInt(prompt("Enter a number"));
let operatorUser=prompt("Enter operator. It can only be +,-,*,/");


alert(calculator(number1,number2,operatorUser));