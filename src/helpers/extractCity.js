// Helper function to extract current city data
function extractCurrentCity(source) {
  const { city, location } = source
  return {
    name: city.names.en,
    latitude: location.latitude,
    longitude: location.longitude,
  }
}

// Helper function to extract city data
function extractCity(input) {
  const { name, latitude, longitude } = input
  return {
    name,
    latitude,
    longitude,
  }
}

export { extractCurrentCity, extractCity }