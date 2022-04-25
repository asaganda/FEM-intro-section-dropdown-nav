// opening and closing of menu
const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".general");
const menuBg = document.querySelector(".menu-background");
const menuClose = document.querySelector(".menu-icon-close");
// console.log(menuIcon);

menuIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("mobile-show");
  menuBg.classList.toggle("menu-background-on");
  menuClose.classList.toggle("menu-icon-close-show");
  
})

menuClose.addEventListener("click", () => {
  mobileMenu.classList.toggle("mobile-show");
  menuBg.classList.toggle("menu-background-on");
  menuClose.classList.toggle("menu-icon-close-show");
})

// open and close of menu list independently
const navDropdownOptions = document.querySelectorAll(".nav-option");
const listDropdownOptions = document.querySelectorAll(".nav-option ul");
const downArrows = document.querySelectorAll(".nav-option-arrow");
const upArrows = document.querySelectorAll(".nav-option-arrow-up");
console.log(upArrows);
navDropdownOptions.forEach((navOption, index) => {
  navOption.addEventListener("click", () => {
    listDropdownOptions[index].classList.toggle("list-active")
    downArrows[index].classList.toggle("nav-option-arrow-hide");
    upArrows[index].classList.toggle("nav-option-arrow-up-active");
  })
})


// console.log(navDropdown);