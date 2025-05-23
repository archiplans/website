document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const menu = document.querySelector("ul.menu");

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("show");
    });

    // Menyu düymələri
    const homeBtn = document.getElementById("home-btn");
    const melumatBtn = document.getElementById("melumat-btn");
    const elaqeBtn = document.getElementById("elaqe-btn");
    const mainContent = document.getElementById("main-content");

    homeBtn.addEventListener("click", () => {
        mainContent.innerHTML = `
            <h1>Xoş gəlmisiniz!</h1>
            <p>Bu, ARCHİPLANS MMC şirkətinin əsas səhifəsidir.</p>
        `;
        menu.classList.remove("show");
    });

    melumatBtn.addEventListener("click", () => {
        fetch('info.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error("Səhifə yüklənərkən xəta baş verdi.");
                }
                return response.text();
            })
            .then(data => {
                mainContent.innerHTML = data;
            })
            .catch(error => {
                mainContent.innerHTML = `<p style="color:red;">${error.message}</p>`;
            });
        menu.classList.remove("show");
    });

    elaqeBtn.addEventListener("click", () => {
        mainContent.innerHTML = `
            <h2>Əlaqə</h2>
            <p>Email: info@archiplans.az</p>
            <p>Telefon: +994 50 123 45 67</p>
            <p>Ünvan: Bakı, Azərbaycan</p>
        `;
        menu.classList.remove("show");
    });
});
