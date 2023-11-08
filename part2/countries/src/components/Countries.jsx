import CountryInfo from './CountryInfo'

function Countries({countries}) {
  if (countries.length === 1) {
    return (
      <CountryInfo country={countries[0]}/>
    )
  }

  if (countries.length > 10) return null

  return countries.map(
    country => (
      <p key={country.name.common}>{country.name.common}</p>
    )
  )
}

export default Countries