import axios from 'axios'; //axios to make http requests

const api= axios.create({
  baseURL:'https://base-tamimha.techwin.sa/api'
});

export default api;