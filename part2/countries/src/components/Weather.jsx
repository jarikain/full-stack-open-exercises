import weatherServices from '../services/weather'
import {useEffect, useState} from 'react'

function Weather({country}) {
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    const capitalLocation = {
      lat: country.capitalInfo.latlng[0],
      lon: country.capitalInfo.latlng[1]
    }

    weatherServices
      .getWeatherData(capitalLocation)
      .then(data => {
        setWeatherData(data)
      })
      .catch(() => setWeatherData({}))
  }, [country]);

  if (!weatherData) {
    return null
  }

  const iconName = weatherData.weather[0].icon
  const iconUrl = weatherServices.getIconUrl(iconName)

  return (
    <div>
      <h2>Weather in {country.capital}</h2>
      <p>Temperature {weatherData.main.temp} C&deg;</p>
      <img
        src={iconUrl}
        alt={`Icon describing weather status of: ${weatherData.weather[0].description}`} />
      <p>Wind: {weatherData.wind.speed} m/s</p>
    </div>
  )
}

export default Weather