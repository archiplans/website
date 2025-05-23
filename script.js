document.addEventListener('DOMContentLoaded', () => {
    const menuList = document.getElementById('menuList');
    const iframe = document.getElementById('contentFrame');
    const hamburgerBtn = document.getElementById('hamburgerBtn');

    // Menyu düyməsinə klik edildikdə iframe dəyişir
    menuList.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn) return;

        // İframe içində səhifəni dəyiş
        if (btn.dataset.page) {
            iframe.src = btn.dataset.page;
        } else if (btn.dataset.frame) {
            iframe.src = btn.dataset.frame;
        }

        // Mobil versiyada menyunu bağla
        if (window.innerWidth <= 768) {
            menuList.classList.remove('open');        // menyunu gizlə
            hamburgerBtn.classList.remove('active');  // hamburger düyməsi də bağlanmış görünsün
        }
    });

    // Hamburger düyməsinə klik: menyunu aç / bağla
    hamburgerBtn.addEventListener('click', () => {
        menuList.classList.toggle('open');
        hamburgerBtn.classList.toggle('active'); // vizual effektlər üçün (əgər varsa)
    });

    // Ekran ölçüsü dəyişdikdə menyunu bağla
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            menuList.classList.remove('open');
            hamburgerBtn.classList.remove('active');
        }
    });
});
