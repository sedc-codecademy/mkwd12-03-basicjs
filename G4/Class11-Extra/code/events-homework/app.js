console.log("it works");

/*
Write a Javascript function that will dynamiclly create a table
User should input the number of Colums and Rows
In every table cell print which row and column it is (ex. Row-3 Column-1)
Don't forget to use google! :)
*/
const rowsInput = document.querySelector("#rows");
const columnsInput = document.querySelector("#columns");
const createBtn = document.querySelector("#createBtn");
const tableBodyEl = document.querySelector(".table-body");

function renderTable(numRows, numColumns) {
  let tableHTML = "";

  for (let row = 0; row < numRows; row++) {
    let tableCellsHTML = "";
    console.log("ROW NUM", row);
    // Create a loop that adds <td> to the tableCellsHTML

    for (let column = 0; column < numColumns; column++) {
      console.log("COLUMN NUM", column);
      tableCellsHTML += `<td>Row - ${row + 1} Column - ${column + 1}  </td>`;
    }

    tableCellsHTML = `<tr>${tableCellsHTML}</tr>`;

    tableHTML += tableCellsHTML;
  }

  tableBodyEl.innerHTML = tableHTML;
}

createBtn.addEventListener("click", function () {
  console.log("btn clicked");

  const rowsValue = Number(rowsInput.value);
  const columnsValue = Number(columnsInput.value);

  if (rowsValue <= 0 || columnsValue <= 0) {
    alert("Invalid input");
    return;
  }
  //   Only execute this code if inputs are valid
  renderTable(rowsValue, columnsValue);
});
