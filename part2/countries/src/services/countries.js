import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

function getAll() {
  const request = axios.get(`${baseUrl}/all`)
  return request.then(response => response.data)
}

export default {getAll}