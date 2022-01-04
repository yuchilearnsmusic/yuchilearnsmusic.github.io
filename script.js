// VARIABLES

let width = window.innerWidth;
let height = window.innerHeight;

// title card


let titleTextContainer = document.querySelector(".title-text");
let titleHeadingSmall = document.querySelector(".title-heading-small");
let titleHeadingBig = document.querySelector(".title-heading-big");
let titleImage = document.querySelector(".img-title");
let button = document.querySelector(".button");



// cards
let bigCard = document.querySelectorAll(".big-card");
let card = document.querySelectorAll(".card");
let imgIcon = document.querySelectorAll(".img-icon");
let smallCardIcon = document.querySelectorAll(".small-card-icon");
let imgPicture = document.querySelectorAll(".img-picture");
let smallCardImage = document.querySelectorAll(".small-card-image");
let titleTop = document.querySelectorAll(".title-top");
let imageFullCircle = document.querySelectorAll(".img-full-circle");
let description = document.querySelectorAll(".description-text");

let titleOfCard = document.querySelectorAll(".title-of-card");
let smallTitleTop = document.querySelectorAll(".small-title-top");
let smallCardTitle = document.querySelectorAll(".small-card-title");

let thirdCard = document.querySelectorAll(".third-card");
let bottomImageCard = document.querySelectorAll(".bottom-image-card");

// footer
let footerMessage = document.querySelectorAll(".footer-message")



// categories

let category1 = document.querySelector(".category1"); // compression
let category2 = document.querySelector(".category2"); // eq
let category3 = document.querySelector(".category3"); // reverb

let active = document.querySelector("active")

let compressionCourses = document.querySelector(".compression-courses");

// navigation items

let menu = document.querySelector(".img-menu"); // hamburger menu
let close = document.querySelector(".img-close"); // hamburger menu

// learn pop-up

let learn = document.querySelector(".learn");

// content of the page

let titleCard = document.querySelector(".title-card")
let content = document.querySelector(".content")
let footer = document.querySelector(".footer")

// hide

let hide = document.querySelector(".hide")

/* ----------------------- OPEN AND CLOSE MENU BEGINS -----------------------*/

menu.onclick = function(){
    menu.classList.add("hide");
    close.classList.remove("hide");
    learn.classList.remove("hide");

    // hide content of the page

    // titleCard.style.display = "none"
    // content.style.display = "none"
    // footer.style.display = "none"
}

close.onclick = function(){
    menu.classList.remove("hide");
    close.classList.add("hide");
    learn.classList.add("hide");

    // titleCard.style.display = "flex";
    // content.style.display = "flex";
    // footer.style.display = "flex";
}

/* ----------------------- OPEN AND CLOSE MENU ENDS -----------------------*/


/* ----------------------- SELECT CATEGORIES BEGINS -----------------------*/

category1.onclick = function(){
    removeActive();
    category1.classList.add("active");
    compressionCourses.classList.remove("hide")
}
category2.onclick = function(){
    removeActive();
    compressionCourses.classList.add("hide");
    category2.classList.add("active");
}
category3.onclick = function(){
    removeActive();
    category3.classList.add("active");
}


function removeActive() {
    category1.classList.remove("active");
    category2.classList.remove("active");
    category3.classList.remove("active");
}

/* ----------------------- SELECT CATEGORIES ENDS --------------------------*/
