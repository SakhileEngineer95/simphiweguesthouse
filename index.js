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