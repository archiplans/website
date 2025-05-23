document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'); // class ilə seçilir
    const iframe = document.getElementById('contentFrame');
    const hamburgerBtn = document.getElementById('hamburgerBtn');

    // Menyu düymələrinə klik zamanı iframe dəyişir
    menu.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn) return;

        if (btn.dataset.page) {
            iframe.src = btn.dataset.page;
        } else if (btn.dataset.frame) {
            iframe.src = btn.dataset.frame;
        }

        // Yalnız mobil ölçüdə menyunu bağla
        if (window.innerWidth <= 768) {
            menu.classList.remove('open');
        }
    });

    // Hamburger menyunu açıb-bağlayır
    hamburgerBtn.addEventListener('click', () => {
        menu.classList.toggle('open');
    });

    // Ekran ölçüsü böyüyəndə menyunu bağla
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            menu.classList.remove('open');
        }
    });
});
