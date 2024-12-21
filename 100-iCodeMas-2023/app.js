import { products } from './products.js';

// Countdown
const countdownInterval = setInterval(countdownDays, 1000);

function countdownDays() {
	let today = new Date();
	let christmasYear = today.getFullYear();

	const targetDate = new Date(christmasYear, 11, 25);
	const timeDifference = targetDate - today;

	const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

	document.getElementById('days').textContent = days;
	document.getElementById('hours').textContent = hours;
	document.getElementById('minutes').textContent = minutes;
	document.getElementById('seconds').textContent = seconds;
}

// Coupon
document.getElementById('close-btn').addEventListener('click', function () {
	document.querySelector('.discount-coupon').style.display = 'none';
});

// Update Cart
function updateCartCount(count) {
	document.getElementById('cart-count').textContent = count;
}

updateCartCount(2);

// Filter Selection Custom Dropdown

const dropdownMenu = document.getElementById('custom-dropdown');
const selectedOption = document.querySelector('.selected-option');
const dropdownOptions = document.querySelector('.dropdown-options');
const dropdownOption = document.querySelectorAll('.dropdown-option');

dropdownMenu.addEventListener('click', toggleDropdown);

function toggleDropdown() {
	dropdownOptions.style.display =
		dropdownOptions.style.display === 'flex' ? 'none' : 'flex';
}

function selectOption(option) {
	var selectedText = document.querySelector('.selected-text');
	selectedText.textContent = option;
	toggleDropdown();
}

dropdownOption.forEach((option) => {
	option.addEventListener('click', function () {
		selectOption(option.textContent);
	});
});

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
	if (event.target !== dropdownMenu && !dropdownMenu.contains(event.target)) {
		dropdownOptions.style.display = 'none';
	}
};

// Pagination
const paginationEl = document.querySelector('.pagination ul');
let totalPages = 16;
let page = 1;

const chevronLeft = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#1a1e23" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M15 6l-6 6l6 6" />
</svg>`;

const chevronRight = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#1a1e23" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9 6l6 6l-6 6" />
</svg>`;

paginationEl.innerHTML = createPagination(totalPages, page);

function createPagination(totalPages, page) {
	page = Math.max(1, page);
	let paginationLi = '';
	let active;
	let beforePage = page - 1;
	let afterPage = page + 1;

	if (page > 1) {
		paginationLi += `<li class="btn prev" onClick="createPagination(totalPages, ${
			page - 1
		})"><span class="svg-tabler-icon"> ${chevronLeft} </span></li>`;
	} else {
		paginationLi += `<li class="btn prev" disabled><span class="svg-tabler-icon"> ${chevronLeft} </span></li>`;
	}

	if (page > 2) {
		paginationLi += `<li class="first numb" onClick="createPagination(totalPages, ${1})" ><span>1</span></li>`;
	}

	if (page > 3) {
		paginationLi += `<li class="dots"><span>...</span></li>`;
	}

	if (page === totalPages) {
		beforePage = beforePage - 2;
	} else if (page === totalPages - 1) {
		beforePage = beforePage - 1;
	}
	if (page === 1) {
		afterPage = afterPage + 2;
	} else if (page === 2) {
		afterPage = afterPage + 1;
	}

	for (let plength = beforePage; plength <= afterPage; plength++) {
		if (plength > totalPages) {
			continue;
		}
		if (plength === 0) {
			plength = plength + 1;
		}
		if (page === plength) {
			active = 'active';
		} else {
			active = '';
		}
		paginationLi += `<li class="numb ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
	}

	if (page < totalPages - 1) {
		if (page < totalPages - 2) {
			paginationLi += `<li class="dots"><span>...</span></li>`;
		}
		paginationLi += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
	}

	if (page < totalPages) {
		paginationLi += `<li class="btn next" onclick="createPagination(totalPages, ${
			page + 1
		})"><span class="svg-tabler-icon">${chevronRight}</span></li>`;
	} else {
		paginationLi += `<li class="btn next" disabled><span class="svg-tabler-icon">${chevronRight}</span></li>`;
	}

	paginationEl.innerHTML = paginationLi;
	return paginationLi;
}

// FAQ
const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
	const btn = question.querySelector('.question-btn');
	btn.addEventListener('click', () => {
		questions.forEach((item) => {
			if (item !== question) {
				item.classList.remove('show-text');
			}
		});
		question.classList.toggle('show-text');
	});
});
