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
import { useLoginData } from '../../../context/useLoginData'
import Stocks from '../../molecules/Stocks/Stocks'

const Home = () => {
  const [stocks, setStocks] = useState()
  const { dispatch, state } = useStocksData()
  const { state: loginState } = useLoginData()

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
      {state.data ? <Stocks /> : <h1>Welcome, {loginState.user.name}</h1>}
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
