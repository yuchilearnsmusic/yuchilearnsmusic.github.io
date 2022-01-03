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


/* ----------------------- RESPONSIVE CARDS BEGINS --------------------------*/

console.log(width / height);

if (width / height < 0.61) {

    /* Title Card Begins */
    titleCardPortrait();

    titleCard.style.height = "75vh";

    
    titleImage.style.marginTop = "10vh";
    titleImage.style.width = "75vw";

    titleHeadingSmall.style.fontSize = "9vw";

    titleHeadingBig.style.fontSize = "12vw";
    titleHeadingBig.style.marginTop = "3vh";

    /* Title Card Ends */

    /* Big Card Begins */

    imgPicture.forEach((item) => {
        item.style.width = "65vw";
    })

    bigCard.forEach((item) => {
        item.style.height = "65vh";
    })

    thirdCard.forEach((item) => {
        item.style.height = "65vh";
    })

    imageFullCircle.forEach((item) => {
        item.style.width = "59vw";
    })

    description.forEach((item) => {
        item.style.fontSize = "3vw";
    })

    phone();

    /* Big Card Ends */

} 

// rest are new imageFullCircle 

//tablet width

else if (width / height < 0.7) {

    /* Title Card Begins */

    titleCardPortrait();
    titleCard.style.height = "80vh";

    titleImage.style.marginTop = "5vh";
    titleImage.style.width = "75vw";

    titleHeadingSmall.style.fontSize = "7vw";
    titleHeadingBig.style.fontSize = "9vw";


    /* Title Card Ends */

    imgPicture.forEach((item) => {
        item.style.width = "57vw";
    })

    description.forEach((item) => {
        item.style.fontSize = "3vw";
    })

    phone();

    titleOfCard.forEach((title) => {
        title.style.fontSize = "5vw";
    })

    imgIcon.forEach((item) => {
        item.style.width = "16vw";
    })

    imageFullCircle.forEach((item) => {
        item.style.width = "50vw";
    })
} 

/* for shorter tablets */

else if (width / height < 0.8){

    /* Title Card Begins */

    titleCardPortrait();

    titleCard.style.height = "90vh";
    
    titleImage.style.marginTop = "5vh";
    titleImage.style.width = "75vw";

    titleHeadingSmall.style.fontSize = "7vw";
    titleHeadingBig.style.fontSize = "9vw";


    /* Title Card Ends */

    imgPicture.forEach((item) => {
        item.style.width = "48vw";
    })

    description.forEach((item) => {
        item.style.fontSize = "3vw";
    })

    phone();

    titleOfCard.forEach((title) => {
        title.style.fontSize = "5vw";
    })

    imgIcon.forEach((item) => {
        item.style.width = "14vw";
    })

    imageFullCircle.forEach((item) => {
        item.style.width = "44vw";
    })
} 

/* computer dimensions */

else if (width / height < 1) {

    /* Title Card Begins */

    titleCardPortrait();

    titleCard.style.height = "90vh";
    
    titleImage.style.marginTop = "5vh";
    titleImage.style.width = "55vw";

    titleHeadingSmall.style.fontSize = "7vw";
    titleHeadingBig.style.fontSize = "9vw";


    /* Title Card Ends */

    imgPicture.forEach((item) => {
        item.style.width = "34vw";
    })

    phone();

    imgIcon.forEach((item) => {
        item.style.width = "13vw";
    })
    titleOfCard.forEach((title) => {
        title.style.fontSize = "5.5vw";
    })

    description.forEach((item) => {
        item.style.fontSize = "3vw";
    })

    imageFullCircle.forEach((item) => {
        item.style.width = "30vw";
    })

} 


else if (width / height < 1.3) {

    titleImage.style.width = "45vw";
    titleHeadingSmall.style.fontSize = "5vw";

    titleHeadingBig.style.fontSize = "5vw";


    phone();
    titleOfCard.forEach((title) => {
        title.style.fontSize = "4.5vw";
    })

    imgPicture.forEach((item) => {
        item.style.width = "28vw";
    })

    imageFullCircle.forEach((item) => {
        item.style.width = "26vw";
    })

    imgIcon.forEach((item) => {
        item.style.width = "9vw";
    })

    description.forEach((item) => {
        item.style.fontSize = "2.5vw";
    })

    /* copy this to larger media queries */

    smallCardTitle.forEach((title) => {
        title.style.fontSize = "2.5vw";
    })

    smallCardImage.forEach((item) => {
        item.style.width = "22vw";
    })

    thirdCard.forEach((item) => {
        item.style.height = "60vh";
        item.style.maxWidth = "42vw";
        item.style.borderRadius = "8vw";
        
    })

    card.forEach((item) => {
        item.style.padding = "3vw";
        item.style.borderRadius = "7vw";
    })
} 

else if (width / height < 1.4) {


    phone();
    titleOfCard.forEach((title) => {
        title.style.fontSize = "5vw";
    })

    imgPicture.forEach((item) => {
        item.style.width = "30vw";
    })

    imageFullCircle.forEach((item) => {
        item.style.width = "29vw";
    })

    imgIcon.forEach((item) => {
        item.style.width = "10vw";
    })

    description.forEach((item) => {
        item.style.fontSize = "3vw";
    })

    bigCard.forEach((item) => {
        item.style.height = "80vh";
    })

    /* small cards */

    smallCardTitle.forEach((title) => {
        title.style.fontSize = "2.5vw";
    })
    
    smallCardImage.forEach((item) => {
        item.style.width = "21vw";
    })

    thirdCard.forEach((item) => {
        item.style.height = "60vh";
        item.style.maxWidth = "42vw";
        item.style.borderRadius = "8vw";
        
    })

    card.forEach((item) => {
        item.style.padding = "3vw";
        item.style.borderRadius = "7vw";
    })

    smallCardIcon.forEach((item) => {
        item.style.width = "8vw";
    })


} 

else if (width / height < 1.71) {
    phone();
    titleOfCard.forEach((title) => {
        title.style.fontSize = "3.75vw";
    })

    imgPicture.forEach((item) => {
        item.style.width = "26vw";
    })

    imageFullCircle.forEach((item) => {
        item.style.width = "23vw";
    })

    description.forEach((item) => {
        item.style.fontSize = "2.5vw";
    })

    imgIcon.forEach((item) => {
        item.style.width = "8.5vw";
    })

    card.forEach((item) => {
        item.style.padding = "4vw";
        item.style.borderRadius = "8vw";
    })

    bigCard.forEach((item) => {
        item.style.height = "80vh";
    })

    /* small cards */

    smallCardTitle.forEach((title) => {
        title.style.fontSize = "2vw";
    })
    
    smallCardImage.forEach((item) => {
        item.style.width = "16vw";
    })

    thirdCard.forEach((item) => {
        item.style.height = "60vh";
        item.style.maxWidth = "42vw";
        item.style.borderRadius = "8vw";
        
    })

    card.forEach((item) => {
        item.style.padding = "3vw";
        item.style.borderRadius = "7vw";
    })

    smallCardIcon.forEach((item) => {
        item.style.width = "6vw";
    })

    smallTitleTop.forEach((title) => {
        title.style.paddingLeft = "0";        
    })
}

else if (width / height < 1.81) {
    phone();

    bigCard.forEach((item) => {
        item.style.height = "80vh";
    })

    titleOfCard.forEach((title) => {
        title.style.fontSize = "3.75vw";
    })

    imgPicture.forEach((item) => {
        item.style.width = "26.5vw";
    })

    imgIcon.forEach((item) => {
        item.style.width = "8.5vw";
    })

    imageFullCircle.forEach((item) => {
        item.style.width = "22vw";
    })

    description.forEach((item) => {
        item.style.fontSize = "2vw";
    })

    thirdCard.forEach((item) => {
        item.style.height = "60vh";
        item.style.maxWidth = "42vw";
        item.style.borderRadius = "8vw";
    })

    /* small cards */

    smallCardTitle.forEach((title) => {
        title.style.fontSize = "2vw";        
    })

    smallTitleTop.forEach((title) => {
        title.style.paddingLeft = "0";        
    })
    
    smallCardImage.forEach((item) => {
        item.style.width = "16vw";
    })

    thirdCard.forEach((item) => {
        item.style.height = "60vh";
        item.style.maxWidth = "42vw";
        item.style.borderRadius = "8vw";
        
    })

    card.forEach((item) => {
        item.style.padding = "3vw";
        item.style.borderRadius = "7vw";
    })

    smallCardIcon.forEach((item) => {
        item.style.width = "6vw";
    })
}

else if (width / height > 1.81) {
    phone();

    bigCard.forEach((item) => {
        item.style.height = "80vh";
    })

    titleOfCard.forEach((title) => {
        title.style.fontSize = "3.75vw";
    })

    imgPicture.forEach((item) => {
        item.style.width = "20vw";
    })

    imgIcon.forEach((item) => {
        item.style.width = "7vw";
    })

    imageFullCircle.forEach((item) => {
        item.style.width = "18vw";
    })

    description.forEach((item) => {
        item.style.fontSize = "1.5vw";
    })

    /* small cards */

    smallCardTitle.forEach((title) => {
        title.style.fontSize = "1.75vw";        
    })

    smallTitleTop.forEach((title) => {
        title.style.paddingLeft = "0";        
    })
    
    smallCardImage.forEach((item) => {
        item.style.width = "16vw";
    })

    thirdCard.forEach((item) => {
        item.style.height = "60vh";
        item.style.maxWidth = "42vw";
        item.style.borderRadius = "8vw";
        
    })

    card.forEach((item) => {
        item.style.padding = "2vw";
        item.style.borderRadius = "7vw";
    })

    thirdCard.forEach((item) => {
        item.style.height = "70vh";
        item.style.maxWidth = "42vw";
        item.style.borderRadius = "6vw";
    })

    smallCardIcon.forEach((item) => {
        item.style.width = "6vw";
    })
}



function titleCardPortrait() {
    titleCard.style.flexDirection = "column";

    titleTextContainer.style.display = "flex";
    titleTextContainer.style.flexDirection = "column";
    titleTextContainer.style.alignItems = "center";
    titleTextContainer.style.width = "100%";
    titleTextContainer.style.paddingTop = "3vh";

    titleHeadingBig.style.marginTop = "2vh";
    
    button.style.padding = "1.5vw 4vw";
    button.style.fontSize = "3vw";
    button.style.width = "40vw";
}


function phone(){
    titleOfCard.forEach((title) => {
        title.style.fontSize = "7vw";
    })

    titleTop.forEach((title) => {
        title.style.paddingLeft = "3vw";
    })

    card.forEach((item) => {
        item.style.padding = "5vw";
        item.style.borderRadius = "12vw";
    })

    imgIcon.forEach((item) => {
        item.style.width = "20vw";
    })
}

/* ----------------------- RESPONSIVE CARDS ENDS --------------------------*/