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

const Home = () => {
  const [stocks, setStocks] = useState()
  const { dispatch, state } = useStocksData()
  const date = formatDate()

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
      {state.data && (
        <>
          <h1>{`${state.data?.payload.companyName} (${state.data?.payload.symbol})`}</h1>
          <h2>
            Open:{' '}
            {(
              Math.round(
                state.data?.stocksResult.data['Time Series (Daily)'][date][
                  '1. open'
                ] * 100,
              ) / 100
            )
              .toFixed(2)
              .replace(/\B(?=(?:\d{3})+\b)/g, ',')}
          </h2>
          <h2>
            High:{' '}
            {(
              Math.round(
                state.data?.stocksResult.data['Time Series (Daily)'][date][
                  '2. high'
                ] * 100,
              ) / 100
            )
              .toFixed(2)
              .replace(/\B(?=(?:\d{3})+\b)/g, ',')}
          </h2>
          <h2>
            Low:{' '}
            {(
              Math.round(
                state.data?.stocksResult.data['Time Series (Daily)'][date][
                  '3. low'
                ] * 100,
              ) / 100
            )
              .toFixed(2)
              .replace(/\B(?=(?:\d{3})+\b)/g, ',')}
          </h2>
          <h2>
            Close:{' '}
            {(
              Math.round(
                state.data?.stocksResult.data['Time Series (Daily)'][date][
                  '4. close'
                ] * 100,
              ) / 100
            )
              .toFixed(2)
              .replace(/\B(?=(?:\d{3})+\b)/g, ',')}
          </h2>
          <h2>
            Volume:{' '}
            {(
              state.data?.stocksResult.data['Time Series (Daily)'][date][
                '5. volume'
              ] + ''
            ).replace(/\B(?=(?:\d{3})+\b)/g, ',')}
          </h2>
        </>
      )}
    </Wrapper>
  )
}

export default Home
