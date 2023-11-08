const Notification = ({content}) => {
  const contentTypeColors = {
    error: 'red',
    info: 'green'
  }
  const contentColor = contentTypeColors[content.type] || 'black'

  const notificationStyle = {
    padding: '15px',
    border: '3px solid',
    borderRadius: '10px',
    borderColor: contentColor,
    color: contentColor,
    fontWeight: 600,
    fontFamily: 'sans-serif'
  }

  return !content.message ? null : (
    <div style={notificationStyle}>
      {content.message}
    </div>
  )
}

export default Notification