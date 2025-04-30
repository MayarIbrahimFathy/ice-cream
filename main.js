const slider = document.getElementById('slider');
const indicators = document.querySelectorAll('.indicator');
let currentSlide = 0;

function goToSlide(index) {
    currentSlide = index;
    const slideWidth = window.innerWidth >= 1024 ? 33.33 : window.innerWidth >= 768 ? 50 : 100;
    slider.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
    
    indicators.forEach(ind => ind.classList.remove('active'));
    indicators[currentSlide].classList.add('active');
}

indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
        goToSlide(parseInt(indicator.dataset.slide));
    });
});

// Initialize first slide
goToSlide(0);

// Update slider on window resize
window.addEventListener('resize', () => {
    goToSlide(currentSlide);
});