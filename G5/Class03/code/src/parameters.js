function logNumbers(a, b, c){
    console.log(`a: ${a}`);
    console.log(`b: ${b}`);
    console.log(`c: ${c}`);
}

logNumbers(5, 1, 22); //correct
logNumbers(); // a: undefined b: undefined c: undefined
logNumbers(123); // a:123 b: undefined c: undefined
//logNumbers(67,,222); //syntax error
logNumbers(55,"22",1);
logNumbers("Danilo",23,"26");

//default values
function logData(data1, data2, data3 = "G5"){
    console.log(`data1: ${data1}`);
    console.log(`data2: ${data2}`);
    console.log(`data3: ${data3}`);
}

logData("SEDC", "2023");
logData("Daniel", "Basic JS", "Advanced JS");
logData("Alek", "10");


// Number
console.log(Number("12.2")); // 12.2 typeOf number
console.log(Number("asdasd")); //NaN

//String
console.log(String(123)); // 123 typeOf string