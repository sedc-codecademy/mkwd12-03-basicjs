/*

Write a JavaScript program called PhoneBook. 
You should have three input fields in the html,
one for firstName, lastName and phoneNumber.
After entering the values into each of them,
on clicking on a “Save” button, you should
display the newly added contact in a table
below the inputs. Make sure the user is entering
an appropriate values in the fields!

Bonus: Try to save the newly added contact as an object
(literal or constructor function its up to you)
and add it to an array!

Task breakdown:
1. Add three inputs: firstName, lastName, phoneNumber
2. Add submit button
3. Create a table
4. Select all element from above
    - select table body
5. Create an array to store all users
6. Add event listener for clicking on submit button
    - Get the values from inputs
    - Validate inputs
    - Create an object where the values are the values from the inputs
    - Add newly created object to array
    - Create a table row from the values of the object
    - Insert the table tow to the table body
7. Celebrate!
*/

// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     phoneNumber: 7683512763
// }

// Data
let users = [];

// Selectors
let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");
let phoneNumberInput = document.getElementById("phoneNumber");
let addButton = document.getElementById("add");
let tableBody = document.getElementById("data");

// Events
addButton.addEventListener("click", function (event) {
  event.preventDefault();

  // - Get the values from inputs
  let firstName = firstNameInput.value;
  let lastName = lastNameInput.value;
  let phoneNumber = phoneNumberInput.value;

  // - Validate inputs
  if (!firstName || !lastName || !phoneNumber) {
    alert("All inputs are required!");
    return;
  }
  // - Create an object where the values are the values from the inputs
  let user = {
    firstName: firstName, // Joe
    lastName: lastName, // Doe
    phoneNumber: phoneNumber, // 43128321
  };
  // - Add newly created object to array
  users.push(user);

  // - Create a table row from the values of the object
  const tableRow = `
        <tr>
            <td>${users.length}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.phoneNumber}</td>
        </tr>
    `;

  // - Insert the table row to the table body
  tableBody.innerHTML += tableRow;
});
