document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button[data-page]');
  const mainContent = document.getElementById('main-content');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const page = btn.getAttribute('data-page');
      
      fetch(page)
        .then(response => {
          if (!response.ok) {
            throw new Error('Səhifə yüklənə bilmədi');
          }
          return response.text();
        })
        .then(html => {
          mainContent.innerHTML = html;
        })
        .catch(error => {
          mainContent.innerHTML = `<p>Xəta baş verdi: ${error.message}</p>`;
        });
    });
  });
});
