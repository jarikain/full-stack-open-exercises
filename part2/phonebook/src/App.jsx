import {useState} from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', number: '060-1231234', id: 1}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addPerson} id="phonebookForm">
        <div>name: <input value={newName} onChange={handleNameChange} name="nameInput"/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} name="numberInput"/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      {persons.map(person =>
        <p key={person.id}>{person.name} {person.number}</p>
      )}
    </div>
  )
}

export default App