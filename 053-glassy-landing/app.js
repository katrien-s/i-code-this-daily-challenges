const navToggleBtn = document.querySelector('.nav-toggle')
const navMenu = document.querySelector('.nav-links-list');

navToggleBtn.addEventListener('click', function(){
  navMenu.classList.toggle('show-navigation')
  console.log(navMenu)
})