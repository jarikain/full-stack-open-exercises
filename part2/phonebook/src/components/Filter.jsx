const Filter = ({value, eventHandler}) => {
  return (
    <div>filter shown with <input
      value={value}
      onChange={eventHandler}
      name="filterInput"/>
    </div>
  )
}

export default Filter