document.addEventListener("DOMContentLoaded", function() {
    // Slideshow functionality
    const slidesContainers = document.querySelectorAll(".slideshow-container");
    slidesContainers.forEach(container => {
        const slides = container.querySelectorAll(".slide");
        let currentIndex = 0;

        function showNextSlide() {
            slides[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add("active");
        }

        slides[currentIndex].classList.add("active");
        setInterval(showNextSlide, 3000);
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission functionality
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            console.log('Form Submitted');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            // Simulate form submission (remove this part in production)
            // alert('Thank you for contacting us, ' + name + '! We will get back to you soon.');
            contactForm.reset();
        });
    }
});
