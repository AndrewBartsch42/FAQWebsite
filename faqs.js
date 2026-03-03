"use strict";

/*
 * Global Variables
 * faqImage: main faq image element 
 * faqImageORigSrc: Main FAQ image's default 'src'
 * faqImageOrigAt1: Main FAQ image's alt text
 * h2s: all h2 elements inside the FAQ section in the HTML
 */
const faqImage = document.getElementById("faq_image");
const faqImageOrigSrc = faqImage.getAttribute("src");
const faqImageOrigAtl = faqImage.getAttribute("alt");
const h2s = document.querySelectorAll("#faqs h2");


console.log(h2s);


const toggleVisibility = evt => {
    const userSelect = evt.currentTarget;
    const div = userSelect.nextElementSibling;
    userSelect.classList.toggle("minus");  // this toggles the state of the h2 tag
    div.classList.toggle("open"); // this toggles the state of the div tag
    faqImage.setAttribute("src", userSelect.getAttribute("src"));
    evt.preventDefault();
}

document.addEventListener("DOMContentLoaded", () =>{

    for (let h2 of h2s){
        h2.addEventListener("click", toggleVisibility);
    }

});


