// Menyu açılma və bağlanma funksiyası
function toggleMenu() {
  const menuLinks = document.querySelector('.menu-links');
  menuLinks.classList.toggle('active');  // Menyu açılacaq və ya bağlanacaq
}

// Səhifələr arası keçid funksiyası
function showPage(page) {
  const sections = ['information', 'convertor', 'extractPage', 'technicalPassport', 'address'];
  
  // Bütün səhifələri gizləyirik
  sections.forEach(function(section) {
    document.getElementById(section).style.display = 'none';
  });

  // İstənilən səhifəni göstəririk
  document.getElementById(page).style.display = 'block';

  // Mobil versiyada menyunu bağlamaq
  document.querySelector('.menu-links').classList.remove('active');
}

// UTM koordinatlarını çevirmək üçün funksiyanı təyin edirik
function convertUTM() {
  const easting = parseFloat(document.getElementById('easting').value);
  const northing = parseFloat(document.getElementById('northing').value);
  const zone = document.getElementById('zone').value;

  // Nəticənin göstərilməsi
  if (isNaN(easting) || isNaN(northing)) {
    document.getElementById('result').textContent = 'Zəhmət olmasa, düzgün qiymətləri daxil edin.';
    return;
  }

  // UTM to Coordinates conversion formula (sadələşdirilmiş nümunə):
  // UTM koordinatlarını real koordinatlara çevirmək üçün daha ətraflı formul istifadə edilə bilər.
  const lat = (northing / 1000000);  // Sadə bir çevirmə nümunəsi
  const lon = (easting / 1000000);

  // Nəticənin göstərilməsi
  document.getElementById('result').textContent = `Koordinatlar: Latitude: ${lat}, Longitude: ${lon}`;
}
