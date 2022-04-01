import { useState } from 'react'
import {
  useStocksData,
  FETCHING_DATA,
  FETCHING_DATA_ERROR,
  FETCHING_DATA_SUCCESS,
} from '../../../context/useStocksData'
import Button from '../../atoms/Button/Button'
import Input from '../../atoms/Input/Input'
import stocksApi from '../../../services/stocksApi'

const Home = () => {
  const [stocks, setStocks] = useState()
  const { dispatch, state } = useStocksData()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      dispatch({ type: FETCHING_DATA })
      const response = await stocksApi(stocks)
      dispatch({ type: FETCHING_DATA_SUCCESS, payload: response })
    } catch (error) {
      dispatch({ type: FETCHING_DATA_ERROR })
    }
  }
  console.log(state)

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Search company"
        id="company"
        type="text"
        onChange={(event) => setStocks(event.target.value)}
      />
      <Button>Search</Button>
    </form>
  )
}

export default Home
