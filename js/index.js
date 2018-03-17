AOS.init();

window.onscroll = () => scrollNav();

function scrollToDiv(id){
    document.getElementById(id).scrollIntoView({block: 'start', behavior: 'smooth'});
}

function scrollNav(){
    // if the scroll bar is below 20px, show the navbar.
    // dirty ternary here because I liked how it looked.
    // preemptive minification (fewer chars & loc)
    document.getElementById('nav').style.top = 
        (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ?
        '0px' : '-60px';
        
}


