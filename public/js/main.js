const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 

        const targetId = this.getAttribute('href'); 
        const targetElement = document.querySelector(targetId); 

        // Smooth scroll to the target element
        targetElement.scrollIntoView({
            behavior: 'smooth' 
        });
    });
});

// Close Mobile Menu on Link Click
const navLinksMobile = document.querySelectorAll('.navbar-nav a'); 

navLinksMobile.forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('show'); // Close the menu
    });
});

// Lazy Loading for Images
const images = document.querySelectorAll('img'); 

images.forEach(image => {
    image.addEventListener('load', function() {
        this.classList.add('loaded'); 
    });
});

// (This adds a visual effect as the images load)
images.forEach(image => {
    image.classList.add('fade-in'); 
});


