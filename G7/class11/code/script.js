// Write a program in programming language JS that will print in 
// console all threesome numbers in given interval for which the Pythagorean condition is met.
//a*a + b*b = c*c

let start = 1;
let end = 20;

for(let a = start; a <= end; a++) {
    // console.log(a);
    for(let b = start; b <= end; b++) {
        // console.log(b);
        for(let c = start; c <= end; c++) {
            if(a*a + b*b === c*c) {
                console.log(`The condition is met by the numbers ${a}, ${b}, ${c}`);
            }
        }
    }
}


// Find all palindromes in a given interval
// example palindromes 121, 3443, 22, 232 

// console.log(parseInt(123 / 10));
// console.log(parseInt(123 % 10));

let startN = 100;
let endN = 10000;

for(let i = startN; i <= endN; i++) {
    let strNum = i.toString();
    let reversedString = [...strNum].reverse().join('');

    if(strNum === reversedString) {
        console.log(`Palindrome is ${i}`);
    }
}

// for(let i = startN; i <= endN; i++) {
//     let reversedNum = 0;
//     let helper = i;

//     while(helper > 0) {
//         let temp =  helper % 10;
//         reversedNum = reversedNum * 10 + temp;
//         helper = parseInt(helper / 10);
//     }

//     if(i === reversedNum) {
//         console.log(`Palindrome is ${i}`);
//     }
// }


let firstNameInput = document.getElementById('firstName');
let lastNameInput = document.getElementById('lastName');
let phoneNumberInput = document.getElementById('phoneNumber');
let saveButton = document.getElementById('saveButton');

let contacts = [];

function PhoneBookEntry(firstName, lastName, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
}

saveButton.addEventListener('click', function() {
    let firstName = firstNameInput.value.trim();
    let lastName = lastNameInput.value.trim();
    let phoneNumber = phoneNumberInput.value.trim();

    if (!firstName || !lastName || !phoneNumber) {
        alert("Please fill all fields correctly.");
        return;
    }

    let newContact = new PhoneBookEntry(firstName, lastName, phoneNumber);
    
    contacts.push(newContact);
    renderContacts();

    firstNameInput.value = '';
    lastNameInput.value = '';
    phoneNumberInput.value = '';

});


function deleteContact(index) {
    contacts.splice(index, 1);
    renderContacts();
}

function renderContacts() {
    let table = document.getElementById('contactsTable');
    table.innerHTML = `
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Actions</th>
        </tr>`;

        let index = 0;
        for (let contact of contacts) {
            let row = table.insertRow(-1);
            row.insertCell(0).innerText = contact.firstName;
            row.insertCell(1).innerText = contact.lastName;
            row.insertCell(2).innerText = contact.phoneNumber;

            let actionsCell = row.insertCell(3);
            actionsCell.innerHTML = `<button onclick="deleteContact(${index})">Delete</button>`;

    
            index++;
        }
}




