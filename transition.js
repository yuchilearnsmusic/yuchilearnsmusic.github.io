// JAVASCRIPT PAGE TRANSITIONS

//as soon as the page has loaded, we will call this function
window.onload = () => {

    // DEFINING VARIABLES 
    
    /* document.querySelector allows us to access classes/ids from HTML and CSS.
    Here we are selecting the 'transition' div, and the navigation links*/
    const transition_el = document.querySelector('.transition');
    const anchors = document.querySelectorAll('.page-transition-link');

    // when the page has loaded, we want the transition div to go away
    setTimeout ( () => {
        transition_el.classList.remove('is-active');
    }, 500);

    /* when we click on a link, it immediately goes to the other page. We want to delay
    this process for our page transition to work. Therefore, we prevent the normal link
    behaviour.*/
    for (let i=0; i < anchors.length; i++) {
        const anchor = anchors[i];

        anchor.addEventListener('click', e => {
            e.preventDefault(); // when you now click on a link, it will not take you to another page

            let target = e.target.href; //stores the destination of the link

            transition_el.classList.add('is-active'); //this overlays the black transition div on top of our page

            /*set timeout for the same time that the transition animation lasts for (0.5s). Therefore, as 
            soon as the 500ms is over (and the black transition div has fully covered the screen), 
            we will be taken to the destination of the link*/
            setTimeout(() => {
                window.location.href = target;
            }, 500); 
        });
    }
};