for(let num=1; num<=10; num++){
    document.write(`Number: ${num}` + '<br>');
    console.log(`Number: ${num}`);
}

document.write("==== FOR LOOP WITH ARRAY ====");
document.write('<br>');

console.log("==== FOR LOOP WITH ARRAY ====");
let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

for(let i=0; i < days.length; i++){
    document.write(`Days: ${days[i]}` + ", ");
    console.log(`Days: ${days[i]}`);
}


//FOR OF LOOP
document.write('<br>');
document.write('<br>');
document.write("==== FOR OF LOOP WITH ARRAY ====");
document.write('<br>');
console.log("==== FOR OF LOOP WITH ARRAY ====");

let numbers = [11, 33, 123, 1111, 9];

for(let index of numbers){
    console.log(`Number: ${index}`);
}

let firstName = ["Danilo", "Ivan", "Filip", "Marija", "Tamara"];

for(let names of firstName){
    console.log(`First Name: ${names}`);
}


let workingDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

console.log("==== BREAK ====");
console.log("==== workingDays ====");
for(let i=0; i<workingDays.length;i++){
    if(workingDays[i] == 'Sat')
    break;
    console.log(`workingDays: ${workingDays[i]}`);
}
console.log("END FOR");


console.log("======= CONTINUE =============");
for(let i=0;i<workingDays.length;i++){
    if(workingDays[i] == 'Wed' || workingDays[i] == 'Thu')
    continue;
    console.log(`days: ${workingDays[i]}`);
}