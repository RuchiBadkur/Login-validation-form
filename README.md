# html-css-js-project

This is a [Login validation form]([https://ruchibadkur.github.io/JS-Mini-Project---1---JavaScript-Mini-Project---se2a8ehdj5fs/]) using html and css and javascript. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

-  **Login Validation Form - 
-  
### Links

- Live Site URL: [https://ruchibadkur.github.io/JS-Mini-Project---1---JavaScript-Mini-Project---se2a8ehdj5fs/](https://ruchibadkur.github.io/JS-Mini-Project---1---JavaScript-Mini-Project---se2a8ehdj5fs/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom propertie
- Javascript

### What I learned

My your major learnings while working through this project are:

```js
    function validate(){
    var mail = document.getElementById("maill");
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    var pass = document.getElementById("passs").value;
    if(mail=="" || !mail.value.match(validRegex)){
      document.getElementsByTagName("small")[0].innerHTML = "Please enter a valid e-mail address";
      return false;
    }
    if(pass =="" ){
      document.getElementsByTagName("small")[1].innerHTML = " You must enter password";
      return false;
   }
   else{
    document.getElementsByTagName("small")[0].innerHTML = "";
    document.getElementsByTagName("small")[1].innerHTML = "";
      
   }
}
```
```css
    display: grid;
    place-items: center center;
    text-align: center;
    background-size: cover;
    
    background-color: rgba(197, 173, 173, 0);
    backdrop-filter: blur(5px);
```

### Continued development

I want to continue focusing on web development technologies like html, css, bootstrap, javascript, react.js, node.js, express.js and database like mongodb etc. in future projects.

### Useful resources

- [foolishdeveloper.com](https://www.foolishdeveloper.com/) - This is an amazing website which helped me finally understand what glassmorphism effect is. I'd recommend it to anyone still learning basic concepts os html and css. I really liked these small projects which the website includes and will work on it in future.
- [Traversy Media](https://www.youtube.com/c/TraversyMedia) - Traversy Media features the best online web development and programming tutorials for all of the latest web technologies from the building blocks of HTML, CSS & JavaScript to frontend frameworks like React and Vue to backend technologies like Node.js etc.

## Author

- Website - [Ruchi Badkur](https://ruchibadkur.github.io/firstPortfolioProject_HtmlCss/)
- LinkedIn - [Ruchi badkur](https://www.linkedin.com/in/ruchi-badkur-96a1b5215/)
- Email - badkur622ruchi@gmail.com
