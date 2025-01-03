// Animate on Scroll
AOS.init ({
});

// Popup Form
// Get elements
const openPopupBtn = document.getElementById('openPopupBtn');
const closePopupBtn = document.getElementById('closePopupBtn');
const popupForm = document.getElementById('popupForm');

// Function to open the popup
openPopupBtn.addEventListener('click', () => {
    popupForm.classList.remove('hidden');
});

// Function to close the popup
closePopupBtn.addEventListener('click', () => {
    popupForm.classList.add('hidden');
});

// Close the popup when clicking outside the form content
window.addEventListener('click', (event) => {
    if (event.target === popupForm) {
        popupForm.classList.add('hidden');
    }
});
