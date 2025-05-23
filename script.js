document.addEventListener('DOMContentLoaded', () => {
    const menuList = document.getElementById('menuList');
    const iframe = document.getElementById('contentFrame');
    const hamburgerBtn = document.getElementById('hamburgerBtn');

    // Menyu düymələrinə klik zamanı iframe dəyişir və menyu bağlanır
    menuList.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn) return;

        if (btn.dataset.page) {
            iframe.src = btn.dataset.page;
        } else if (btn.dataset.frame) {
            iframe.src = btn.dataset.frame;
        }

        // Mobil menyuda klikdən sonra menyunu dərhal bağla
        if (window.innerWidth <= 768) {
            menuList.classList.remove('open');
        }
    });

    // Hamburger menyu düyməsi
    hamburgerBtn.addEventListener('click', () => {
        menuList.classList.toggle('open');
    });

    // Ekran ölçüsü dəyişəndə menyunu bağla (desktop-a keçəndə)
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            menuList.classList.remove('open');
        }
    });
});
