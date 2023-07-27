const taskToggle = document.querySelectorAll('.task-not-completed');

for (let task of taskToggle) {
	task.addEventListener('click', function () {
		task.classList.add('task-completed');
		task.classList.remove('task-not-completed');
		task.children[1].classList.add('fa-circle-check');
		task.children[1].classList.remove('fa-circle');
	});
}
