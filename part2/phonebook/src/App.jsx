import {useState, useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, []);

  const addPerson = (event) => {
    event.preventDefault()

    const nameInPersons = persons.some(person => person.name === newName)
    if (nameInPersons) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const newPerson = {
      name: newName,
      number: newNumber,
    }

    personService
      .create(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setFilter(event.target.value)

  const personsToShow = persons.filter(person =>
    person.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    ||
    person.number.includes(filter)
  )

  return (
    <div>
      <h1>Phonebook App</h1>

      <h2>Filter Results</h2>
      <Filter value={filter} eventHandler={handleFilterChange}/>

      <h2>Add a new</h2>
      <PersonForm
        values={{newNumber, newName}}
        eventHandlers={{handleNameChange, handleNumberChange, addPerson}}
      />

      <h2>Numbers</h2>
      <Persons persons={personsToShow}/>
    </div>
  )
}

export default App