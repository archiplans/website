// Sayfa gösterimi fonksiyonu
function showPage(page) {
  const sections = ['information', 'convertor', 'extractPage', 'technicalPassport', 'address'];
  sections.forEach(section => {
    document.getElementById(section).style.display = 'none';
  });
  document.getElementById(page).style.display = 'block';
}

// Mobil Menü açma ve kapama fonksiyonu
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu.style.display === 'block') {
    mobileMenu.style.display = 'none';
  } else {
    mobileMenu.style.display = 'block';
  }
}
