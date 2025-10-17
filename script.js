// Document poora load hone ke baad hi code chalega
document.addEventListener('DOMContentLoaded', function() {

    // AOS (Animate on Scroll) Library ko initialize karein
    AOS.init({
        duration: 1000, // animation 1 second tak chalega
        once: true,     // animation sirf ek baar scroll karne par chalega
        offset: 100,    // element dikhne se 100px pehle animation start hoga
    });

    // Zaroori elements ko select karein
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const header = document.getElementById('header');
    const navMenuLinks = document.querySelectorAll('#nav-links a');

    // Hamburger icon par click event
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            // 'active' class ko toggle karein
            navLinks.classList.toggle('active');

            // Hamburger icon ko 'bars' se 'times' (X) mein badlein
            const icon = hamburger.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // Function: Mobile menu ko band karne ke liye
    const closeMobileMenu = () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    };

    // Jab koi menu link par click ho, to menu band ho jaye
    navMenuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Scroll karne par header ka background badalne ke liye
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

});
