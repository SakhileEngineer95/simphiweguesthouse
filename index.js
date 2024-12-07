const hamburger = document.getElementById('hamburger')
const mobileMenu = document.getElementById('mobile-menu')

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
})

// Select all navbar links
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior

        // Get the target section's ID from the href attribute
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Smoothly scroll to the target section
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Adjust alignment to 'start', 'center', or 'end'
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.getElementById('about');
    const aboutText1 = document.getElementById('about-text-1');
    const aboutText2 = document.getElementById('about-text-2');
    const aboutImage = document.getElementById('about-image');

    window.addEventListener('scroll', function() {
        const sectionPosition = aboutSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Trigger fade-in animation when the About section comes into view
        if (sectionPosition <= windowHeight * 0.75) {
            aboutSection.classList.add('opacity-100');
            aboutText1.classList.add('opacity-100');
            aboutText2.classList.add('opacity-100');
            aboutImage.classList.add('opacity-100');
        }
    });
});