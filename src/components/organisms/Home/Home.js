import { useEffect, useState } from 'react'
import stocksApi from '../../../services/stocksApi'
import Button from '../../atoms/Button/Button'
import Input from '../../atoms/Input/Input'

const Home = () => {
  const [data, setData] = useState()

  useEffect(() => {
    async function fetchStocksData() {
      const response = stocksApi('DAI.DEX')
      setData(response)
    }
    fetchStocksData()
  }, [])
  console.log(data)

  return (
    <div>
      <Input
        placeholder="Search company"
        id="company"
        type="text"
        onChange={(event) => event.target.value}
        
      />
      <Button>Search</Button>
    </div>
  )
}

export default Home
