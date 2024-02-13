'use strict';

// header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;	// getBoundingClientRect 높이를 반환해주는 함수임

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
	home.style.opacity = 1 - window.scrollY / homeHeigth;
});


// home이 절반 정도 내려가면 Arrow button이 생기고 올라가면 사라지게 하기
const arrowUp = document.querySelector('.arrow');
document.addEventListener('scroll', () => {

	// 방법 1
	// if(window.scrollY > 350) {
	// 	arrowUp.classList.remove('arrow--visible');
	// } else {
	// 	arrowUp.classList.add('arrow--visible');
	// }

	// 방법 2
	arrowUp.style.opacity = 2 - homeHeigth  / window.scrollY;
});


// 방법 home높이 기준이니까 homeHeigth이 변수를 가져와서 쓰면 되겠다 싶었지만
// 나는 윈도우 기준에서 350까지 내려가면 화살표가 지워지게 구현


// Navbar바 토글버튼 클릭 처리
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', () => {
	navbarMenu.classList.toggle('open');
});


// Navbar 메뉴 클릭스 메뉴를 자동으로 닫아줌
navbarMenu.addEventListener('click', () => {
	navbarMenu.classList.remove('open');
})