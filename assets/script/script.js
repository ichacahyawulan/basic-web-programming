let slideIndex = 1;
imageSlider(slideIndex);

function prevSlide() {
    imageSlider(slideIndex -= 1);
}
function nextSlide() {
    imageSlider(slideIndex += 1);
}

function imageSlider(n) {
    let i;
    let slides = document.getElementsByClassName("slider");
    if (n > slides.length) {
        slideIndex = 1
    }    
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}