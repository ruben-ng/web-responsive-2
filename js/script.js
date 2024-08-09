
// Scroll Hero page
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const slide = document.querySelectorAll(".content");
const contents = document.querySelectorAll(".content");

let currentIndex = 0;

var sliderNav = function(manual){
    btns.forEach((btn) =>{
        btn.classList.remove("active");
    });
    slides.forEach((slide) =>{
        slide.classList.remove("active");
    });
    contents.forEach((content) =>{
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");    
}

btns.forEach((btn, i)=>{
    btn.addEventListener("click", ()=>{
        sliderNav(i);
    });
});

const autoSlide = () => {
    currentIndex = (currentIndex + 1) % btns.length; 
    sliderNav(currentIndex);
    console.log(currentIndex);
}

setInterval(autoSlide, 4000);



// Auto animate scroll
const logo = document.querySelector(".logo").cloneNode(true);

document.querySelector(".logo-container").appendChild(logo);



   
