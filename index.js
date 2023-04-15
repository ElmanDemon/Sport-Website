// Navbar start
const navMenu=document.querySelector(".nav-menu")
const menuBar=document.querySelector(".menu-bar")
const closeBtn=document.querySelector(".close-btn")

menuBar.addEventListener("click", ()=>{
    navMenu.style.right="0"
})

closeBtn.addEventListener("click", ()=>{
    navMenu.style.right="-220px"
})

// Navbar end

// Slider start

let sliderIndex=1

function nextSlider(n){
    showSlider(sliderIndex += n)
}

setInterval(()=>{
    showSlider(sliderIndex +=1)
},4000)

function dotSlider(n){
    showSlider(sliderIndex = n)
}

function showSlider(n){
const slider=document.querySelectorAll(".slider-wrapper")
const dots=document.querySelectorAll(".slider-dot")

if(n>slider.length){
    sliderIndex=1
}

if(n<1){
    sliderIndex=slider.length
}

for(let i=0;i<slider.length;i++){
    slider[i].style.display="none"
}

slider[sliderIndex-1].style.display="flex"

for(let i=0;i<slider.length;i++){
    dots[i].className=dots[i].className.replace(" active","")
}
dots[sliderIndex-1].className += " active"
}

showSlider(sliderIndex)

// Slider end

// Gallery start



// Gallery end
