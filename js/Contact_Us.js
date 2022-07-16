"use strict";

let navTop = document.querySelector(".navTop");
let scollUp = document.querySelector(".scrollUp");

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        navTop.style.height = "0px";
        scollUp.style.opacity = "1";
    }
    else if (document.body.scrollTop < 1 || document.documentElement.scrollTop < 1) {
        navTop.style.height = "30px";
        scollUp.style.opacity = "0";
    }
});

scollUp.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});