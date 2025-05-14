// Konvertasiya funksiyası
function convertCoordinates(latitude, longitude, zone) {
  let convertedLat = 0;
  let convertedLon = 0;

  if (zone === '39N') {
    // 39N zonası üçün konvertasiya formulu
    convertedLat = latitude + 0.1;  // Bu sadəcə nümunədir, əsl formula ilə əvəz edin
    convertedLon = longitude + 0.1; // Bu sadəcə nümunədir, əsl formula ilə əvəz edin
  } else if (zone === '38N') {
    // 38N zonası üçün konvertasiya formulu
    convertedLat = latitude + 0.2;  // Bu sadəcə nümunədir, əsl formula ilə əvəz edin
    convertedLon = longitude + 0.2; // Bu sadəcə nümunədir, əsl formula ilə əvəz edin
  }

  return { lat: convertedLat, lon: convertedLon };
}

// Formu göndərərkən konvertasiyanı həyata keçir
document.getElementById('converter-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Daxil edilən məlumatları oxuyuruq
  const zone = document.getElementById('zone').value;
  const latitude = parseFloat(document.getElementById('latitude').value);
  const longitude = parseFloat(document.getElementById('longitude').value);

  // Koordinatları konvertasiya edirik
  const result = convertCoordinates(latitude, longitude, zone);

  // Nəticəni ekrana göstəririk
  const resultElement = document.getElementById('converted-coordinates');
  resultElement.textContent = `Converted Latitude: ${result.lat}, Converted Longitude: ${result.lon}`;
});
