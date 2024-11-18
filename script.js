"use strict";

/* 
CODING CHALLENGE #2:

This is more of a thinking challenge that a coding challenge!😎

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. DO NOT select the h1 element again!

and now explain to YOURSELF (or someone around you) WHY this worked? Take all the time you need! Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const body = document.querySelector("body");
  const header = document.querySelector("h1");
  const h2 = document.querySelector("h2");

  header.style.color = "red";
  h2.style.color = "blue";

  body.addEventListener("click", () => {
    header.style.color = "blue";
    h2.style.color = "red";
  });
})();
