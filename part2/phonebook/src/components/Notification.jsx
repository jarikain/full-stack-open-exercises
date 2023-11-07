const Notification = ({message}) => {
  const notificationStyle = {
    display: 'inline',
    padding: '15px',
    border: '3px solid #016d24',
    borderRadius: '10px',
    color: '#016d24',
    fontWeight: 600,
    fontFamily: 'sans-serif'
  }

  return !message ? null : (
    <div style={notificationStyle}>
      {message}
    </div>
  )
}

export default Notification