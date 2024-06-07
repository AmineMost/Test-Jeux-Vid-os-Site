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
            video.currentTime = 0; // Revenir au début de la vidéo
        });
    });
}

// Appel de la fonction pour activer la lecture de la vidéo au survol
playVideoOnHover();
