document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");
    const content = document.getElementById("content");

    // Hamburger toggle
    hamburger.addEventListener("click", () => {
        menu.classList.toggle("show");
    });

    // Menu buttons load content
    const buttons = menu.querySelectorAll("button[data-page]");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const page = button.getAttribute("data-page");

            // For mobile: hide menu after click
            if (menu.classList.contains("show")) {
                menu.classList.remove("show");
            }

            // Load page content via fetch API
            fetch(page)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Səhifə yüklənərkən xəta baş verdi: ${response.statusText}`);
                    }
                    return response.text();
                })
                .then(html => {
                    content.innerHTML = html;
                })
                .catch(error => {
                    content.innerHTML = `<p style="color:red;">${error.message}</p>`;
                });
        });
    });
});
