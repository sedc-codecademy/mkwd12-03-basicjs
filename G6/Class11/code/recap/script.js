const inputRows = document.getElementById("rows");
const inputColumns = document.getElementById("columns");
const generateBtn = document.getElementById("generateTable");
const result = document.getElementById('result');


generateBtn.addEventListener("click", function(){
    // the value we get from the UI is always of data type string
    let rowsValue = Number(inputRows.value);
    let columnsValue = Number(inputColumns.value);
    
    let myTable = "<table border=1>";
    for(let row = 0; row < rowsValue; row++){
        //slednata akcija
        myTable += `<tr>`

        for(let cell = 0; cell < columnsValue; cell++){
            myTable += `<td width=70 height=70>Row: ${row + 1} Column: ${cell + 1} </td>`
        }

        myTable += "</tr>"
    }
    
    result.innerHTML = myTable;

})