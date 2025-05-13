// script.js

// Səhifə dəyişmə funksiyası
function showPage(page) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => section.style.display = 'none');

  const activeSection = document.getElementById(page);
  if (activeSection) {
    activeSection.style.display = 'block';
  }
}

// Əsas səhifəyə qayıtma funksiyası
function goHome() {
  showPage('information');
}

// Koordinat çevirici funksiyası
function convertUTM() {
  const easting = parseFloat(document.getElementById('easting').value);
  const northing = parseFloat(document.getElementById('northing').value);
  const zone = document.getElementById('zone').value;

  if (isNaN(easting) || isNaN(northing)) {
    document.getElementById('result').innerText = 'Xahiş olunur düzgün koordinat daxil edin!';
    return;
  }

  let lat, lon;

  if (zone === "38") {
    lat = 40.3777 + (northing - 4649776) * 0.00001;
    lon = 49.8671 + (easting - 500000) * 0.00001;
  } else if (zone === "39") {
    lat = 41.3777 + (northing - 4649776) * 0.00001;
    lon = 50.8671 + (easting - 500000) * 0.00001;
  }

  document.getElementById('result').innerHTML = `Coordinates: ${lat.toFixed(6)}, ${lon.toFixed(6)} - <a href="https://www.google.com/maps?q=${lat},${lon}" target="_blank">View on Google Maps</a>`;
}
