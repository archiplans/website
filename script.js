document.addEventListener('DOMContentLoaded', () => {
    const menuList = document.getElementById('menuList');
    const iframe = document.getElementById('contentFrame');
    const hamburgerBtn = document.getElementById('hamburgerBtn');

    // Menyu düymələrinə klik zamanı iframe dəyişir və menyu dərhal bağlanır
    menuList.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            const page = button.dataset.page || button.dataset.frame;
            if (page) iframe.src = page;

            // Mobil versiyada menyunu bağla
            if (window.innerWidth <= 768) {
                setTimeout(() => {
                    menuList.classList.remove('open');
                }, 100); // transition başa çatsın deyə kiçik gecikmə
            }
        });
    });

    // Hamburger menyunu açıb-bağlayır
    hamburgerBtn.addEventListener('click', () => {
        menuList.classList.toggle('open');
    });

    // Desktop-a keçəndə menyunu gizlət
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            menuList.classList.remove('open');
        }
    });
});
