console.log("it works and everybody focus");

/*
Write a JavaScript program called PhoneBook. You should have three input fields in the html, one for firstName, lastName and phoneNumber. After entering the values into each of them, on clicking on a “Save” button, you should display the newly added contact in a table below the inputs. Make sure the user is entering correct values in the fields!

Try to save the newly added contact as an object (literal or construcotr function its up to you) and add it to an array!
Add column with delete and edit button so that you can edit or delete a contact!
*/

// Selectors
const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const phoneNumberInput = document.querySelector("#phoneNumber");
const addBtn = document.querySelector("#addBtn");
const tableBodyEl = document.querySelector(".table-body");

// Classess
class Contact {
  constructor(firstName, lastName, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
  }
}

// Data Variables
let contacts = [
  new Contact("John", "Doe", 123123123123),
  new Contact("Jane", "Doe", 523123123123),
  new Contact("Bon", "Jovi", 123123123123),
  new Contact("John", "Bovi", 123123123123),
];
let indexToEdit = null;

// Initial render of exisiting contacts
renderContacts(contacts);

function deleteContactAndReturnArr(index, contacts) {
  const updatedContacts = [];

  for (let i = 0; i < contacts.length; i++) {
    if (index !== i) updatedContacts.push(contacts[i]);
  }

  return updatedContacts;
}

function addHTMLContact(contact) {
  const tableRowEl = document.createElement("TR");

  tableRowEl.innerHTML = `
      <td>${contact.firstName}</td>
      <td>${contact.lastName}</td>
      <td>${contact.phoneNumber}</td>
      <td class="edit-btn">✅</td>
      <td class="delete-btn" >❎</td>
    `;

  return tableRowEl;
}

function validateValues(firstName, lastName, phoneNumber) {
  if (firstName.length < 2) return false;
  if (lastName.length < 2) return false;
  if (phoneNumber.length < 8) return false;

  return true;
}

function setInputValuesToEdit(contact) {
  firstNameInput.value = contact.firstName;
  lastNameInput.value = contact.lastName;
  phoneNumberInput.value = contact.phoneNumber;
}

function resetInputs() {
  firstNameInput.value = "";
  lastNameInput.value = "";
  phoneNumberInput.value = "";
}

function renderContacts(contacts) {
  tableBodyEl.innerHTML = "";

  for (let i = 0; i < contacts.length; i++) {
    let newTableRowEl = addHTMLContact(contacts[i]);

    newTableRowEl
      .querySelector(".edit-btn")
      .addEventListener("click", function () {
        console.log("edit btn clicked", i);
        setInputValuesToEdit(contacts[i]);
        indexToEdit = i;
        addBtn.innerText = "Update Contact!";
      });

    newTableRowEl
      .querySelector(".delete-btn")
      .addEventListener("click", function () {
        console.log("delete btn clicked", i);
        contacts = deleteContactAndReturnArr(i, contacts);

        // Recursively called when deleting a contact
        renderContacts(contacts);
      });

    tableBodyEl.appendChild(newTableRowEl);
  }
}

// Listeners
addBtn.addEventListener("click", function () {
  console.log("btn clicked");

  const firstNameValue = firstNameInput.value;
  const lastNameValue = lastNameInput.value;
  const phoneNumberValue = phoneNumberInput.value;

  // Validate inputs before continuing
  if (!validateValues(firstNameValue, lastNameValue, phoneNumberValue)) {
    alert("Invalid Inputs");
    return;
  }

  // Create a new contact object here
  const newContact = new Contact(
    firstNameValue,
    lastNameValue,
    phoneNumberValue
  );

  if (indexToEdit !== null) {
    contacts[indexToEdit] = newContact;
    indexToEdit = null;
    addBtn.innerText = "Add Contact!";
  } else {
    contacts.push(newContact);
  }

  //  Render contacts after adding or updating
  renderContacts(contacts);
  resetInputs();
});
