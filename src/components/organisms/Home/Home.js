import { useState } from 'react'
import {
  useStocksData,
  FETCHING_DATA,
  FETCHING_DATA_ERROR,
  FETCHING_DATA_SUCCESS,
} from '../../../context/useStocksData'
import Button from '../../atoms/Button/Button'
import Input from '../../atoms/Input/Input'
import { Wrapper } from './Home.styles'
import fetchStocksData from '../../../utils/fetchStocksData'
import formatDate from '../../../utils/fotmatDate'
import StocksChart from '../../molecules/StocksChart/StocksChart'
import { useLoginData } from '../../../context/useLoginData'

const Home = () => {
  const [stocks, setStocks] = useState()
  const { dispatch, state } = useStocksData()
  const { state: loginState } = useLoginData()

  const date = formatDate()
  const stocksData =
    state.data &&
    Object.entries(state.data?.stocksResult.data['Time Series (Daily)'][date])

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      dispatch({ type: FETCHING_DATA })
      const response = await fetchStocksData(stocks)
      dispatch({ type: FETCHING_DATA_SUCCESS, payload: response })
    } catch (error) {
      dispatch({ type: FETCHING_DATA_ERROR })
    }
    setStocks('')
  }

  // console.log(Object.entries(state.data?.weeklyStocksResult.data['Weekly Time Series']))

  return (
    <Wrapper onSubmit={handleSubmit}>
      {state.data ? (
        <>
          <h1>{`${state.data?.payload.companyName} (${state.data?.payload.symbol})`}</h1>
          <StocksChart />
          <h2>
            Open:{' '}
            {(Math.round(stocksData[0][1] * 100) / 100)
              .toFixed(2)
              .replace(/\B(?=(?:\d{3})+\b)/g, ',')}
          </h2>
          <h2>
            High:{' '}
            {(Math.round(stocksData[1][1] * 100) / 100)
              .toFixed(2)
              .replace(/\B(?=(?:\d{3})+\b)/g, ',')}
          </h2>
          <h2>
            Low:{' '}
            {(Math.round(stocksData[2][1] * 100) / 100)
              .toFixed(2)
              .replace(/\B(?=(?:\d{3})+\b)/g, ',')}
          </h2>
          <h2>
            Close:{' '}
            {(Math.round(stocksData[3][1] * 100) / 100)
              .toFixed(2)
              .replace(/\B(?=(?:\d{3})+\b)/g, ',')}
          </h2>
          <h2>
            Volume:{' '}
            {(stocksData[4][1] + '').replace(/\B(?=(?:\d{3})+\b)/g, ',')}
          </h2>
        </>
      ) : (
        <h1>Welcome, {loginState.user.name}</h1>
      )}
      <div>
        <Input
          placeholder="Search company"
          id="company"
          type="text"
          onChange={(event) => setStocks(event.target.value)}
          value={stocks || ''}
        />
        <Button>Search</Button>
      </div>
    </Wrapper>
  )
}

export default Home
