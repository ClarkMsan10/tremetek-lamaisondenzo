var lastScroll = window.scrollY;

var topbar =  document.querySelector(".topbar");
var header = document.querySelector("header");
var banner = document.querySelector(".banner")

console.log(topbar);
window.onscroll = function(){
    var currentScrollpos = window.scrollY;
    if(currentScrollpos < 10 ){
        // topbar.style.top = "0";
        header.classList.remove("scroll")
        banner.classList.remove("scroll")
    }
    else{
        // topbar.style.top = "-400px";
        header.classList.add("scroll")
        banner.classList.add("scroll")
    }
    
    // navbar.classList.toggle("scrool", window.scrollY > 10);
}