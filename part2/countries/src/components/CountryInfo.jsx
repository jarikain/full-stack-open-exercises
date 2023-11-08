import Weather from './Weather'

function CountryInfo({country}) {
  const languages = Object.values(country.languages)

  return (
    <div>
      <h1>{country.name.common}</h1>

      <p>Capital: {country.capital}</p>
      <p>Area: {country.area.toLocaleString()} km<sup>2</sup></p>

      <h2>Languages:</h2>
      <ul> {
        languages.map(language =>
          <li key={language}>
            {language}
          </li>
        )}
      </ul>

      <img
        style={{boxShadow: "0 5px 30px rgba(0,0,0,0.2)"}}
        src={country.flags.png}
        alt={country.flags.alt}
      />

      <Weather country={country} />
    </div>
  )
}

export default CountryInfo