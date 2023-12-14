console.log('CONNECTED');

console.log('***** ID SELECTOR *****');
// ID SELECTOR => Will select the element with the given id.
let title = document.getElementById("title");
console.log(title);

// Reading the text node of the h1 element
let titleText = title.innerText;
console.log(titleText);

// Overwriting the text of the h1 element with JS =)
// .innerText is resevered property and will return us the text node of the element;
title.innerText = "Hello world";

// SELECTING MYDIV
let myDiv = document.getElementById("myDiv");
console.log(myDiv);

// SELECTION ADS SECTION

let adsSection = document.getElementById('adsSection');
console.log(adsSection)

// .innerHTML will access the elemnt which means we can add child elements in it.
adsSection.innerHTML = "<h1 style='color: red;'> My favourite movie is Harry potter </h1>"
adsSection.innerHTML += "<h1> My favourite movie is John Wick </h1>"
adsSection.innerHTML += "<h1> Third sentence </h1>";


// SELECTING MY PRODUCTS UL

let myProducts = document.getElementById('myProducts');

let products = ["Iphone", "Gaming PC", "Sony", "Headphones"];

function printProducts(arrayOfProducts){
    for(let i = 0; i < arrayOfProducts.length; i++){
        myProducts.innerHTML += `
            <li>${arrayOfProducts[i]}</li>
        `
    }
};

printProducts(products)
