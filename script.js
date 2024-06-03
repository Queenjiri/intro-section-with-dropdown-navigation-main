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

const navOpen = document.querySelector(".open-outline");
const navClose = document.querySelector(".close-outline");

const navHeader = document.querySelector(".nav-header");

navClose.addEventListener("click", function () {
  navHeader.classList.remove("nav-header");
});

navOpen.addEventListener("click", function () {
  navHeader.classList.add("nav-header");
});
