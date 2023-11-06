const PersonForm = ({values, eventHandlers}) => {
  return (
    <form onSubmit={eventHandlers.addPerson} id="phonebookForm">

      <div>name: <input
        value={values.newName}
        onChange={eventHandlers.handleNameChange}
        name="nameInput"/>
      </div>

      <div>number: <input
        value={values.newNumber}
        onChange={eventHandlers.handleNumberChange}
        name="numberInput"/>
      </div>

      <div>
        <button type="submit">add</button>
      </div>

    </form>
  )
}

export default PersonForm