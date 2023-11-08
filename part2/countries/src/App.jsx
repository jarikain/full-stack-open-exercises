import {useEffect, useState} from 'react'
import axios from 'axios'
import Countries from './components/Countries'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [allCountries, setAllCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setAllCountries(response.data)
      })
      .catch(() => {
        setAllCountries([])
      })
  }, []);

  function handleInputChange(event) {
    setInputValue(event.target.value)
  }

  const filteredCountries = allCountries.filter(
    country => {
      const countryName = country.name.common.toLocaleLowerCase()
      const searchString = inputValue.toLocaleLowerCase()

      return countryName.includes(searchString)
    })

  const exactCountryMatch = filteredCountries.filter(
    country => {
      return country.name.common.toLocaleLowerCase() === inputValue.toLocaleLowerCase()
    }
  )

  return (
    <div>
      <p>{`find countries `}
        <input value={inputValue} onChange={handleInputChange}></input>
      </p>
      <Countries
        clickHandler={setInputValue}
        countries={
          exactCountryMatch.length === 1 ?
            exactCountryMatch : filteredCountries
        }/>
    </div>
  )
}

export default App