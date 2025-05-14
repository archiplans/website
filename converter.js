// Konvertasiya funksiyası
function convertCoordinates(latitude, longitude, zone) {
  let convertedLat = 0;
  let convertedLon = 0;

  if (zone === '39N') {
    convertedLat = latitude + 0.1;
    convertedLon = longitude + 0.1;
  } else if (zone === '38N') {
    convertedLat = latitude + 0.2;
    convertedLon = longitude + 0.2;
  }

  return { lat: convertedLat, lon: convertedLon };
}

// Formu göndərərkən konvertasiyanı həyata keçir
document.getElementById('convertor-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const zone = document.getElementById('zone').value;
  const easting = parseFloat(document.getElementById('easting').value);
  const northing = parseFloat(document.getElementById('northing').value);

  const result = convertCoordinates(easting, northing, zone);

  const resultElement = document.getElementById('result');
  resultElement.textContent = `Converted Latitude: ${result.lat}, Converted Longitude: ${result.lon}`;
});

// Hamburger menyunun açılması/bağlanması
function toggleMenu() {
  const menu = document.getElementById("menu-links");
  menu.classList.toggle("show");
}

function hideMenu() {
  const menu = document.getElementById("menu-links");
  menu.classList.remove("show");
}
