document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const menuList = document.getElementById("menuList");
  const mainContent = document.querySelector("main");

  // Hamburger menyunu aç/qap
  hamburgerBtn.addEventListener("click", () => {
    menuList.classList.toggle("show");
  });

  // Accessibility üçün enter və boşluq ilə də aç
  hamburgerBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      menuList.classList.toggle("show");
    }
  });

  // Menyuya kliklə səhifə yüklə və ya iframe göstər
  menuList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const page = e.target.getAttribute("data-page");
      const frameUrl = e.target.getAttribute("data-frame");

      if (page) {
        fetch(page)
          .then(res => res.text())
          .then(html => {
            mainContent.innerHTML = html;
            menuList.classList.remove("show");
          })
          .catch(() => {
            mainContent.innerHTML = "<p>Xəta baş verdi</p>";
          });
      } else if (frameUrl) {
        mainContent.innerHTML = `
          <iframe src="${frameUrl}" frameborder="0" style="width: 100%; height: 80vh;"></iframe>
        `;
        menuList.classList.remove("show");
      }
    }
  });
});
