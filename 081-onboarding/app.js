const data = [
	{
		img: 'images/undraw_group_chat.svg',
		alt: 'Illustration of people interacting with each other using messages',
		title: 'Smart messaging system',
		text: "View your messages without leaving the video you're currently watching"
	},
	{
		img: 'images/undraw_real_time_analytics.svg',
		alt: 'Illustration of person staring at projected map and charts',
		title: 'Instant data analysis',
		text: 'View and analyse all your activities grouped systemically for you to get conclusions'
	}
];

const moveToNextBtn = document.getElementById('move-to-next');
const cardContent = document.querySelector('.card-content');

moveToNextBtn.addEventListener('click', function () {
	cardContent.classList.add('fade-out');

	setTimeout(function () {
		data.forEach((card) => {
			cardContent.innerHTML = `
    				<div class="card-img">
					<img
						src="${card.img}"
						class="img"
						alt="${card.alt}"
					/>
				</div>
				<div class="card-text">
					<h4>${card.title}</h4>
					<p>
						${card.text}
					</p>
				</div>
    `;
			cardContent.classList.remove('fade-out');
			cardContent.classList.add('fade-in');
		}, 300);
	});
});
