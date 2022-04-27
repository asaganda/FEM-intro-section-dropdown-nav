# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Live Site URL: https://illustrious-cheesecake-c452e2.netlify.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Javascript


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

I solidifed my learning on how to toggle classes for displaying the dropdown lists from the navbar using vanilla javascript
Understood a bit more on how forEach javascript methods works while leveraging a callback function
Also, i used es6 arrow functions since that's the latest javascript syntax 

The segment of code below allows the user to show a menu dropdown list while also alternating between up and down arrow images:

```js
navDropdownOptions.forEach((navOption, index) => {
  navOption.addEventListener("click", () => {
    listDropdownOptions[index].classList.toggle("list-active")
    downArrows[index].classList.toggle("nav-option-arrow-hide");
    upArrows[index].classList.toggle("nav-option-arrow-up-active");
  })
})
```

### Continued development

I want to keep practicing on the forEach method and get comfortable using arrow functions

## Author

- Website - http://www.saganda.us/