import {useState} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', number: '040-123456', id: 1},
    {name: 'Ada Lovelace', number: '39-44-5323523', id: 2},
    {name: 'Dan Abramov', number: '12-43-234345', id: 3},
    {name: 'Mary Poppendieck', number: '39-23-6423122', id: 4}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setFilter(event.target.value)

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
      id: persons.length + 1
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

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