document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button[data-page]');
  const mainContent = document.getElementById('main-content');
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('ul.menu');

  // Hamburger menyusunu toggle etmək
  hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
  });

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const page = btn.getAttribute('data-page');
      
      fetch(page)
        .then(response => {
          if (!response.ok) throw new Error('Səhifə yüklənə bilmədi');
          return response.text();
        })
        .then(html => {
          mainContent.innerHTML = html;
          menu.classList.remove('show'); // mobil menyunu bağla klikdən sonra
        })
        .catch(error => {
          mainContent.innerHTML = `<p>Xəta baş verdi: ${error.message}</p>`;
          menu.classList.remove('show');
        });
    });
  });
});
