import CompanyInfo from '../../atoms/CompanyInfo/CompanyInfo'
import StocksChart from '../../atoms/StocksChart/StocksChart'
import StocksOutput from '../../atoms/StocksOutput/StocksOutput'

const Stocks = () => {
  return (
    <>
      <CompanyInfo /> 
      <StocksChart />
      <StocksOutput type="Open" index="0" />
      <StocksOutput type="High" index="1" />
      <StocksOutput type="Low" index="2" />
      <StocksOutput type="Close" index="3" />
      <StocksOutput type="Volume" index="4" />
    </>
  )
}

export default Stocks
