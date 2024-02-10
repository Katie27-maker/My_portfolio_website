// header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;	// getBoundingClientRect 높이를 반환해주는 함수임
console.log(headerHeight);

document.addEventListener('scroll', () => {
	if(window.screenY > headerHeight) {
		header.classList.add('header--dark');
	} else {
		header.classList.remove('header--dark');
	}
	
})


// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const home = document.querySelector('.home__container');
const homeHeigth = home.offsetHeight;
document.addEventListener('scroll', () => {
	console.log(1 - window.screenY / homeHeigth);
	home.style.opacity = 1 - window.scroll / homeHeigth;

});

// document.addEventListener('scroll', () => {
// 	const scrollY = window.scroll.screenY;
// 	const homeStartY = home.getBoundingClientRect().height;
// 	const honeEndY = home.getBoundingClientRect().bottom;
// 	const homeHeigth = honeEndY - homeStartY;

// 	if(scrollY > homeHeigth) {
// 		home.classList.add('home--fadeout');
// 	} else {
// 		home.classList.remove('home--fadeout');
// 	}
// });