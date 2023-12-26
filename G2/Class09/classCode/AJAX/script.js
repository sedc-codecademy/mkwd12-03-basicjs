
function calcucalteExpenses(rentForAppartement, billsExpenses, salary) {
    const endOfMonth = salary - rentForAppartement - billsExpenses;
    alert(`We had salary ${salary} euros, at the end of month we have ${endOfMonth} euros left,
    where rent for appartement was ${rentForAppartement} euros and bills expenses were ${billsExpenses} euros
    `)
}

calcucalteExpenses(375, 250, 1000)
calcucalteExpenses(375, 250, 1500)
calcucalteExpenses(500, 300, 2800)
calcucalteExpenses(375, 250, 1500)




