document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menuList');
    const iframe = document.getElementById('contentFrame');
    const hamburgerBtn = document.getElementById('hamburgerBtn');

    // Menyu düyməsinə klik edəndə iframe dəyişir
    menu.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn) return;

        if (btn.dataset.page) {
            iframe.src = btn.dataset.page;
        } else if (btn.dataset.frame) {
            iframe.src = btn.dataset.frame;
        }

        // Mobil versiyada menyunu bağla
        if (window.innerWidth <= 768) {
            menu.classList.remove('open');
        }
    });

    // Hamburger menyuya kliklə açıb-bağlama
    hamburgerBtn.addEventListener('click', () => {
        menu.classList.toggle('open');
    });

    // Ekran ölçüsü dəyişəndə menyunu bağla
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            menu.classList.remove('open');
        }
    });
});
