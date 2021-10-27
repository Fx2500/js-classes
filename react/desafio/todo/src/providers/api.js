import axios from 'axios';


const api_code = '0qvtsca'

const client = axios.create({
  baseURL: `https://otterwise-fake-api.herokuapp.com/tasks/${api_code}`,
  timeout: 1000,
})

export default client




// email: d.holz@live.com
// senha: EuHKGr