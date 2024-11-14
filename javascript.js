var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
	CShamburgerMenu.classList.toggle("cs-active");
	CSnavbarMenu.classList.toggle("cs-active");
	CSbody.classList.toggle("cs-open");
	ariaExpanded();
});

function ariaExpanded() {
	const csUL = document.querySelector('#cs-expanded');
	const csExpanded = csUL.getAttribute('aria-expanded');

	if (csExpanded === 'false') {
		csUL.setAttribute('aria-expanded', 'true');
	} else {
		csUL.setAttribute('aria-expanded', 'false');
	}
}

document.addEventListener('scroll', (e) => { 
	const scroll = document.documentElement.scrollTop;
	if(scroll >= 100){
document.querySelector('body').classList.add('scroll')
	} else {
	document.querySelector('body').classList.remove('scroll')
	}
});

const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
	for (const item of dropDowns) {
		const onClick = () => {
		item.classList.toggle('cs-active')
	}
	item.addEventListener('click', onClick)
	}
			
	document.addEventListener('DOMContentLoaded', function() {
		const slides = document.querySelectorAll('.slide');
		const thumbnails = document.querySelectorAll('.thumbnail');
		const prevBtn = document.querySelector('.prev-btn');
		const nextBtn = document.querySelector('.next-btn');
		let currentSlide = 0;
	
		// Función para cambiar de slide
		function goToSlide(index) {
			// Remover clase active de todos los slides y thumbnails
			slides.forEach(slide => slide.classList.remove('active'));
			thumbnails.forEach(thumb => thumb.classList.remove('active'));
	
			// Añadir clase active al slide y thumbnail actual
			slides[index].classList.add('active');
			thumbnails[index].classList.add('active');
			currentSlide = index;
		}
	
		// Event listeners para los botones de navegación
		prevBtn.addEventListener('click', () => {
			currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
			goToSlide(currentSlide);
		});
	
		nextBtn.addEventListener('click', () => {
			currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
			goToSlide(currentSlide);
		});
	
		// Event listeners para los thumbnails
		thumbnails.forEach((thumbnail, index) => {
			thumbnail.addEventListener('click', () => {
				goToSlide(index);
			});
		});
	
		// Autoplay opcional (comentado por defecto)
		/*
		const autoplayInterval = 5000; // 5 segundos
		setInterval(() => {
			currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
			goToSlide(currentSlide);
		}, autoplayInterval);
		*/
	});