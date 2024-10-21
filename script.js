// JavaScript for responsive navbar
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// JavaScript to show a welcome alert when the page loads
window.onload = function() {
    alert('Welcome to Vigneto Vineyard & Estate Winery!');
};
