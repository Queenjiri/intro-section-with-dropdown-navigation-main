// const dropDownMenu = document.querySelector("#dropdown-menu");
// const navOpen = document.querySelector(".nav-close");

// dropDownMenu.addEventListener("click", function () {
//   navOpen.classList.remove("hidden");
//   navOpen.classList.add("nav-close");
// });

// // dropDownMenu.addEventListener("click", function () {
// //   for (let i = 0; i < navOpen.length; i++);
// //
// // });
"use strict";

const navOpen = document.querySelector(".open-outline");
const navClose = document.querySelector(".close-outline");

const navHeader = document.querySelector(".nav-header");
const iconMain = document.querySelector(".nav-close");
const showCase = document.querySelector(".icon-btn");

navClose.addEventListener("click", function () {
  navHeader.classList.remove("nav-header");
});

navOpen.addEventListener("click", function () {
  navHeader.classList.add("nav-header");
});

// for (let i = 0; i < iconMain.length; i++);
showCase.addEventListener("click", function () {
  for (let i = 0; i < iconMain.length; i++);
  console.log(iconMain);
  iconMain.classList.toggle("nav-close");
});
// addEventListener('click', function(){

// const displayMessage = function () {
//   iconMain.classList.toggle("nav-close");
//   iconMain.classList.remove("nav-close");
// };

// showCase.addEventListener("click", displayMessage());
