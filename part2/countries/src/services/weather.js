import axios from 'axios'

const api_key = import.meta.env.VITE_OPENWEATHER_API_KEY
const baseUrl = 'https://api.openweathermap.org/data/2.5/'

function getWeatherData({lat, lon}) {
  const weatherApiUrl =
    `${baseUrl}weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`
  const request = axios.get(weatherApiUrl)
  return request.then(response => response.data)
}

function getIconUrl(iconName) {
  if (iconName)
  return `https://openweathermap.org/img/wn/${iconName}@2x.png`
}

export default {
  getWeatherData,
  getIconUrl
}