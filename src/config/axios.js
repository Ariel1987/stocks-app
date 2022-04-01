import axios from 'axios'

const baseUrl = { serverUrl: 'http://localhost:3000', stocksUrl: 'https://www.alphavantage.co' } 
const API_KEY = '76UQZH22U0E1YTAW'

const api = axios.create()

export { api, baseUrl, API_KEY }
