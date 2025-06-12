const slideTrack = document.getElementById('slide-track');
    let currentIndex = 0;
    const totalSlides = 3;

    function updateSlide() {
    slideTrack.style.transform = `translateX(-${currentIndex * 100}vw)`;
}

    function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
}

    function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
}

    setInterval(nextSlide, 5000);

    function scrollToSection() {
    document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
}

