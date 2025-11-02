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

	// --- keyboard support for slideshow ---
	document.addEventListener('keydown', function (e) {
		if (e.key === 'ArrowRight') { next(); }
		if (e.key === 'ArrowLeft') { prev(); }
	});

	// announcer for screen readers (optional element on page)
	function announce(text) {
		const el = document.getElementById('slideshow-announcer');
		if (el) el.textContent = text;
	}

	// enhance goTo to announce
	const originalGoTo = goTo;
	goTo = function (index) {
		originalGoTo(index);
		announce('Slide ' + (index + 1) + ' de ' + slides.length);
	};

	// --- navigation current link handling ---
	(function markCurrentNav() {
		const navLinks = document.querySelectorAll('.nav-btn');
		const path = location.pathname.split('/').pop() || 'index.html';
		navLinks.forEach(a => {
			const href = a.getAttribute('href');
			if (!href) return;
			if (href === path || (href === 'index.html' && path === '')) {
				a.setAttribute('aria-current', 'page');
			} else {
				a.removeAttribute('aria-current');
			}
		});
	})();

	// --- theme & high-contrast toggles ---
	const btnTheme = document.getElementById('btn-theme');
	const btnContrast = document.getElementById('btn-contrast');

	function applyTheme(theme) { document.documentElement.setAttribute('data-theme', theme); }
	function setHighContrast(on) { document.body.classList.toggle('high-contrast', !!on); }

	// restore preferences
	try {
		const savedTheme = localStorage.getItem('site:theme');
		const savedHC = localStorage.getItem('site:highcontrast') === '1';
		if (savedTheme) applyTheme(savedTheme);
		setHighContrast(savedHC);
		if (btnContrast) btnContrast.setAttribute('aria-pressed', String(savedHC));
	} catch (err) { /* ignore storage errors */ }

	if (btnTheme) {
		btnTheme.addEventListener('click', function () {
			const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
			applyTheme(isDark ? '': 'dark');
			try { localStorage.setItem('site:theme', isDark ? '' : 'dark'); } catch (e) {}
			btnTheme.setAttribute('aria-pressed', String(!isDark));
		});
	}
	if (btnContrast) {
		btnContrast.addEventListener('click', function () {
			const on = !document.body.classList.contains('high-contrast');
			setHighContrast(on);
			try { localStorage.setItem('site:highcontrast', on ? '1' : '0'); } catch (e) {}
			btnContrast.setAttribute('aria-pressed', String(on));
		});
	}
});
