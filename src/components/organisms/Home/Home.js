import { useEffect, useState } from 'react'
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
import symbolSearch from '../../../services/symbolSearch'

const Home = () => {
  const [stocks, setStocks] = useState()
  const { dispatch, state } = useStocksData()
  const [company, setCompany] = useState()
  
  const date = new Date()
  const now = Date.now(date)
  const nowDay = new Date(now).getDate() - 1
  const nowMonth = new Date(now).getMonth() + 1
  const nowYear = new Date(now).getFullYear()
  const realDate = `${nowYear}-0${nowMonth}-${nowDay}`

  useEffect(() => {
    const getData = async () => {
      setCompany(await symbolSearch('microsoft'))
    }
    getData()
  }, [])
  console.log(company?.data.bestMatches[0]['1. symbol'])

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      dispatch({ type: FETCHING_DATA })
      const response = await stocksApi(stocks)
      dispatch({ type: FETCHING_DATA_SUCCESS, payload: response })
      console.log(response)
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
          <h1>{state.data?.data['Meta Data']['2. Symbol'].toUpperCase()}</h1>
          <h2>Open: {(Math.round(state.data?.data['Time Series (Daily)'][realDate]['1. open'] * 100) / 100).toFixed(2)}</h2>
          <h2>High: {(Math.round(state.data?.data['Time Series (Daily)'][realDate]['2. high'] * 100) / 100).toFixed(2)}</h2>
          <h2>Low: {(Math.round(state.data?.data['Time Series (Daily)'][realDate]['3. low'] * 100) / 100).toFixed(2)}</h2>
          <h2>Close: {(Math.round(state.data?.data['Time Series (Daily)'][realDate]['4. close'] * 100) / 100).toFixed(2)}</h2>
          <h2>Volume: {(state.data?.data['Time Series (Daily)'][realDate]['5. volume'] + '').replace(/\B(?=(?:\d{3})+\b)/g,',')}</h2>
        </>
      )}
    </Wrapper>
  )
}

export default Home
