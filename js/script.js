"use strict";

let navTop = document.querySelector(".navTop");
let scollUp = document.querySelector(".scrollUp");
let hurryUpContent = document.querySelector(".hurryUpContent");
let productParentChild = document.querySelector(".productParentChild");
let paralaxParentChild = document.querySelector(".paralaxParentChild");
let productParentChild2 = document.querySelector(".productParentChild2");
let teamParentChild = document.querySelector(".teamParentChild");
let latestParentChild = document.querySelector(".latestParentChild");
let footerParentChild = document.querySelector(".footerParentChild");
let footerBottomHeader = document.querySelector(".footerBottomHeader");

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        navTop.style.height = "0px";
        scollUp.style.opacity = "1";
    }
    else if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        hurryUpContent.style.display = "none";
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
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        hurryUpContent.style.display = "block";
    }
});

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
        productParentChild.style.display = "block";
    }
});

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 1380 || document.documentElement.scrollTop > 1380) {
        paralaxParentChild.style.display = "block";
    }
});

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1700) {
        productParentChild2.style.display = "block";
    }
});

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 2400 || document.documentElement.scrollTop > 2400) {
        teamParentChild.style.display = "block";
    }
});

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 3100 || document.documentElement.scrollTop > 3100) {
        latestParentChild.style.display = "block";
    }
});

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 4000 || document.documentElement.scrollTop > 4000) {
        footerParentChild.style.display = "flex";
    }
});

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 4010 || document.documentElement.scrollTop > 4010) {
        footerBottomHeader.style.display = "block";
    }
});