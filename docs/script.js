const slides = Array.from(document.querySelectorAll('.carousel-slide'));
const prevBtn = document.getElementById('carousel-prev');
const nextBtn = document.getElementById('carousel-next');
const indicator = document.getElementById('carousel-indicator');

let currentIndex = 0;

function showSlide(index) {
	currentIndex = (index + slides.length) % slides.length;

	slides.forEach((slide, i) => {
		slide.classList.toggle('active', i === currentIndex);
		slide.setAttribute('aria-hidden', i === currentIndex ? 'false' : 'true');
	});

	if (indicator) {
		indicator.textContent = `${currentIndex + 1} / ${slides.length}`;
	}
}

prevBtn?.addEventListener('click', () => showSlide(currentIndex - 1));
nextBtn?.addEventListener('click', () => showSlide(currentIndex + 1));

document.addEventListener('keydown', (event) => {
	if (event.key === 'ArrowLeft') {
		showSlide(currentIndex - 1);
	} else if (event.key === 'ArrowRight') {
		showSlide(currentIndex + 1);
	}
});

showSlide(0);
