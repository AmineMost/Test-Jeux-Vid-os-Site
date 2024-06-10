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

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);

    // Fonction pour activer la lecture de la vidéo au survol
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

    // Fonction pour filtrer les jeux en fonction de la recherche
    function filterGames() {
        const searchInput = document.getElementById('search').value.toLowerCase();
        const games = document.querySelectorAll('.game');

        games.forEach(game => {
            const title = game.querySelector('.details h3').textContent.toLowerCase();
            if (title.includes(searchInput)) {
                game.style.display = '';
            } else {
                game.style.display = 'none';
            }
        });
    }

    // Événement pour la recherche en temps réel
    document.getElementById('search').addEventListener('input', filterGames);

    // Appel de la fonction pour activer la lecture de la vidéo au survol
    playVideoOnHover();
});
