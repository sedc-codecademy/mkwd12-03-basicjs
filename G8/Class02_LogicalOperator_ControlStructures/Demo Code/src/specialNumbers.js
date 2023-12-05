var a = 2 / "test";
console.log("Value of a:");
console.log(a);
console.log("Type of a:");
console.log(typeof(a));

console.log(a == NaN);
console.log(a === NaN);

console.log(isNaN(a));

var text = "Text";
console.log("Text:");
console.log(isNaN(text));

console.log("Number.isNaN(a)");
console.log(Number.isNaN(a));
console.log("Number.isNaN(text)");
console.log(Number.isNaN(text));

var c = Infinity;
console.log("Value of c:");
console.log(c);
console.log("Type of c:");
console.log(typeof(c));