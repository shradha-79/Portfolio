$(document).ready(function(){

    $('.menu-btn').click(function(){
        $('.navbar ul').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

// typing anuimation
var typed  = new Typed(".typing", {
    strings: ["coder"],
    typedSpeed: 100,
    backSpeed: 60,
    loop: true,
});