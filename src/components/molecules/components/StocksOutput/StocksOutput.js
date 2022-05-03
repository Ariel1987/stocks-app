import { useStocksData } from '../../../../context/useStocksData'
import formatDate from '../../../../utils/fotmatDate'

const StocksOutput = ({ type, index }) => {
  const { state } = useStocksData()
  const date = formatDate()
  const stocksData =
    state.data &&
    Object.entries(state.data.stocksResult.data['Time Series (Daily)'][date])
  const stocksValues = (Math.round(stocksData[index][1] * 100) / 100).toFixed(2).replace(/\B(?=(?:\d{3})+\b)/g, ',') 

  return (
    <div>
      <span>{type}: </span>
      <span>{stocksValues}</span>
    </div>
  )
}

export default StocksOutput
