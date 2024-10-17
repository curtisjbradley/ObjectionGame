let popup = undefined
window.addEventListener("load", () => {
    popup = document.getElementById('leaderboard');
})

function closePopup() {
    popup.classList.remove('show');
}

function showPopup() {
    popup.classList.add('show');
}

window.addEventListener('click', (ev) => {
    if (ev.target === popup) {
        popup.classList.remove('show');
    }
});