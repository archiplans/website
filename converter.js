// Konvertasiya funksiyası
function convertCoordinates(easting, northing, zone) {
  let convertedLat = 0;
  let convertedLon = 0;

  if (zone === '39N') {
    convertedLat = northing + 0.1;
    convertedLon = easting + 0.1;
  } else if (zone === '38N') {
    convertedLat = northing + 0.2;
    convertedLon = easting + 0.2;
  }

  return { lat: convertedLat, lon: convertedLon };
}

// Formu göndərərkən konvertasiyanı həyata keçir
document.getElementById('convertor-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const easting = parseFloat(document.getElementById('easting').value);
  const northing = parseFloat(document.getElementById('northing').value);
  const zone = document.getElementById('zone').value;

  if (isNaN(easting) || isNaN(northing)) {
    document.getElementById('result').textContent = 'Please enter valid UTM coordinates.';
    return;
  }

  const result = convertCoordinates(easting, northing, zone);

  document.getElementById('result').textContent = `Latitude: ${result.lat.toFixed(6)}, Longitude: ${result.lon.toFixed(6)}`;
});
