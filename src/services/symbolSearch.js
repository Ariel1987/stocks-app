import { api, baseUrl, API_KEY } from '../config/axios'

const symbolSearch = async (search) => {
  try {
    return await api.get(`${baseUrl.stocksUrl}/query?function=SYMBOL_SEARCH&keywords=${search}&apikey=${API_KEY}`)
  } catch (error) {
    throw new Error(error)
  }
}

export default symbolSearch


