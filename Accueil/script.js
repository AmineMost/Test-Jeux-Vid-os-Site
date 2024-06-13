document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.carousel-item');
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    }

    function nextSlide() {
        const slides = document.querySelectorAll('.carousel-item');
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        const slides = document.querySelectorAll('.carousel-item');
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function playVideoOnHover() {
        const games = document.querySelectorAll('.game');
        games.forEach(game => {
            const video = game.querySelector('.game-video');
            game.addEventListener('mouseenter', () => {
                video.play();
            });
            game.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0;
            });
        });
    }

    function filterGames() {
        const searchInput = document.getElementById('search').value.toLowerCase();
        const games = document.querySelectorAll('.game');
        games.forEach(game => {
            const title = game.querySelector('.details h3').textContent.toLowerCase();
            game.style.display = title.includes(searchInput) ? '' : 'none';
        });
    }

    function toggleSearchResults(active) {
        const catalogSection = document.getElementById('catalog');
        const searchResultsSection = document.getElementById('search-results');
        
        if (active) {
            catalogSection.classList.add('hidden');
            searchResultsSection.classList.add('active');
        } else {
            catalogSection.classList.remove('hidden');
            searchResultsSection.classList.remove('active');
        }
    }

    document.getElementById('search').addEventListener('focus', () => {
        toggleSearchResults(true);
    });

    document.getElementById('search').addEventListener('blur', () => {
        setTimeout(() => {
            toggleSearchResults(false);
        }, 300);
    });

    document.getElementById('search').addEventListener('input', filterGames);

    showSlide(currentSlide);
    playVideoOnHover();
});
