document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const menuList = document.getElementById("menuList");
    const mainContent = document.querySelector("main");

    // Hamburger menyu toggle
    hamburgerBtn.addEventListener("click", () => {
        menuList.classList.toggle("show");
    });

    // Klaviatura ilə də hamburger aktivliyi (Accessibility üçün)
    hamburgerBtn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            menuList.classList.toggle("show");
        }
    });

    // Menyu düymələrinə klikdə səhifə yükləmə funksiyası
    menuList.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            const page = e.target.getAttribute("data-page");

            if (page) {
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
                    })
                    .catch(err => {
                        mainContent.innerHTML = `<p>Səhifə yüklənərkən xəta baş verdi.</p>`;
                        console.error(err);
                    });
            }
        }
    });
});
