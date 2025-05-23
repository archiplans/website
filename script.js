// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('ul.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Menü düymələrinin funksionallığı (nümunə)
document.getElementById('homeBtn').addEventListener('click', () => {
    alert('Ana səhifə açıldı!');
    // burada istəsən başqa səhifəyə yönləndirə bilərsən
    // location.href = 'index.html';
});
document.getElementById('infoBtn').addEventListener('click', () => {
    alert('Məlumat səhifəsi açıldı!');
    // location.href = 'info.html';
});
document.getElementById('contactBtn').addEventListener('click', () => {
    alert('Əlaqə səhifəsi açıldı!');
    // location.href = 'contact.html';
});
