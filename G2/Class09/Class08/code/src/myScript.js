$(document).ready(function(){

    let allElements = $("*"); //select all elements
    let mainTitleHeader = $("#mainTitle"); //select by id
    console.log(mainTitleHeader);
    console.log(allElements);

    console.log(allElements[0]);
    console.log(allElements[2]);

    //by class
    let innerWrapperElements = $(".innerWrapper");
    //by tag name
    let paragraphs = $("p");
    let elementsByMultipleSelectors = $(".innerWrapper, .wrapper, #mainTitle");
    console.log(elementsByMultipleSelectors);

    let firstParagraph = $("p:first"); //get first p
    let lastParagraph = $("p:last"); //get last p
    console.log(lastParagraph);

    let firstChildren = $("h3:first-child");// get all h3 elems, which are first child of their parent
    let lastChildren = $("p:last-child"); // get all p elems, which are last child of their parent
    console.log(lastChildren);
    let secondChildren = $("p:nth-child(2)") // get all p elems, which are second child of their parent
    console.log(secondChildren);

    //DOM vs JQUERY
    let firstParagraphDOM = paragraphs[0];
    console.log(firstParagraphDOM);
    console.log(firstParagraphDOM.innerText);

    let firstParagraphJquery = paragraphs.first(); //jquery element
    console.log(firstParagraphJquery.text());
    firstParagraphJquery.text("Hello! This is the new text"); // updating text
    console.log(firstParagraphJquery.text());

    paragraphs.last().text("Changed text of last p");

    let lastParagraphText = paragraphs.last().text();
    paragraphs.last().text(lastParagraphText + " addition.... ");

    let secondParagraph = paragraphs.get(1);
    let prevSibling = paragraphs.last().prev();
    console.log("prevSibling's text:");
    console.log(paragraphs.last().prev().text());
    let nextSibling = $("#firstTitle").next();
    console.log("nextSibling's text");
    let nextSiblingText = $("#firstTitle").next().text();
    console.log(nextSiblingText);

    let foundParagraphText = allElements.find(".wrapper").find("p").last().text();
    console.log(foundParagraphText);

    let input = $("input[value='Cool']");
    console.log(input.val()); //val() -> returns the value of an input element

    input.val("Cool new value");
    console.log(input.val());

    console.log(innerWrapperElements.first().html()); // html() -> innerHTML in Vanilla JS
    innerWrapperElements.first().html("<span>Our span</span>")


    // TOGGLE
    paragraphs.last().hide();
    paragraphs.last().show();

    paragraphs.last().css("color", "red");
    paragraphs.last().css("background-color", "green");

    //INSERTING ELEMENTS
    paragraphs.last().after("<h2>Added header 2</h2>");
    paragraphs.last().before("<h4>Added header 4</h4>");
});