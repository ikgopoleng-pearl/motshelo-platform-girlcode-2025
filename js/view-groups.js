// Overlay
const overlay = document.getElementById('overlay');

// Open modals
document.querySelectorAll('.quick-action-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.getElementById('quick-actions-modal').style.display = 'block';
        overlay.style.display = 'block';
    });
});

document.querySelector('.personal-contributions-btn').addEventListener('click', () => {
    document.getElementById('personal-contributions-modal').style.display = 'block';
    overlay.style.display = 'block';
});

document.querySelector('.notifications-btn').addEventListener('click', () => {
    document.getElementById('notifications-modal').style.display = 'block';
    overlay.style.display = 'block';
});

// Close modals
document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        overlay.style.display = 'none';
        document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
    });
});

// Click outside to close
overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
});
