let monthsInYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'];

let monthsInYearButAnotherVariable = monthsInYear;

monthsInYearButAnotherVariable.push('December');

console.log(monthsInYear);

let lastMonthInTheArray = monthsInYear.pop();
console.log(lastMonthInTheArray);

let firstMonthInTheArray = monthsInYear.shift();
console.log(firstMonthInTheArray);
