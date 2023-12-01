import axios from 'axios'

const GEO_API_KEY = import.meta.env.VITE_GEO_API_KEY // Access the VITE_GEO_API_KEY variable from .env

const getIPInfo = async () => {
  try {
    const response = await axios.get(`https://api.geoapify.com/v1/ipinfo?apiKey=${GEO_API_KEY}`)
    const jsonResponse = response.data; // Access the parsed JSON response using the 'data' property

    return jsonResponse
  } catch (error) {
    console.error('Error fetching IP info:', error)
    return null
  }
}

export default getIPInfo
