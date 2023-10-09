const dataClosed = document.querySelectorAll('span[data-closed]');
const dataOpen = document.querySelectorAll('span[data-open]');

dataClosed.forEach((data) => {
	data.textContent = 'closed';
});

dataOpen.forEach((data) => {
	data.textContent = 'open';
});
