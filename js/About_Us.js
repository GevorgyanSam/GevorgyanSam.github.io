"use strict";

let navTop = document.querySelector(".navTop");
let scollUp = document.querySelector(".scrollUp");
let paralaxParentChild = document.querySelector(".paralaxParentChild");
let teamParentChild = document.querySelector(".teamParentChild");
let footerParentChild = document.querySelector(".footerParentChild");
let footerBottomHeader = document.querySelector(".footerBottomHeader");

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

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        paralaxParentChild.style.display = "block";
    }
});

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
        teamParentChild.style.display = "block";
    }
});

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {
        footerParentChild.style.display = "flex";
    }
});

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 4010 || document.documentElement.scrollTop > 1410) {
        footerBottomHeader.style.display = "block";
    }
});