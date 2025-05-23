document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const menuList = document.getElementById("menuList");
    const mainContent = document.querySelector("main");

    // Overlay yaratmaq üçün div əlavə et (əgər yoxdursa)
    let overlay = document.getElementById("overlay");
    if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = "overlay";
        document.body.appendChild(overlay);
    }

    // Hamburger menyu toggle funksiyası
    function toggleMenu() {
        const isShown = menuList.classList.toggle("show");
        if (isShown) {
            overlay.style.display = "block";
            document.body.style.overflow = "hidden"; // Scroll-u bağla
        } else {
            overlay.style.display = "none";
            document.body.style.overflow = "auto"; // Scroll-u aç
        }
    }

    hamburgerBtn.addEventListener("click", toggleMenu);

    // Klaviatura üçün toggle (Enter və Space)
    hamburgerBtn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleMenu();
        }
    });

    // Overlay klikdə menyunu bağla
    overlay.addEventListener("click", () => {
        menuList.classList.remove("show");
        overlay.style.display = "none";
        document.body.style.overflow = "auto";
    });

    // Menyu elementində klik - menyu bağlamaq üçün (məsələn, düymələrə klikdə)
    menuList.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            // Sənin mövcud kodda olduğu kimi səhifə yükləmək və ya iframe açmaq
            const page = e.target.getAttribute("data-page");
            const frameUrl = e.target.getAttribute("data-frame");

            if (page) {
                fetch(page)
                    .then(response => {
                        if (!response.ok) throw new Error("Fayl yüklənmədi");
                        return response.text();
                    })
                    .then(html => {
                        mainContent.innerHTML = html;
                        menuList.classList.remove("show");
                        overlay.style.display = "none";
                        document.body.style.overflow = "auto";
                    })
                    .catch(() => {
                        mainContent.innerHTML = `<p>Səhifə yüklənərkən xəta baş verdi.</p>`;
                        menuList.classList.remove("show");
                        overlay.style.display = "none";
                        document.body.style.overflow = "auto";
                    });
            } else if (frameUrl) {
                mainContent.innerHTML = `
                    <iframe src="${frameUrl}" frameborder="0" style="width: 100%; height: 80vh; border-radius: 10px;"></iframe>
                `;
                menuList.classList.remove("show");
                overlay.style.display = "none";
                document.body.style.overflow = "auto";
            }
        }
    });
});
