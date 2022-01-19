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

//keywords are the module names
// let keywords = ["compression",
//     "co", "cooo", "com",
//     "ho", "cop", "cot"
//     ]

// let displayAll = false;

// function autocomplete(inp, arr) {
//     /*the autocomplete function takes two arguments,
//     the text field element and an array of possible autocompleted values:*/
//     var currentFocus;
//     /*execute a function when someone writes in the text field:*/
//     inp.addEventListener("input", function(e) {
//         var a, b, i, val = this.value;
//         /*close any already open lists of autocompleted values*/
//         closeAllLists();
//         if (!val) { return false;}
//         currentFocus = -1;
//         /*create a DIV element that will contain the items (values):*/
//         a = document.createElement("DIV");
//         a.setAttribute("id", this.id + "autocomplete-list");
//         a.setAttribute("class", "autocomplete-items");
        
//         /*append the DIV element as a child of the autocomplete container:*/
//         this.parentNode.appendChild(a);
//         /*for each item in the array...*/
//         for (i = 0; i < arr.length; i++) {
//             if(a.childElementCount > 3 && !displayAll){
//                 b = document.createElement("DIV");
//                 b.innerHTML = "...";
//                 b.addEventListener("click", function(e) {
//                     displayAll = true;
//                     console.log("display");
//                     autocomplete(document.getElementById("myInput"), keywords);
//                     });
//                 a.appendChild(b);
//                 break;
//             }
//             /*check if the item starts with the same letters as the text field value:*/
//             if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
//                 /*create a DIV element for each matching element:*/
//                 b = document.createElement("DIV");
//                 /*make the matching letters bold:*/
//                 b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
//                 b.innerHTML += arr[i].substr(val.length);
//                 /*insert a input field that will hold the current array item's value:*/
//                 b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
//                 /*execute a function when someone clicks on the item value (DIV element):*/
//                 b.addEventListener("click", function(e) {
                    
//                     /*insert the value for the autocomplete text field:*/
//                     inp.value = this.getElementsByTagName("input")[0].value;
//                     //update the modules on screen
//                     filterModules();
//                     /*close the list of autocompleted values,
//                     (or any other open lists of autocompleted values:*/
//                     closeAllLists();
                    
                    
//                     });
//                 a.appendChild(b);
//             }
//         }
//         if(a.childElementCount==0){
//             document.getElementById(head).innerHTML = "ko";
//         }
//         else{
//             document.getElementById(head).innerHTML = "Try";
//         }
//     });
//     /*execute a function presses a key on the keyboard:*/
//     inp.addEventListener("keydown", function(e) {
//         var x = document.getElementById(this.id + "autocomplete-list");
//         if (x) x = x.getElementsByTagName("div");
//         if (e.keyCode == 40) {
//             /*If the arrow DOWN key is pressed,
//             increase the currentFocus variable:*/
//             currentFocus++;
//             /*and and make the current item more visible:*/
//             addActive(x);
//         } else if (e.keyCode == 38) { //up
//             /*If the arrow UP key is pressed,
//             decrease the currentFocus variable:*/
//             currentFocus--;
//             /*and make the current item more visible:*/
//             addActive(x);
//         } else if (e.keyCode == 13) {
//             /*If the ENTER key is pressed, prevent the form from being submitted,*/
//             e.preventDefault();
//             if (currentFocus > -1) {
//             /*and simulate a click on the "active" item:*/
//             if (x) x[currentFocus].click();
//             }
//         }
//     });
//     function addActive(x) {
//         /*a function to classify an item as "active":*/
//         if (!x) return false;
//         /*start by removing the "active" class on all items:*/
//         removeActive(x);
//         if (currentFocus >= x.length) currentFocus = 0;
//         if (currentFocus < 0) currentFocus = (x.length - 1);
//         /*add class "autocomplete-active":*/
//         x[currentFocus].classList.add("autocomplete-active");
//     }
//     function removeActive(x) {
//         /*a function to remove the "active" class from all autocomplete items:*/
//         for (var i = 0; i < x.length; i++) {
//         x[i].classList.remove("autocomplete-active");
//         }
//     }
//     function closeAllLists(elmnt) {
//         /*close all autocomplete lists in the document,
//         except the one passed as an argument:*/
//         var x = document.getElementsByClassName("autocomplete-items");
//         for (var i = 0; i < x.length; i++) {
//         if (elmnt != x[i] && elmnt != inp) {
//         x[i].parentNode.removeChild(x[i]);
//         }
//     }
//     }
//     /*execute a function when someone clicks in the document:*/
//     document.addEventListener("click", function (e) {

//         closeAllLists(e.target);
//     });
// }


// function filterModules() {
//     // Declare variables
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById('myInput');
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName('li');
  
//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < li.length; i++) {
//       a = li[i].getElementsByTagName("a")[0];
//       txtValue = a.textContent || a.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         li[i].style.display = "";
//       } else {
//         li[i].style.display = "none";
//       }
//     }
// }
// autocomplete(document.getElementById("myInput"), keywords)