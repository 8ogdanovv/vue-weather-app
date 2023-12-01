import axios from 'axios'

const getWeather = async (location) => {
  const {latitude, longitude} = location
  try {
    const response = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=auto&current=temperature_2m&hourly=temperature_2m&daily=sunrise,sunset`
      )
    const jsonResponse = response.data // Access the parsed JSON response using the 'data' property

    return jsonResponse
  } catch (error) {
    console.error('Error fetching IP info:', error)
    return null
  }
}

export default getWeather