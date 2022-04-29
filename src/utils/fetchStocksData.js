import searchCompany from "../services/searchCompany"
import stocksApi from "../services/stocksApi"
import weeklyStocksApi from "../services/weeklyStocksApi"

const fetchStocksData = async (companyName) => {
  const payload = {
    symbol: null,
    companyName: null,
  }

  try {
    const companySearchResult = await searchCompany(companyName)
    payload.symbol = companySearchResult?.data.bestMatches[0]['1. symbol']
    payload.companyName = companySearchResult?.data.bestMatches[0]['2. name']

    const stocksResult = await stocksApi(payload.symbol)
    const weeklyStocksResult = await weeklyStocksApi(payload.symbol) 

    return { stocksResult, weeklyStocksResult, payload }
  } catch (error) {
    throw new Error(error)
  }
}

export default fetchStocksData