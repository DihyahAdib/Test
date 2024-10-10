function scrollToSection(event, sectionId) {
    event.preventDefault(); // Prevent default jump
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth' // Smooth scrolling
    });
}