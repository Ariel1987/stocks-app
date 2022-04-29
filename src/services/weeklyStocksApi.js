import { api, baseUrl, API_KEY } from '../config/axios'

const weeklyStocksApi = async (symbol) => {
  try {
    return await api.get(`${baseUrl.stocksUrl}/query?function=TIME_SERIES_WEEKLY&symbol=${symbol}&outputsize=full&apikey=${API_KEY}`)
  } catch (error) {
    throw new Error(error)
  }
}

export default weeklyStocksApi
