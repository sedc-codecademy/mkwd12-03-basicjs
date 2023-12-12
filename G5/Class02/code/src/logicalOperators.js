// AND

console.log("=== AND ===");
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false
console.log("=======")
console.log("" && false); // ""
console.log(false && ""); //false

//OR

console.log("== OR ===");
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false
console.log("===");
console.log("" || false); //false
console.log(false || ""); //""

//NOT

console.log("=== NOT ===");
console.log(!true); //false
console.log(!false); //true
console.log(!"Cat"); //false
