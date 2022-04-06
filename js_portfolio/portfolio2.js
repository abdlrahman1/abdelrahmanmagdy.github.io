
let con_menu = document.getElementById("con_menu");
let x = document.getElementById("x");
let mod =   document.getElementById("my_model");
function menu(){


    document.querySelector('.menu').classList.toggle('show');
    mod.style.display = "block";

  x.onclick = function(){

    mod.style.display="none";
    document.querySelector('.menu').classList.toggle('show');
  }
}



window.onclick = function(event) {
  if (event.target == mod) {
    mod.style.display = "none";
    document.querySelector('.menu').classList.toggle('show');
  }
}
var slideIndex = 0;
showSlides();
var slides,dots;

function showSlides() {
    var i;
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 8 seconds
}

function plusSlides(position) {
    slideIndex +=position;
    if (slideIndex> slides.length) {slideIndex = 1}
    else if(slideIndex<1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function currentSlide(index) {
    if (index> slides.length) {index = 1}
    else if(index<1){index = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index-1].style.display = "block";
    dots[index-1].className += " active";
}



scroll_btn = document.querySelector(".scroll_btn");


window.onscroll= function(){

if(this.scrollY>=1000){

    scroll_btn.classList.add("show");

}
else{

    scroll_btn.classList.remove("show");
}


}

scroll_btn.onclick=function(){

window.scrollTo({

top:0,
behavior:"smooth",
});

}



function services(){


window.scrollTo({

    top:500,
    behavior:'smooth',
});

}


function about(){


window.scrollTo({

    top:2350,
    behavior:'smooth',
});

}

function contact(){


window.scrollTo({

    top:3000,
    behavior:'smooth',
});

}

let home_menu = document.getElementById("home_menu");
let about_menu = document.getElementById("about_menu");
let serv_menu = document.getElementById("serv_menu");
let contact_menu = document.getElementById("contact_menu");

about_menu.onclick = function(){

    window.scrollTo({

top:4200,
behavior:'smooth',
});

document.querySelector('.menu').classList.toggle('show');
mod.style.display = "none";
}
serv_menu.onclick = function(){

window.scrollTo({

top:300,
behavior:'smooth',
});

document.querySelector('.menu').classList.toggle('show');
mod.style.display = "none";
}

contact_menu.onclick = function(){

window.scrollTo({

top:5900,
behavior:'smooth',
});
mod.style.display = "none";
document.querySelector('.menu').classList.toggle('show');

}