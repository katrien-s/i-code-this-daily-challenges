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
