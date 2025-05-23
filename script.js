// Hamburger menyu toggle
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('ul.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Sadə alert funksiyaları nümunə üçün
document.getElementById('homeBtn').addEventListener('click', () => {
    alert('Ana səhifə seçildi.');
});

document.getElementById('infoBtn').addEventListener('click', () => {
    alert('Məlumat seçildi.');
});

document.getElementById('contactBtn').addEventListener('click', () => {
    alert('Əlaqə seçildi.');
});
