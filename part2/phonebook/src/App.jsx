import {useState, useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [infoContent, setInfoContent] = useState({
    message: "", type: ""
  })

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
      .catch(() => {
        setNotification(`Error while loading entries`, 'error', 5)
      })
  }, []);

  const setNotification = (message, type, seconds = 3) => {
    setInfoContent({message, type})

    setTimeout(() => {
      setInfoContent({message: "", type: ""})
    }, 1000*seconds)
  }

  const addPerson = (event) => {
    event.preventDefault()

    const nameInPersons = persons.some(person => person.name === newName)
    if (nameInPersons) {
      modifyNumber(newName)
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
        setNotification(`Added ${returnedPerson.name}`, 'info')
      })
      .catch(() => {
        setNotification('Error creating an entry', 'error', 5)
      })
  }

  const deletePerson = (targetPerson) => {
    if (confirm(`Delete ${targetPerson.name}?`)) {
      personService
        .remove(targetPerson.id)
        .then(() => {
          setPersons(persons.filter(person => {
            return person.id !== targetPerson.id
          }))
          setNotification(`Deleted ${targetPerson.name}`,  'info')
        })
        .catch(() => {
          setNotification('Error deleting an entry', 'error', 5)
        })
    }
  }

  const modifyNumber = (name) => {
    const question =
      `${name} is already added to phonebook, replace the old number with a new one?`

    if (confirm(question)) {
      const changedPerson = persons.find(person => person.name === name)
      changedPerson.number = newNumber

      personService
        .update(changedPerson)
        .then(returnedPerson => {
          setPersons(persons.map(person =>
            person.id !== returnedPerson.id ? person : returnedPerson
          ))
          setNotification(`Changed phone number of ${returnedPerson.name}`, 'info')
        })
        .catch((error) => {
          setNotification(`Error modifying the entry: ${error.message}`, 'error', 5)
        })
    }
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setFilter(event.target.value)

  const filteredPersons = persons.filter(person =>
    person.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    ||
    person.number.includes(filter)
  )

  return (
    <div>
      <h1>Phonebook App</h1>

      <Notification content={infoContent} />

      <h2>Filter Results</h2>
      <Filter value={filter} eventHandler={handleFilterChange}/>

      <h2>Add a new</h2>
      <PersonForm
        values={{newNumber, newName}}
        eventHandlers={{handleNameChange, handleNumberChange, addPerson}}
      />

      <h2>Numbers</h2>
      <Persons persons={filteredPersons} handleClick={deletePerson}/>
    </div>
  )
}

export default App