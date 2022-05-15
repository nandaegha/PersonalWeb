/*--- navigation menu ---*/

 (() =>{

    const hamburgerBtn = document.querySelector(".hamburger-btn"),
    navMenu = document.querySelector(".nav-menu"),
    closeNavBtn = navMenu.querySelector(".close-nav-menu");

    hamburgerBtn.addEventListener("click", showNavMenu);
    closeNavBtn.addEventListener("click", hideNavMenu);

    function showNavMenu(){
        navMenu.classList.add("open");
        bodyScrollingToggle();
    }
    function hideNavMenu(){
        navMenu.classList.remove("open");
        fadeOutEffect();
        bodyScrollingToggle();
    }
    function fadeOutEffect(){
        document.querySelector(".fade-out-effect").classList.add("active");
        setTimeout(() =>{
          document.querySelector(".fade-out-effect").classList.remove("active");
        },300)
    }

    document.addEventListener("click", (event) =>{
        if(event.target.classList.contains("tab-item")){
            if(event.target.hash !==""){
                event.preventDefault();
                const hash = event.target.hash;
                document.querySelector(".section.active").classList.add("hide");
                document.querySelector(".section.active").classList.remove("active");
                document.querySelector("hash").classList.add("active");
                document.querySelector("hash").classList.remove("hide");

            }
        }

    })

 })(); 

/*--- about section tabs ---*/

(() =>{
   const aboutSection = document.querySelector(".about-section"),
   tabsContainer = document.querySelector(".about-tabs");
   
   tabsContainer.addEventListener("click", (event) =>{
/* if event.target contains 'tab-item' class and not contains 'active' class */
       if(event.target.classList.contains("tab-item") &&
       !event.target.classList.contains("active")){
        const target = event.target.getAttribute("data-target");
        // deactive existing active 'tab-item'
        tabsContainer.querySelector(".active").classList.remove("outer-shadow"
        ,"active");
        // activate new 'tab-item'
       event.target.classList.add("active","outer-shadow");
       // deactive existing active 'tab-content'
       aboutSection.querySelector(".tab-content.active").classList.remove
       ("active");
       // activate new 'tab-content'
       aboutSection.querySelector(target).classList.add("active");
       }
   })
})();

/*--- animasi canvas ---*/

var canvas = document.getElementById('canvas');
var ctx =canvas.getContext('2d');
canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

var x=60, y=81;
var x0=30, y0=300;
var x1=400, y1=81;
var x2=400, y2=300;

function animasi(){
    ctx.save();
    ctx.fillStyle="rgb(105, 213, 20)";
    ctx.fillRect(x,80,4,4);
    x++;
    ctx.save();
    ctx.fillStyle="rgb(105, 213, 20)";
    ctx.fillRect(x,300,4,4);
    x++;
    ctx.save();
    ctx.fillStyle="rgb(105, 213, 20)";
    ctx.fillRect(x0,y0,4,4);
    x0++;
    y0--;
    ctx.save();
    ctx.fillStyle="rgb(105, 213, 20)";
    ctx.fillRect(x1,y1,4,4);
    x1--;
    y1++;
    ctx.save();
    ctx.fillStyle="rgb(105, 213, 20)";
    ctx.fillRect(x2,y2,4,4);
    x2--;
    y2--;
    ctx.save();
    ctx.fillStyle="rgb(105, 213, 20)";
    ctx.fillRect(400,y2,4,4);
    y2--;
    ctx.save();
    ctx.fillStyle="rgb(105, 213, 20)";
    ctx.fillRect(200,y2,4,4);
    y2++;
    ctx.restore();
}

var interval = setInterval(animasi,30);

ctx.canvas.addEventListener('click', function(event){
    clearInterval(interval);
});

/*--- testimonial slider ---*/

(() =>{

    const sliderContainer = document.querySelector(".testi-slider-container"),
    slides = sliderContainer.querySelectorAll(".testi-item"),
    slideWidth = sliderContainer.offsetWidth,
    prevBtn = document.querySelector(".testi-slider-nav .prev"),
    nextBtn = document.querySelector(".testi-slider-nav .next");
    activeSlide = sliderContainer.querySelector(".testi-item.active");
    let slideIndex = Array.from(activeSlide.parentElement.children)
    .indexOf(activeSlide);

    // set width of all slides
    slides.forEach((slide) =>{
        slide.style.width = slideWidth + "px";
    })
    // set width of sliderContainer
    sliderContainer.style.width = slideWidth * slides.length + "px";

    nextBtn.addEventListener("click", () =>{
        if(slideIndex === slides.length-1){
            slideIndex = 0;
        }
        else{
            slideIndex++;
        }
        slider();
    })

    prevBtn.addEventListener("click", () =>{
        if(slideIndex === 0){
            slideIndex = slides.length-1;
        }
        else{
            slideIndex--;
        }
        slider();
    })

    function slider(){
        // deactivate existing active slides
        sliderContainer.querySelector(".testi-item.active").classList
        .remove("active");
        //activate new slide
        slides[slideIndex].classList.add("active");
        sliderContainer.style.marginLeft = - (slideWidth * slideIndex) + "px";
    }
    slider();

 })();

 /*--- hide all section except active ---*/

 (() =>{

    const sections = document.querySelectorAll(".section");
    sections.forEach((section) =>{
        if(!section.classList.contains("active")){
          section.classList.add("hide");
          
        } 
    })

 })();