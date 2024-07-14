let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

function toggleNavbar() {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

menu.onclick = toggleNavbar;

// Add this event listener to hide the navbar when the window is resized and its width is greater than 786px
window.addEventListener('resize', function () {
  if (window.innerWidth > 786) {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
  }
  window.onscroll = function () {
    // Remove 'active' class when the window is scrolled
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
  };
});
