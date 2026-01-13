const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const speed = 200;

        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active");
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    setTimeout(showSlides, 3000); // change every 3 sec
}
