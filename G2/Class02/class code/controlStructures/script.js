console.log('Control structures');

let vrednostOdInput = prompt('Vnesete poeni od ispitot');
// let score = parseInt(vrednostOdInput);
let score = vrednostOdInput; //string


let pass = 50;
let splendid = 80;

if (score >= splendid) {
    alert('You have passed the exam with splendid results')
}
else if (score >= pass) {
    alert('You have barely passed the exam, pity')
}
else {
    alert('YOU FAIL, YOU MISERABLE PIECE OF SHO I DA E')
}
