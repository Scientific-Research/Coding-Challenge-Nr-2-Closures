"use strict";

/* 
CODING CHALLENGE #2:

This is more of a thinking challenge that a coding challenge!😎

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. DO NOT select the h1 element again!

and now explain to YOURSELF (or someone around you) WHY this worked? Take all the time you need! Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

// (function () {
//   const header = document.querySelector("h1");
//   header.style.color = "red";
// })();

const header = document.querySelector("h1");
const body = document.querySelector("body");

body.addEventListener("click", () => {
  console.log("Hallo");
  header.style.color = "red";
});
