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

    // Menyu düymələrinə klikdə səhifə yükləmə və ya iframe açma funksiyası
    menuList.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            const page = e.target.getAttribute("data-page");
            const frameUrl = e.target.getAttribute("data-frame");

            if (page) {
                // data-page varsa, normal səhifə kimi aç (link kimi)
                window.location.href = page;
            } else if (frameUrl) {
                // data-frame varsa, iframe-də aç
                mainContent.innerHTML = `
                    <iframe src="${frameUrl}" frameborder="0" style="width: 100%; height: 80vh; border-radius: 10px;"></iframe>
                `;
                menuList.classList.remove("show"); // Mobil menyunu bağla
            }
        }
    });
});
