const slideArray = document.querySelectorAll(".slide");

let current = 0;

slideArray.forEach(element => {
    element.querySelector(".slide__arrow--prev").addEventListener("click", prevSlide);
    element.querySelector(".slide__arrow--next").addEventListener("click", nextSlide);
});

function prevSlide() {
    console.log("previous");
    if (current === 0) {
        slideArray[current].classList.add("hidden");
        current = slideArray.length;
    } else {
        slideArray[current].classList.add("hidden");
    }
    current = current - 1;
    slideArray[current].classList.remove("hidden");
}

function nextSlide() {
    console.log("next");
    slideArray[current].classList.add("hidden");
    current = current + 1;
    current = current % slideArray.length;
    slideArray[current].classList.remove("hidden");
}