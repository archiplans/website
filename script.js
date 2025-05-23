document.addEventListener('DOMContentLoaded', () => {
    const menuList = document.getElementById('menuList');
    const iframe = document.getElementById('contentFrame');
    const hamburgerBtn = document.getElementById('hamburgerBtn');

    // Menyu düymələrinə klik zamanı iframe dəyişir
    menuList.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn) return;

        if (btn.dataset.page) {
            iframe.src = btn.dataset.page;
        } else if (btn.dataset.frame) {
            iframe.src = btn.dataset.frame;
        }

        // Mobil menyuda klik edildikdən sonra menyunu bağla
        if (window.innerWidth <= 768) {
            menuList.classList.remove('open');
            hamburgerBtn.classList.remove('open');
        }
    });

    // Hamburger menyu düyməsi
    hamburgerBtn.addEventListener('click', () => {
        menuList.classList.toggle('open');
        hamburgerBtn.classList.toggle('open');
    });

    // Ekran ölçüsü dəyişdikdə menyunu gizlət
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            menuList.classList.remove('open');
            hamburgerBtn.classList.remove('open');
        }
    });
});
