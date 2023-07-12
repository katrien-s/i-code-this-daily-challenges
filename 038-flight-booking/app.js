const searchFlightsBtn = document.getElementById('search-flights');
let departureInputDate = document.getElementById('date-departure');
let arrivalInputDate = document.getElementById('date-arrival');

departureInputDate.min = new Date().toISOString().slice(0, 10);
arrivalInputDate.min = new Date().toISOString().slice(0, 10);

searchFlightsBtn.addEventListener('click', function (e) {
	e.preventDefault();
});
