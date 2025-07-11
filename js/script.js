document.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;

    // Listen for scroll events on the page
    window.addEventListener('scroll', () => {
        // Check if the user is scrolling down and is not at the very top
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            // Scrolling down: add a class to hide the header
            header.classList.add('header-hidden');
        } else {
            // Scrolling up: remove the class to show the header
            header.classList.remove('header-hidden');
        }
        // Update the last scroll position for the next event
        lastScrollY = window.scrollY;
    });

});