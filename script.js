// navigation boxes
let navElem1 = document.querySelector(".nav-elem1"); // compression
let navElem2 = document.querySelector(".nav-elem2"); // eq
let navElem3 = document.querySelector(".nav-elem3"); // reverb

let navElem = [navElem1, navElem2, navElem3];

let active = document.querySelector("active")

let compression = document.querySelector(".compression-courses");

let hide = document.querySelector(".hide"); // hide div

let menu = document.querySelector(".menu"); // hamburger menu

let close = document.querySelector(".close"); // close menu button

let navigation = document.querySelector(".mobile-nav") // the navigation page

let title = document.querySelector(".title-card")

let content = document.querySelector(".content")

let footer = document.querySelector(".footer")


// navElem3.addEventListener("click", console.log("hi"))

// equivalent of 'onclick'

// for (let elem in navElem){
//     elem.addEventListener("click", addActive(elem));
// }

// function addActive(elem){
//     console.log("hi");
//     // remove active from the other boxes
//     for (i = 0; i < navElem.length; i++){
//         navElem[i].classList.remove("active")
//     }

//     // add active to the chosen box
//     elem.classList.add("active");
// }

menu.onclick = function(){
    menu.style.display = "none";
    title.style.display = "none";
    content.style.display = "none";
    footer.style.display = "none";
    close.style.display = "block";
    navigation.style.display = "flex";

}

// UP TO HERE

close.onclick = function(){
    navigation.style.display = "none";
    close.style.display = "none";
    menu.style.display = "block";
    title.style.display = "flex";
    content.style.display = "flex";
    footer.style.display = "flex";
}


// NAVIGATION BEGINS

navElem1.onclick = function(){
    removeActive();
    navElem1.classList.add("active");
    compression.classList.remove("hide")
}
navElem2.onclick = function(){
    removeActive();
    compression.classList.add("hide");
    navElem2.classList.add("active");
}
navElem3.onclick = function(){
    removeActive();
    navElem3.classList.add("active");
}


function removeActive() {
    navElem1.classList.remove("active");
    navElem2.classList.remove("active");
    navElem3.classList.remove("active");
}

// NAVIGATION ENDS
