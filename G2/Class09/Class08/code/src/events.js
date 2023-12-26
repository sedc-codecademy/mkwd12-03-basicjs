$(document).ready(function(){
    let ourButton = $("button").first();

    //FIRST WAY
    ourButton.on("click", function(){
        console.log("Hello from the first click handler!");
    })

    //SECOND WAY
    ourButton.click(function(e){
         //$(this) -> JQuery element from the target of the event
         $(this).text("Click me"); //this -> button (DOM element)

         let paragraphs = $("p");
         paragraphs.hide();

         //$("p").hide();
    });

    //......
   // ourButton.off("click"); // remove all click event handlers
  // ourButton.click(greeting);
  // ourButton.off("click", greeting);
});