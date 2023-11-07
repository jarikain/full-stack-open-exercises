const Persons = ({persons, handleClick}) => {
  return persons.map(person => (
    <div key={person.id}>
      <p>
        {`${person.name} ${person.number} `}
        <button onClick={() => handleClick(person)}>delete</button>
      </p>
    </div>
  ))
}

export default Persons