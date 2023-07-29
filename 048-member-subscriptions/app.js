const sliderBtnLeft = document.getElementById('slider-btn-left');
const sliderBtnRight = document.getElementById('slider-btn-right');
const sliderGallery = document.querySelector('.slider-content-container');

const scrollStep = sliderGallery.clientWidth / 1;

sliderBtnLeft.addEventListener('click', () => {
	sliderGallery.scrollBy(-scrollStep, 0);
});

sliderBtnRight.addEventListener('click', () => {
	sliderGallery.scrollBy(scrollStep, 0);
});
