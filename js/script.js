
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
        sliderNav(i) 
    });
});

const autoSlide = () => {
    currentIndex = (currentIndex + 1) % btns.length; 
    sliderNav(currentIndex);
}

setInterval(autoSlide, 5000);



// Auto animate scroll
const logo = document.querySelector(".logo").cloneNode(true);

document.querySelector(".logo-container").appendChild(logo);


// Button chat
    document.addEventListener('DOMContentLoaded', function () {
        const trigger = document.getElementById('popup_trigger');
        const container = document.getElementById('popup_container');

        trigger.addEventListener('click', function () {
            // Toggle visibility by adding/removing the 'hidden' class
            container.classList.toggle('hidden');
        });
        // Optional: Click outside the popup to close it
        document.addEventListener('click', function (event) {
            if (!trigger.contains(event.target) && !container.contains(event.target)) {
                container.classList.add('hidden');
            }
        });
    });
