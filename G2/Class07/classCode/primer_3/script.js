const nameInput = document.getElementById('nameInput');
const lastNameInput = document.getElementById('lastNameInput');
const passwordInput = document.getElementById('passwordInput');
const emailInput = document.getElementById('emailInput');
const submitButton = document.getElementById('submitButton');
const addingContainer = document.getElementById('addingContainer');

function printValues(name, lastName, password, email) {
    return `User with name ${name} and last name ${lastName} with the password ${password} and email ${email} has been successfuly registered`
};

submitButton.addEventListener('click', function () {
    addingContainer.innerHTML += `
    <p>${printValues(nameInput.value, lastNameInput.value, passwordInput.value, emailInput.value)}</p>
    `
});