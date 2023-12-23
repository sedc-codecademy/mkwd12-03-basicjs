// console.log("hi");

$(document).ready(function() {
    let allElements = $("*");
    console.log(allElements);

    let firstTitle = $("#firstSubtitle");
    console.log(firstTitle);

    let wrappersByClassName = $(".innerWrapper");
    console.log(wrappersByClassName);

    let firstWrapper = wrappersByClassName.first();
    console.log(firstWrapper);

    let lastWrapper = wrappersByClassName.last();
    console.log(lastWrapper);

    let paragraphsByTagName = $("p");
    console.log(paragraphsByTagName);

    let firstParagraph = $("p:first");
    console.log(firstParagraph);

    let lastParagraph = $("p:last");
    console.log(lastParagraph);

    let secondParagraph = $("#second :nth-child(2)");
    console.log(secondParagraph);

    let firstChild = $(".innerWrapper :first-child");
    console.log(firstChild);

    let lastChild = $(".innerWrapper :last-child");
    console.log(lastChild);

    console.log(lastChild.text());

    let inputValue = $("#input1").val()
    console.log(inputValue);

    let changedValue = $("#input1").val("changed");
    console.log(changedValue);

    $("#emptyDiv").html("<p> I am paragraph generated from Jquery </p>");
    console.log($("#emptyDiv").html());

    let emptyDiv = document.getElementById("emptyDiv");
    console.log(emptyDiv);

    $("h1").before("<p>I am a paragraph before the h1</p>");
    $("h1").after("<p>I am a paragraph after the h1</p>");

    paragraphsByTagName.first().css("color", "blue");
    paragraphsByTagName.last().css({"color": "red","background-color": "green","font-weight": "bold",})

    paragraphsByTagName.first().hide();
    paragraphsByTagName.first().show();

    let button = $("#btn");

    // button.on("click", function() {
    //     console.log("Hello from Jquery");
    // })

    button.click(function() {
        console.log("Hello from Jquery");
    })

})