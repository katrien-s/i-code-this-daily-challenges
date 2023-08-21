const navToggleBtn  = document.querySelector('.nav-toggle')
const navigation = document.querySelector('.navigation')

navToggleBtn.addEventListener('click', function(){
  navigation.classList.toggle('show-nav')
})