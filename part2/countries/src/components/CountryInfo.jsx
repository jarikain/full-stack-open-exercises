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
        src={country.flags.png}
        alt={country.flags.alt}
      />
    </div>
  )
}

export default CountryInfo