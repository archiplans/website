document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const menuList = document.getElementById("menuList");
    const mainContent = document.querySelector("main");

    // Hamburger menyu toggle
    hamburgerBtn.addEventListener("click", () => {
        menuList.classList.toggle("show");
        document.body.classList.toggle("menu-open");  // Overlay üçün əlavə
    });

    // Klaviatura ilə də hamburger aktivliyi (Accessibility üçün)
    hamburgerBtn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            menuList.classList.toggle("show");
            document.body.classList.toggle("menu-open");  // Overlay üçün əlavə
        }
    });

    // Menyu düymələrinə klikdə səhifə yükləmə və ya iframe açma funksiyası
    menuList.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            const page = e.target.getAttribute("data-page");
            const frameUrl = e.target.getAttribute("data-frame");

            if (page) {
                // Xarici və ya daxili HTML səhifəsini fetch ilə yüklə
                fetch(page)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error("Fayl yüklənmədi");
                        }
                        return response.text();
                    })
                    .then(html => {
                        mainContent.innerHTML = html;
                        menuList.classList.remove("show"); // Mobil menyunu bağla
                        document.body.classList.remove("menu-open"); // Overlay-i bağla
                    })
                    .catch(err => {
                        mainContent.innerHTML = `<p>Səhifə yüklənərkən xəta baş verdi.</p>`;
                        console.error(err);
                        menuList.classList.remove("show");
                        document.body.classList.remove("menu-open");
                    });
            } else if (frameUrl) {
                // Əgər iframe açılacaqsa
                mainContent.innerHTML = `
                    <iframe src="${frameUrl}" frameborder="0" style="width: 100%; height: 80vh; border-radius: 10px;"></iframe>
                `;
                menuList.classList.remove("show"); // Mobil menyunu bağla
                document.body.classList.remove("menu-open"); // Overlay-i bağla
            }
        }
    });

    // Overlay-ə kliklə menyunu bağlamaq (istəyə bağlı)
    document.body.addEventListener("click", (e) => {
        if (document.body.classList.contains("menu-open")) {
            // Overlay sahəsi kliklənibsə, menyunu bağla
            if (!menuList.contains(e.target) && e.target !== hamburgerBtn) {
                menuList.classList.remove("show");
                document.body.classList.remove("menu-open");
            }
        }
    });
});
