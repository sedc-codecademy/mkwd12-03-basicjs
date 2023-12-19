
function getDataForUser(username) {
    if (!username) {
        console.error('You dont have a username inputed as argument')
        return;
    }

    let userAccountAmount = localStorage.getItem(username);

    if (userAccountAmount == null) {
        userAccountAmount = 25000;
        localStorage.setItem(username, userAccountAmount);
    };

    return parseInt(userAccountAmount);
}

function saveAccount(userName, valueToDeduct) {
    let initialAcountValue = getDataForUser(userName);
    initialAcountValue -= valueToDeduct;
    localStorage.setItem(userName, initialAcountValue);
    console.log(`User ${userName} account balance updated.`);
}



function bankomat(userName) {
    if (!userName) {
        console.error('You must enter a vaid username');
        const retryPrompt = confirm(`Do you want to try again`)
        if (retryPrompt) {
            bankomat(userName)
        }
        return;
    }
    let initialBankAcount = getDataForUser(userName);

    let moneyToWithdraw = parseInt(prompt(`Account balance: ${initialBankAcount}.00 MKD. How much money do you want to widthdraw?`))

    if (isNaN(moneyToWithdraw) && moneyToWithdraw != null) {
        console.error('You must enter valid number')
        alert('You must enter a valid number in the prompt');
        const retryPrompt = confirm(`Do you want to try again`)
        if (retryPrompt) {
            bankomat(userName)
        }
        return;
    }
    
    moneyToWithdraw = Math.abs(moneyToWithdraw);

    if (moneyToWithdraw > initialBankAcount) {
        console.warn('You dont have enough money on your account')
        const confirmTransaction = confirm(`You only have ${initialBankAcount} MKD on your acount, do you want to widthdraw that amount or go back to the begining?`);
        if (confirmTransaction) {
            alert(`You have widthdrawn all your money: ${initialBankAcount}.00`)
            saveAccount(userName, initialBankAcount);
            return initialBankAcount;
        }
        else {
            bankomat(userName);
        }
    };

    saveAccount(userName, moneyToWithdraw);
    alert(`You have widthdrawn ${moneyToWithdraw}.00 MKD. Your account balance is: ${initialBankAcount}`)
    return moneyToWithdraw;
}

const userName = prompt('Vnesete korisnik');

bankomat(userName);