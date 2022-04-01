import { api, baseUrl, API_KEY } from '../config/axios'

const stocksApi = async (symbol) => {
  try {
    return await api.get(`${baseUrl.stocksUrl}/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=full&apikey=${API_KEY}`)
  } catch (error) {
    throw new Error(error)
  }
}

export default stocksApi
