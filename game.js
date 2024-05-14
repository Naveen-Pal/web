const input = document.querySelector('input');
const games = document.querySelectorAll('#games img');

input.addEventListener('input', () => {
    const searchTerm = input.value.toLowerCase();
    games.forEach(game => {
        if (game.alt.toLowerCase().includes(searchTerm)) {
            game.style.display = 'block';
        } else {
            game.style.display = 'none';
        }
    });
});
// Get the info button and the popup content
const infoBtn = document.getElementById('info-btn');
const popupContent = document.querySelector('.popup-content');

// Toggle the visibility of the popup content when the info button is clicked
infoBtn.addEventListener('click', () => {
    popupContent.style.display = (popupContent.style.display === 'block') ? 'none' : 'block';
});
