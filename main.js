// Mobile Menu
// A $( document ).ready() block.
$(document).ready(function () {
    $(document).ready(function () {
        $(".mobile-button").click(function () {
            $(".mobile-button").toggleClass("active");
            $(".mobile-menu").toggleClass("active");
        });
    });
});

// Slick
$('.testimonial-container').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    arrows: false,
    accessibility: true,
    dots: true,
    fade: true,
    infinite: true,
    pauseOnHover: true,
});


// Animate on Scroll
AOS.init ({
});

// Popup Form
// Select all open-popup buttons
const openPopupBtns = document.querySelectorAll('.open-popup-btn');
// Select all popup forms
const popupForms = document.querySelectorAll('.popup-form');
// Select all close buttons
const closePopupBtns = document.querySelectorAll('.close-popup-btn');

// Attach event listeners to all buttons
openPopupBtns.forEach((button, index) => {
    button.addEventListener('click', () => {
        popupForms[index].classList.remove('hidden'); // Open the corresponding popup
    });
});

// Attach event listeners to all close buttons
closePopupBtns.forEach((button, index) => {
    button.addEventListener('click', () => {
        popupForms[index].classList.add('hidden'); // Close the corresponding popup
    });
});

// Close popup when clicking outside the form content
window.addEventListener('click', (event) => {
    popupForms.forEach((popupForm) => {
        if (event.target === popupForm) {
            popupForm.classList.add('hidden'); // Close the popup
        }
    });
});
