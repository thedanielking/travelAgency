// image slider

const slider = document.querySelectorAll(".destination-card");
let slideIndex = 0;

document.addEventListener("DOMContentLoaded", initializeSlide());

function initializeSlide(){
    slider[slideIndex].classList.add("displaySlide");
}

function showSlide(index){
    if(index >= slider.length){
        slideIndex = 0;
    }else if(index < 0){
        slideIndex = slider.length - 1;
    }

    slider.forEach(slide =>{
        slide.classList.remove("displaySlide");
    })
    slider[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}





// verify email

const submitBtn = document.getElementById("submit");
const regex = /.+@.+\..+/;

submitBtn.addEventListener("click", ()=>{
    let inputElement = document.getElementById("email");

    if(inputElement.value == " "){
        inputElement.style.color = "red";
    }
    else if(!regex.test(inputElement.value)){
        // console.log(inputElement.textContent)
        // console.log("working")
        inputElement.style.color = "red";
    }else{
        inputElement.style.color = "black";
        alert("You have SUBSCRIBED!");
        inputElement = null;
    }
        
})



// mobile navigation
const menu = document.getElementById("menu");
const mainElement = document.querySelector("main");

menu.addEventListener("click", (e)=>{
    
    let navMiddle = document.querySelector(".nav_middle");
    navMiddle.classList.toggle("mobileNav");

    if(!navMiddle.classList.contains("mobileNav")){
        mainElement.classList.remove("mobileMain");
    }else{
        mainElement.classList.add("mobileMain");
        main.style.opacity = .5;
    }
})










