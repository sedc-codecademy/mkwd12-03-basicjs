$(document).ready(function () {
  // select all elements
  //   let allElements = $("*");
  //   console.log(allElements);
  // select by tag name
  //   let h1 = $("h1");
  //   console.log(h1);
  // select by class
  //   let redElements = $(".red");
  //   console.log(redElements);
  // select by ID
  //   let subtitleOne = $("#subtitle-1");
  //   console.log(subtitleOne);
  //   Using complex CSS selectors
  //   let firstLi = $("main > nav > ul > li:first-child");
  //   console.log(firstLi);
  // Getting the first element with JS
  //   let sections = document.getElementsByTagName("section");
  //   let firstSection = sections[0];
  //   console.log(firstSection);
  // Getting the first and last element with jQuery
  //   let firstSection = $("section").first();
  //   console.log(firstSection);
  //   let lastSection = $("section").last();
  //   console.log(lastSection);
  // How we get HTML value (equivalent to innerHTML)
  //   let firstSectionHTML = $("section").first().html();
  //   console.log(firstSectionHTML);
  // How we change HTML value  (equivalent to innerHTML = "SEGA NESTO DRUGO")
  //   $("section").first().html(`SEGA NESTO DRUGO`);
  // How we change text value (equivalent to innerText)
  //   let headingOne = $("h1").first().text();
  //   console.log(headingOne); (equivalent to innerText = "jQuery e mnogu cool")
  //   $("h1").first().text("jQuery e mnogu cool");

  // Manipulating CSS with jQuery
  // This is setting the style attribute of the element
  // Equivalent to document.querySelector("h1").style.color = "red";
  //   $(".red").first().css("color", "red");
  //   $(".red").first().css("background-color", "gray");

  // Used to add/remove/toggle classes
  // document.querySelector('h1').classList
  //   $("h1").first().addClass("black-border");
  //   $("h1").first().removeClass("gray-border");
  //   $("h1").first().toggleClass("white-border");

  // Events in jQuery
  //   $("#show-text").click(function () {
  // get the value of the input
  //     let inputValue = $("input").first().val();

  //     $("#input-showcase").first().text(inputValue);
  //   });

  // show/hide elements with jQuery
  $("#show-man-c").click(function () {
    //   With plain/vanilla JS
    // document.querySelector("#man-c").style.display = "block";
    // document.querySelector("#liver").style.display = "none";

    $("#man-c").show();
    $("#liver").hide();
  });

  $("#show-liver").click(function () {
    $("#man-c").hide();
    $("#liver").show();
  });
});
