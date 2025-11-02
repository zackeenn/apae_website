document.addEventListener('DOMContentLoaded', function () {
	const searchForm = document.querySelector('.search');
	const searchInput = document.querySelector('.search-input');

	if (searchForm && searchInput) {
		searchForm.addEventListener('submit', function (e) {
			e.preventDefault();
			console.log('Buscar:', searchInput.value);
		});
	}
    
	// ---- slideshow logic ----
	const slidesWrap = document.querySelector('.slides');
	const slides = document.querySelectorAll('.slide');
	const prevBtn = document.querySelector('.slide-prev');
	const nextBtn = document.querySelector('.slide-next');
	const indicators = document.querySelectorAll('.indicator');
	let current = 0;
	let autoplayInterval = null;
	const AUTOPLAY_MS = 4500;

	function goTo(index) {
		index = (index + slides.length) % slides.length;
		current = index;
		slides.forEach((s, i) => s.classList.toggle('active', i === index));
		indicators.forEach((btn) => btn.classList.toggle('active', Number(btn.dataset.slide) === index));
	}

	function next() { goTo(current + 1); }
	function prev() { goTo(current - 1); }

	if (nextBtn) nextBtn.addEventListener('click', next);
	if (prevBtn) prevBtn.addEventListener('click', prev);
	indicators.forEach(btn => btn.addEventListener('click', () => goTo(Number(btn.dataset.slide))));

	function startAutoplay() {
		stopAutoplay();
		autoplayInterval = setInterval(next, AUTOPLAY_MS);
	}
	function stopAutoplay() { if (autoplayInterval) clearInterval(autoplayInterval); }

	const slideshow = document.querySelector('.slideshow');
	if (slideshow) {
		slideshow.addEventListener('mouseenter', stopAutoplay);
		slideshow.addEventListener('mouseleave', startAutoplay);
	}

	// init
	goTo(0);
	startAutoplay();
});
