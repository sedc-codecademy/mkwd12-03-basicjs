/*
 === Create a shopping app ===
 1. App accepts an input of clothing: shirt, pants, sneakers,
 sandals - any other type would ask the user to add a
 proper value
 2. App accepts an input of color: white, black, yellow, green
 - any other color would ask the user to add a proper color
 3. App will ask the user to continue shopping or not
 - if the user continues to shop, we can choose additional
 clothing and colors
 4. App will showcase the bought clothing with it's color
 in the list
*/

function shopping() {
  let chosenTypeOfClothing;
  let chosenColor;

  while (!chosenTypeOfClothing) {
    let clothing = prompt(`What type of clothing do you want to buy?`);

    switch (clothing) {
      case "pants":
      case "shirt":
      case "sneakers":
      case "sandals":
        chosenTypeOfClothing = clothing;
        break;
      default:
        alert(`We don't have ${clothing}, please choose another type.`);
    }
  }

  while (!chosenColor) {
    let color = prompt(
      `Please choose a color in which you want the ${chosenTypeOfClothing} to be in.`
    );

    switch (color) {
      case "white":
      case "black":
      case "yellow":
      case "green":
        chosenColor = color;
        break;
      default:
        alert(`We don't have such color, choose another color.`);
    }
  }

  let continueShopping = confirm("Do you want to continue shopping?");

  console.log(continueShopping);
}

shopping();
