// VARIABLES

// categories

let category1 = document.querySelector(".category1"); // compression
let category2 = document.querySelector(".category2"); // eq
let category3 = document.querySelector(".category3"); // reverb

let compressionCourses = document.querySelector(".compression-courses");

// when a link is active

let active = document.querySelector("active");
let whiteFont = document.querySelector("white-font");

let moduleTitle1 = document.querySelector("category-link1");
let moduleTitle2 = document.querySelector("category-link2");
let moduleTitle3 = document.querySelector("category-link3");

// add white font to category-links when active !!!

// navigation items

let menu = document.querySelector(".img-menu"); // hamburger menu
let learnIcon = document.querySelector(".learn-icon"); 

let closeMobile = document.querySelector(".close-mobile");
let closeComputer = document.querySelector(".close-computer");

// learn pop-up

let learn = document.querySelector(".learn");

// content of the page

let titleCard = document.querySelector(".title-card")
let content = document.querySelector(".content")
let footer = document.querySelector(".footer")

// hide

let hide = document.querySelector(".hide")

/* ----------------------- OPEN AND CLOSE MENU BEGINS -----------------------*/

// for mobile

menu.onclick = function(){
    menu.style.display = "none";
    closeMobile.style.display = "block";
    learn.style.display = "flex";

    // hide content of the page

    titleCard.style.display = "none"
    content.style.display = "none"
    footer.style.display = "none"
}

closeMobile.onclick = function(){
    menu.style.display = "block";
    closeMobile.style.display = "none";
    learn.style.display = "none";

    titleCard.style.display = "flex";
    content.style.display = "flex";
    footer.style.display = "flex";
}

// for computer

learnIcon.onclick = function(){
    learnIcon.style.display = "none";
    closeComputer.style.display = "block";
    learn.style.display = "flex";

    // hide content of the page

    titleCard.style.display = "none"
    content.style.display = "none"
    footer.style.display = "none"
}

closeComputer.onclick = function(){
    learnIcon.style.display = "block";
    closeComputer.style.display = "none";
    learn.style.display = "none";

    titleCard.style.display = "flex";
    content.style.display = "flex";
    footer.style.display = "flex";
}

window.addEventListener('resize', function() {
    if (window.innerWidth / window.innerHeight < 1) {
        closeComputer.style.display = "none"
        learnIcon.style.display = "none"
    } else {
        closeComputer.style.display = "none"
        learnIcon.style.display = "block"
    }
})



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

console.log(window.innerWidth / window.innerHeight)