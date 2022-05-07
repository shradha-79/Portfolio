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



//Contact Form 
// const form = document.querySelector("form"),
// statusTxt = form.querySelector(".submit span");
// form.onsubmit = (e)=>{
//   e.preventDefault();
//   statusTxt.style.color = "#0D6EFD";
//   statusTxt.style.display = "block";
//   statusTxt.innerText = "Sending your message...";
//   form.classList.add("disabled");

//   let xhr = new XMLHttpRequest();
//   xhr.open("POST", "contact-form.php", true);
//   xhr.onload = ()=>{
//     if(xhr.readyState == 4 && xhr.status == 200){
//       let response = xhr.response;
//       if(response.indexOf("required") != -1 || response.indexOf("valid") != -1 || response.indexOf("failed") != -1){
//         statusTxt.style.color = "red";
//       }else{
//         form.reset();
//         setTimeout(()=>{
//           statusTxt.style.display = "none";
//         }, 3000);
//       }
//       statusTxt.innerText = response;
//       form.classList.remove("disabled");
//     }
//   }
//   let formData = new FormData(form);
//   xhr.send(formData);
// }
