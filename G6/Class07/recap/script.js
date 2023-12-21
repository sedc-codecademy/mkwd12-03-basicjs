
/**
 * Print todos in the screen
 * 1. Have a list od todos DONE
 * 2. Create a function that accepts one parameter that is list of todos DONE
 * 3. Validate if the array is valid or is not empty DONE
 * 4. If array is valid, print each todo from the array on the screen in ul tag DONE
 * 5. BONUS: Make sure the function prints only valid todos (values that are strings) DONE
 */

let myDiv = document.getElementById("myDiv");

let todos = [undefined, 'Make the bed', 'Go to store', 'Go to work', false,1, 1001, 'Learn Javascript', 'What tv', true];

function printTodos(listOfTodos) {
    if (listOfTodos.length === 0) {
        alert("My friend, the list is empty");
    };

    // THIS IS BAD: 
    // myDiv.innerHTML += "<ul>";
    // for(let i = 0; i < listOfTodos.length; i++){
    //     myDiv.innerHTML += `<li>${listOfTodos[i]}</li>`
    // };
    // myDiv.innerHTML += "</ul>";

    // THIS IS BETTER: 
    let content = "";
    content += "<ul>"
    for(let i = 0; i < listOfTodos.length; i++){
        if(typeof listOfTodos[i] === "string"){
            content += `<li>${listOfTodos[i]}</li>`
        }
    }
    content += "</ul>"
    myDiv.innerHTML = content;

    // THIS MIGHT BE THE BEST
    // let ul = document.createElement("ul");
    // for (let i = 0; i < listOfTodos.length; i++) {
    //     let listItem = document.createElement("li");
    //     listItem.innerText = listOfTodos[i]
    //     ul.appendChild(listItem)
    // }
    // myDiv.appendChild(ul)

};

printTodos(todos);


function printNumbers(){
    let message = '';
    for(let i = 1; i <= 20; i++){
        if(i % 2 === 0){
            message = message + ` ${i}\n`
            // message += ` ${i}\n`
        }else {
            message = message + `${i}`
            // message += `${i}`
        }
    }

    console.log(message)
}

printNumbers()