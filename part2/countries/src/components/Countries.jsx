import CountryInfo from './CountryInfo'

function Countries({countries, clickHandler}) {
  if (countries.length === 1) {
    return (
      <CountryInfo country={countries[0]}/>
    )
  }

  if (countries.length > 10) return null

  return countries.map(
    country => (
      <p key={country.name.common}>{`${country.name.common} `}
        <button onClick={() => clickHandler(country.name.common)}>
          show
        </button>
      </p>
    )
  )
}

export default Countries