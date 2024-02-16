'use strict';

// 프로젝트 필러링

const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects')

categories.addEventListener('click', (event) => {
	const filter = event.target.dataset.category;
	if(filter == null) {	// null이었을 때 카테고리 종료
		return;
	}

	// Active메뉴 재설정
	const active = document.querySelector('.category--selected');
	active.classList.remove('category--selected');
	event.target.classList.add('category--selected');

	
	// 프로젝트 필터링
	projectsContainer.classList.add('anim-out');
	projects.forEach((project) => {
		if(filter === 'all' || filter === project.dataset.type) {
			project.style.display = 'block';
			projectsContainer.style.opacity = 3;
			projectsContainer.style.scale = 1;

		} else {
			project.style.display = 'none';
			projectsContainer.style.opacity = 0;
			// projectsContainer.style.scale = 0;
		}
		// (filter === 'all' || filter === project.dataset.type) ? project.style.display = 'block' : project.style.display = 'none';
	});
	setTimeout(() => {
		console.log(projectsContainer.classList.remove('anim-out'));
	}, 250);
});