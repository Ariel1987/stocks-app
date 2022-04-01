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
import { Wrapper } from './Home.styles'

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

    setStocks('')
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Input
        placeholder="Search company"
        id="company"
        type="text"
        onChange={(event) => setStocks(event.target.value)}
        value={stocks || ''}
      />
      <Button>Search</Button>
      {state && (
        <>
          <h1>{state.data?.data['Meta Data']['1. Information']}</h1>
          <h2>{state.data?.data['Meta Data']['2. Symbol'].toUpperCase()}</h2>
          <h2>Open: {state.data?.data['Time Series (Daily)']['2022-03-31']['1. open']}</h2>
          <h2>High: {state.data?.data['Time Series (Daily)']['2022-03-31']['2. high']}</h2>
          <h2>Low: {state.data?.data['Time Series (Daily)']['2022-03-31']['3. low']}</h2>
          <h2>Close: {state.data?.data['Time Series (Daily)']['2022-03-31']['4. close']}</h2>
          <h2>Close: {state.data?.data['Time Series (Daily)']['2022-03-31']['5. volume']}</h2>
        </>
      )}
    </Wrapper>
  )
}

export default Home
