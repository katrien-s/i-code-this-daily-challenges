const navToggle = document.querySelector('.nav-toggle');
const primaryNavigation = document.querySelector('.primary-navigation');

navToggle.addEventListener('click', function(){
  primaryNavigation.classList.toggle('show-links')
})
