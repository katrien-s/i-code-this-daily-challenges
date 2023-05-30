const tabButtonElements = document.querySelector('.tab-buttons-container');
const tabContainerDetails = document.getElementById('tab-container-01');
const tabContainerTutorials = document.getElementById('tab-container-02');
const tabContainerSnippets = document.getElementById('tab-container-03');

document
	.querySelector('.tab-buttons-container')
	.addEventListener('click', (e) => {
		if (e.target.value === 'details') {
			tabContainerDetails.style.display = 'block';
			tabContainerTutorials.style.display = 'none';
			tabContainerSnippets.style.display = 'none';
		}

		if (e.target.value === 'tutorials') {
			tabContainerDetails.style.display = 'none';
			tabContainerTutorials.style.display = 'block';
			tabContainerSnippets.style.display = 'none';
		}

		if (e.target.value === 'snippets') {
			tabContainerDetails.style.display = 'none';
			tabContainerTutorials.style.display = 'none';
			tabContainerSnippets.style.display = 'block';
		}
	});