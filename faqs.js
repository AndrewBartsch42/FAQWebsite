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



const toggleVisibility = evt => {
    const userSelect = evt.currentTarget;
    console.log(userSelect.id)

    let allClosed = false; // don't know if i need this

    for (h2 in h2s){
        if (h2 === userSelect) { // this logic is wonk
            // invert the state of the element
            // update the image and alt text to the correct 
        }


    }
}

document.addEventListener("DOMContentLoaded", () =>{

    for (let h2 of h2s){
        h2.addEventListener("click", toggleVisibility);
    }

});


