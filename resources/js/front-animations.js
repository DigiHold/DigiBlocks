document.addEventListener('DOMContentLoaded', function() {
	const animatedElements = document.querySelectorAll('.digi-animate-hidden');
	
	if (animatedElements.length === 0) {
		return;
	}
	
	function applyAnimation(element) {
		const duration = element.dataset.animationDuration || 'normal';
		const delay = parseInt(element.dataset.animationDelay, 10) || 0;
		
		setTimeout(() => {
			element.classList.remove('digi-animate-hidden');
			element.classList.add('digi-animated', 'digi-' + duration);
		}, delay);
	}
	
	function createObserver(element) {
		let hasAnimated = false;

		function handleIntersection(entries) {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !hasAnimated) {
					hasAnimated = true;
					applyAnimation(entry.target);
					observer.unobserve(entry.target);
				}
			});
		}

		const observer = new IntersectionObserver(handleIntersection, {
			threshold: 0,
			rootMargin: '0px 0px -50px 0px'
		});

		observer.observe(element);

		return observer;
	}
	
	const observers = [];
	for (let i = 0; i < animatedElements.length; i++) {
		observers.push(createObserver(animatedElements[i]));
	}
});