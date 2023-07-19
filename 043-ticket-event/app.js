const readMoreBtn = document.getElementById('read-more-btn');

function readMore() {
	const dots = document.getElementById('dots');
	const moreText = document.getElementById('more');

	if (dots.style.display === 'none') {
		dots.style.display = 'inline';
		readMoreBtn.innerHTML = 'Read more';
		moreText.style.display = 'none';
	} else {
		dots.style.display = 'none';
		readMoreBtn.innerHTML = 'Read less';
		moreText.style.display = 'inline';
	}
}

readMoreBtn.addEventListener('click', readMore);

document.addEventListener('DOMContentLoaded', function () {
	new Splide('#image-carousel', {
    type: 'loop',
		height: '12rem',
    focus: 'center',
		perPage: 2,
    rewind: true,
    drag: 'free',
    snap: true,
	}).mount();
});
