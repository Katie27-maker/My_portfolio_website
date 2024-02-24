let image = document.querySelector('.project__img');
let text = document.querySelector('.project__details');
let project = document.querySelector('.project');


project.addEventListener("mouseover", function(){
	image.style.display = "none";
	text.style.display = "block";
});

project.addEventListener("mouseout", function(){
	image.style.display = "block";
	text.style.display = "none";
});