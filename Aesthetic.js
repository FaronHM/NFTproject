// Transition the main title and sub-titles to full opacity when the page loads
window.onload = function() {
document.querySelector('#headers').style.opacity = "1";
};
    
// Transition the information and pictures to full opacity when the user scrolls down
window.onscroll = function() {
if (window.pageYOffset > 50) {
document.querySelector('#body').style.opacity = "1";
}
;}

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});