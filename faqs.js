"use strict";
// Author: Andrew Bartsch
// Github: https://github.com/AndrewBartsch42/FAQWebsite
// Program Name: FAQWebsite
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


/**
 *  toggles the visibility of the h2 and div elements by taking in the h2 that the user clicked on
 * @param {*} evt 
 */
const toggleVisibility = evt => {
    var allClosed = false
    const userSelect = evt.currentTarget;
    const div = userSelect.nextElementSibling;
    for (let h2 of h2s){
        if (h2 == userSelect){
            if (h2.className == "minus"){
                allClosed = true;
            }
            h2.classList.toggle("minus");
            div.classList.toggle("open");
            faqImage.setAttribute("src", h2.getAttribute("src"));
            faqImage.setAttribute("alt", h2.getAttribute("alt"));
        }
        else {
            h2.classList.remove("minus");
            h2.nextElementSibling.classList.remove("open");
        }
    }
    if(allClosed){
        faqImage.setAttribute("src", faqImageOrigSrc);
        faqImage.setAttribute("alt", faqImageOrigAtl);
    }
    evt.preventDefault();
}
/**
 * adds the event listeners to the h2 elements so they call the toggle visibility when clicked on 
 */
document.addEventListener("DOMContentLoaded", () =>{

    for (let h2 of h2s){
        h2.addEventListener("click", toggleVisibility);
    }

});


