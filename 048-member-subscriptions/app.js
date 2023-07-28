document.addEventListener('DOMContentLoaded', function () {
	var splide = new Splide('.splide', {
    perPage: 3,
    rewind: true,
		classes: {
			arrow: 'splide__arrow slider-btn'
		}
	});
	splide.mount();
});
