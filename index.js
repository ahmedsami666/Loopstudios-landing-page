var hamburger = document.querySelectorAll(".hamburger")[0];
var menu = document.querySelectorAll(".menu")[0];
var close = document.querySelectorAll(".close")[0];
var box1 = document.querySelectorAll(".box1")[0];
var header = document.querySelectorAll(".header")[0];

hamburger.addEventListener("click", function(){
    menu.classList.add("menu2");
    hamburger.classList.add("hidden");
    close.classList.add("unhidden");
    box1.classList.add("box1m");
    header.classList.add("header2");
});