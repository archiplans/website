document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'); // .menu class-ı
    const iframe = document.getElementById('contentFrame');
    const hamburgerBtn = document.getElementById('hamburgerBtn');

    // Menyu düymələrinə klik zamanı iframe dəyişir
    document.querySelectorAll('.menu button').forEach((btn) => {
        btn.addEventListener('click', () => {
            if (btn.dataset.page) {
                iframe.src = btn.dataset.page;
            } else if (btn.dataset.frame) {
                iframe.src = btn.dataset.frame;
            }

            // Əgər mobil ölçüdürsə, menyunu bağla
            if (window.innerWidth <= 768) {
                menu.classList.remove('open');
            }
        });
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
