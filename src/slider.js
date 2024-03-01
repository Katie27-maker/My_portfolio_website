let image = document.querySelectorAll('.project__img');
let details = document.querySelectorAll('.project__details');
let project = document.querySelectorAll('.project');


project.forEach((e, index)=> {
	e.addEventListener("mouseover", function () {console.log(image[index]);
		image[index].style.display = "none";
		details[index].style.display = "block";
	})

	e.addEventListener("mouseout", function () {
		image[index].style.display = "block";
		details[index].style.display = "none";
	})

	
})


// project.addEventListener("mouseover", function(){
// 	image.style.display = "none";
// 	text.style.display = "block";
// });

// project.addEventListener("mouseout", function(){
// 	image.style.display = "block";
// 	details.style.display = "none";
// });