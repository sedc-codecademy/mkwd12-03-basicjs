console.log(`Hello from Sedc`);

// 1 feet = 0.3048 meters

function converterFromFeetToMeters(vrednostVoStapki) {
    let rezultat = vrednostVoStapki * 0.3048;
    return rezultat;
}

let prvPrimer = converterFromFeetToMeters(15);
let vtorPrimer = converterFromFeetToMeters(25);
let tretPrimer = converterFromFeetToMeters(25000);

console.log(prvPrimer);
console.log(vtorPrimer);
console.log(tretPrimer);

let cetvrtPrimer = converterFromFeetToMeters("Ceco");
console.log(cetvrtPrimer);


let nekoeIme = "Filip's home";

console.log(nekoeIme);

function areaCalculator(shirina, visina) {
    let rezultat = shirina * visina;
    return rezultat;
}

let ploshtinaNaFudbalskoIgraliste = areaCalculator(100, 50);

console.log(ploshtinaNaFudbalskoIgraliste, " metri kvadratni");


function circleAreaCalculator(radius) {
    let pi = 3.14;
    let rezultat = (radius * radius) * pi;
    return rezultat;
}

let radiusNaBedz = 35;

let nekakovKrug1 = circleAreaCalculator(25);
let nekakovKrug2 = circleAreaCalculator(45);
let plostinaNaBedz = circleAreaCalculator(radiusNaBedz);


console.log('---------------------------------');

console.log(nekakovKrug1);
console.log(nekakovKrug2);
console.log(plostinaNaBedz);






