$(document).ready(function(){

    $('.menu-btn').click(function(){
        $('.navbar ul').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

// typing anuimation
var typed  = new Typed(".typing", {
    strings: ["coder","student"],
    typedSpeed: 100,
    backSpeed: 60,
    loop: true,
});

function takevalue()
{
    var name=document.getElementById("name").ariaValueMax;
    var email=document.getElementById("email").ariaValueMax;
    var msg=document.getElementById("msg").ariaValueMax;
    document.write("NAME: "+name);
    document.write("EMAIL: "+email);
    document.write("MSG: "+msg);
}

