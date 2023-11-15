// https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature

const articleImage = document.getElementById('folder-image');

fetch(
	`https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=norway&query=romania`
)
	.then((response) => response.json())
	.then((data) => {
		articleImage.setAttribute('src', `${data.urls.small}`);
		articleImage.setAttribute('alt', `${data.alt_description}`);
	});
